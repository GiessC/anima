import {
    AttributeType,
    Billing,
    type TablePropsV2,
    TableV2,
} from 'aws-cdk-lib/aws-dynamodb';
import type { Construct } from 'constructs';
import Settings from '../config/Settings';

export default class DynamoDBResource {
    public static createDynamoTable(
        scope: Construct,
        id: string,
        tableName: string,
        settings: Settings,
        props?: TablePropsV2,
    ) {
        return new TableV2(scope, id, {
            ...props,
            partitionKey: { name: 'pk', type: AttributeType.STRING },
            sortKey: { name: 'sk', type: AttributeType.STRING },
            billing: Billing.onDemand(),
            globalSecondaryIndexes: [
                {
                    indexName: 'pk-sk-index',
                    partitionKey: { name: 'pk', type: AttributeType.STRING },
                    sortKey: { name: 'sk', type: AttributeType.STRING },
                },
            ],
            tableName,
            removalPolicy: settings.removalPolicy,
        });
    }
}
