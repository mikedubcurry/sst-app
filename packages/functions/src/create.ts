import * as uuid from 'uuid'
import { Table } from 'sst/node/table'
import handler from '@notes/core/handler'
import dynamoDb from '@notes/core/dynamodb'

export const main = handler(async (event) => {
    let data = {
        content: '',
        attachment: ''
    }

    if (event.body != null) {
        data = JSON.parse(event.body)
    }

    const params = {
        TableName: Table.Notes.tableName,
        Item: {
            userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    }

    await dynamoDb.put(params)

    return JSON.stringify(params.Item)
})

//import AWS from 'aws-sdk'
//import * as uuid from 'uuid'
//import { APIGatewayProxyEvent } from 'aws-lambda'
//
//import { Table } from 'sst/node/table'
//
//const dynamodb = new AWS.DynamoDB.DocumentClient();
//
//export async function main(event: APIGatewayProxyEvent) {
//    let data, params;
//
//    // Request body is pass in as a JSON encoded string in event::body
//    if (event.body) {
//        data = JSON.parse(event.body);
//        params = {
//            TableName: Table.Notes.tableName,
//            Item: {
//                // the attributes of the item to be created
//                userId: '123', // id of the author
//                noteId: uuid.v1(), // a unique uuid
//                content: data.content, // parsed from request body
//                attachment: data.attachment, // parsed from request body
//                createdAt: Date.now(), // current Unix timestamp
//            },
//        };
//    } else {
//        return {
//            statusCode: 404,
//            body: JSON.stringify({ error: true })
//        };
//    }
//
//    try {
//        await dynamodb.put(params).promise();
//
//        return {
//            statusCode: 200,
//            body: JSON.stringify(params.Item)
//        }
//    } catch (error) {
//        let message;
//        if (error instanceof Error) {
//            message = error.message;
//        } else {
//            message = String(error);
//        }
//
//        return {
//            statusCode: 500,
//            body: JSON.stringify({ error: message })
//        }
//    }
//}
