import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const client = new DynamoDBClient();
const ddbDocClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.SAMPLE_TABLE;

export const handler = async (event) => {
  //  event bridge rule
  console.log('Received event:', JSON.stringify(event, null, 2));
  const { id, stockQuantity, price } = event.detail;

  const params = {
    TableName: TABLE_NAME,
    Item: {
      id,
      stockQuantity,
      price,
    },
  };

  try {
    await ddbDocClient.send(new PutCommand(params));
    console.log('Success - item added or updated');
  } catch (err) {
    console.log('Error', err.stack);
  }
};