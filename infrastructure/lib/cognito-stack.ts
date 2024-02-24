import { Stack, type StackProps } from 'aws-cdk-lib';
import type { Construct } from 'constructs';
import type Settings from '../config/Settings';
import CognitoResource from '../resources/CognitoResource';

export default class CognitoStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        settings: Settings,
        props?: StackProps,
    ) {
        super(scope, id, props);
        const userPoolId = `${id}-AnimaUsers`;
        CognitoResource.createUserPool(
            this,
            userPoolId,
            userPoolId.toLowerCase(),
            settings.removalPolicy,
        );
    }
}
