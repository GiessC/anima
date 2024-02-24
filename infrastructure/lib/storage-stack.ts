import { Stack } from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import type { Construct } from 'constructs';
import S3Resource from '../resources/S3Resource';
import type Settings from '../config/Settings';
import DynamoDBResource from '../resources/DynamoDBResource';

export interface StorageStackProps extends StackProps {}

export class StorageStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        settings: Settings,
        props?: StorageStackProps,
    ) {
        super(scope, id, props);
        this.createPictureBucket(id, settings);
        this.createUserTable(id, settings);
    }

    private createPictureBucket(id: string, settings: Settings) {
        const bucketId = `${id}-Pictures-${settings.environment}`;
        return S3Resource.createS3Bucket(
            this,
            bucketId,
            bucketId.toLowerCase(),
            settings.removalPolicy,
        );
    }

    private createUserTable(id: string, settings: Settings) {
        const tableId = `${id}-Users-${settings.environment}`;
        return DynamoDBResource.createDynamoTable(
            this,
            tableId,
            tableId.toLowerCase(),
            settings,
        );
    }
}
