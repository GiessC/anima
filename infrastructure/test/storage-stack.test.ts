import { App, RemovalPolicy } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StorageStack } from '../lib/storage-stack';
import Settings from '../config/Settings';

const SETTINGS: Settings = {
    environment: 'test',
    removalPolicy: RemovalPolicy.DESTROY,
};

it('S3 Bucket Created', () => {
    // Given
    const app = new App();

    // When
    const stack = new StorageStack(app, 'TestStorageStack', SETTINGS);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties('AWS::S3::Bucket', {
        BucketName:
            `TestStorageStack-Pictures-${SETTINGS.environment}`.toLowerCase(),
    });
});

it('DynamoDB Users Table Created', () => {
    // Given
    const app = new App();

    // When
    const stack = new StorageStack(app, 'TestStorageStack', SETTINGS);
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
        TableName:
            `TestStorageStack-Users-${SETTINGS.environment}`.toLowerCase(),
    });
});
