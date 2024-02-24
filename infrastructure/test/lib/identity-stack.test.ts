import { App, RemovalPolicy } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import IdentityStack from '../../lib/storage-stack';
import type Settings from '../../config/Settings';

const SETTINGS: Settings = {
    environment: 'test',
    removalPolicy: RemovalPolicy.DESTROY,
};

it('Creates Cognito User Pool', () => {
    // Given
    const app = new App();

    // When
    const stack = new IdentityStack(app, 'TestIdentityStack', SETTINGS);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties('AWS::Cognito::UserPool', {
        UserPoolName: `TestIdentityStack-${SETTINGS.environment}-AnimaUsers`,
    });
});

it('Creates Cognito User Pool Client', () => {
    // Given
    const app = new App();

    // When
    const stack = new IdentityStack(app, 'TestIdentityStack', SETTINGS);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties('AWS::Cognito::UserPoolClient', {
        UserPoolName: `TestIdentityStack-${SETTINGS.environment}-AnimaUsers-client`,
    });
});
