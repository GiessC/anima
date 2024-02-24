import { RemovalPolicy, type App } from 'aws-cdk-lib';
import type Settings from '../config/Settings';

export const loadSettings = (app: App): Settings => {
    const environment: string = app.node.tryGetContext('environment') ?? 'dev';
    return {
        environment,
        removalPolicy:
            environment === 'prod'
                ? RemovalPolicy.RETAIN
                : RemovalPolicy.DESTROY,
    };
};
