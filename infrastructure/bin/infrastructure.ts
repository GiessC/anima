#!/usr/bin/env node
import 'source-map-support/register';
import StorageStack from '../lib/storage-stack';
import { App } from 'aws-cdk-lib';
import type Settings from '../config/Settings';
import { loadSettings } from '../utils/settings';
import { Tags } from 'aws-cdk-lib';
import CognitoStack from '../lib/cognito-stack';

const app = new App();
const settings: Settings = loadSettings(app);

if (!settings.environment) {
    throw new Error('Environment was not set when deploying, but is required.');
}
Tags.of(app).add('environment', settings.environment);

new StorageStack(app, `StorageStack-${settings.environment}`, settings);
new CognitoStack(app, `IdentityStack-${settings.environment}`, settings);
