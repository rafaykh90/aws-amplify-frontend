const awsmobile = {
    "aws_project_region": "eu-central-1",
    "aws_cognito_identity_pool_id": "",
    "aws_cognito_region": "eu-central-1",
    "aws_user_pools_id": "eu-central-1_N5hDec19j",
    "aws_user_pools_web_client_id": "30huadc7d50ljoeqffsralcaeg",
    "oauth": {
        "domain": "kaamyabi-auth-dev.auth.eu-central-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://localhost:3000/",
        "redirectSignOut": "https://localhost:3000/",
        "responseType": "token"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};


export default awsmobile;
