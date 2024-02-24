#!/usr/bin/env node
import 'source-map-support/register';
import { StorageStack } from '../lib/storage-stack';
import { App } from 'aws-cdk-lib/core/lib/app';
import type Settings from '../config/Settings';
import { loadSettings } from '../utils/settings';
import { Tags } from 'aws-cdk-lib';

const app = new App();
const settings: Settings = loadSettings(app);

if (!settings.environment) {
    throw new Error('Environment was not set when deploying, but is required.');
}
Tags.of(app).add('environment', settings.environment);

new StorageStack(app, 'StorageStack', settings);
