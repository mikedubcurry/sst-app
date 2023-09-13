import { Context, APIGatewayEvent } from 'aws-lambda';

export default function handler(
    lambda: (evt: APIGatewayEvent, context: Context) => Promise<string>
) {
    return async function(event: APIGatewayEvent, context: Context) {
        let body, statusCode;

        try {
            // run the lambda
            body = await lambda(event, context);
            statusCode = 200;
        } catch (error) {
            statusCode = 500;
            body = JSON.stringify({
                error: error instanceof Error ? error.message : String(error)
            })
        }

        return {
            body,
            statusCode
        }
    }
}