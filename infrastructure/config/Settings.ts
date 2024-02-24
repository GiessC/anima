import type { Environment, RemovalPolicy } from 'aws-cdk-lib';

export default interface Settings {
    environment: string;
    removalPolicy: RemovalPolicy;
}
