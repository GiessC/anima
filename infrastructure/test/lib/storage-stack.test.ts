import { App, RemovalPolicy } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import StorageStack from '../../lib/storage-stack';
import type Settings from '../../config/Settings';

const SETTINGS: Settings = {
    environment: 'test',
    removalPolicy: RemovalPolicy.DESTROY,
};

it('Creates S3 Bucket', () => {
    // Given
    const app = new App();

    // When
    const stack = new StorageStack(
        app,
        `TestStorageStack-${SETTINGS.environment}`,
        SETTINGS,
    );
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties('AWS::S3::Bucket', {
        BucketName:
            `TestStorageStack-${SETTINGS.environment}-Pictures`.toLowerCase(),
    });
});

it('Creates DynamoDB Users Table', () => {
    // Given
    const app = new App();

    // When
    const stack = new StorageStack(
        app,
        `TestStorageStack-${SETTINGS.environment}`,
        SETTINGS,
    );
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
        TableName:
            `TestStorageStack-${SETTINGS.environment}-Users`.toLowerCase(),
    });
});
