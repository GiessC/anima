import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import {
    AccountRecovery,
    Mfa,
    UserPool,
    VerificationEmailStyle,
    type UserPoolProps,
    UserPoolClientIdentityProvider,
} from 'aws-cdk-lib/aws-cognito';
import type { Construct } from 'constructs';

// TODO: Add an email to the user pool using SES
export default class CognitoResource {
    public static createUserPool(
        scope: Construct,
        id: string,
        name: string,
        removalPolicy: RemovalPolicy = RemovalPolicy.RETAIN,
        props?: UserPoolProps,
    ): UserPool {
        const userPool = new UserPool(scope, id, {
            ...props,
            userPoolName: name,
            accountRecovery: AccountRecovery.PHONE_AND_EMAIL,
            deletionProtection: removalPolicy === RemovalPolicy.RETAIN,
            deviceTracking: {
                challengeRequiredOnNewDevice: true,
                deviceOnlyRememberedOnUserPrompt: true,
            },
            mfa: Mfa.OPTIONAL,
            mfaMessage: 'Your Anima authentication code is {####}.s',
            mfaSecondFactor: {
                sms: true,
                otp: true,
            },
            passwordPolicy: {
                minLength: 8,
                requireDigits: true,
                requireLowercase: true,
                requireSymbols: true,
                requireUppercase: true,
            },
            selfSignUpEnabled: true,
            signInAliases: { username: true, email: true, phone: true },
            signInCaseSensitive: true,
            standardAttributes: {
                birthdate: {
                    mutable: false,
                    required: true,
                },
                email: {
                    mutable: true,
                    required: false,
                },
                fullname: {
                    mutable: true,
                    required: true,
                },
                gender: {
                    mutable: true,
                    required: true,
                },
                phoneNumber: {
                    mutable: true,
                    required: false,
                },
            },
            userVerification: {
                emailBody:
                    "Welcome to Anima! We're glad you chose us! Here is your code: {####}.",
                emailSubject: 'Welcome to Anima! Verification Code',
                emailStyle: VerificationEmailStyle.CODE,
                smsMessage:
                    "Welcome to Anima! We're glad you chose us! Here is your verification code: {####}",
            },
            removalPolicy: removalPolicy,
        });
        userPool.addClient(`${id}-client`, {
            userPoolClientName: name,
            accessTokenValidity: Duration.days(1),
            authFlows: {
                adminUserPassword: false,
                custom: false,
                userPassword: false,
                userSrp: true,
            },
            authSessionValidity: Duration.minutes(10),
            disableOAuth: false,
            enableTokenRevocation: true,
            idTokenValidity: Duration.days(1),
            preventUserExistenceErrors: true,
            refreshTokenValidity: Duration.days(7),
            supportedIdentityProviders: [
                UserPoolClientIdentityProvider.COGNITO,
                UserPoolClientIdentityProvider.APPLE,
                UserPoolClientIdentityProvider.GOOGLE,
            ],
        });
        // TODO: Add a user pool domain?
        return userPool;
    }
}
