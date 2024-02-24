import { Bucket, BucketProps } from 'aws-cdk-lib/aws-s3';
import { RemovalPolicy } from 'aws-cdk-lib';
import type { Construct } from 'constructs';

export default class S3Resource {
    public static createS3Bucket(
        scope: Construct,
        id: string,
        name: string,
        removalPolicy: RemovalPolicy = RemovalPolicy.RETAIN,
        props?: BucketProps,
    ): Bucket {
        return new Bucket(scope, id, {
            ...props,
            bucketName: name,
            removalPolicy: removalPolicy,
        });
    }
}
