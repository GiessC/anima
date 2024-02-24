import { RemovalPolicy, type App } from 'aws-cdk-lib';
import type Settings from '../config/Settings';

export const loadSettings = (app: App): Settings => {
    const environment: string =
        app.node.tryGetContext('environment') ?? 'development';
    return {
        environment,
        removalPolicy:
            environment === 'production'
                ? RemovalPolicy.RETAIN
                : RemovalPolicy.DESTROY,
    };
};
