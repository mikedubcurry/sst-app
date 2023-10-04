const config = {
    STRIPE_KEY: "pk_test_51NpxqLJnAjB92g1AYQVfDb2GOKgw928LEv2uF90EugjIH35pfuHcuQ6qf5w67SzFa1RPpEKNCkeDVwPLaHAP9vsQ002aRvXK0u",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: import.meta.env.VITE_REGION,
        BUCKET: import.meta.env.VITE_BUCKET,
    },
    apiGateway: {
        REGION: import.meta.env.VITE_REGION,
        URL: import.meta.env.VITE_API_URL,
    },
    cognito: {
        REGION: import.meta.env.VITE_REGION,
        USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
        APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
        IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
    }
}

export default config
