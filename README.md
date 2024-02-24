# anima
Anima is an open-source React Native dating app that uses AI and detailed user information to increase romantic success rate.

## Prerequisites
1. [Install NodeJS LTS](https://nodejs.org/en)

> Note: You must have developer-level access to AWS resources to use the AWS CLI or CDK.
## Install and configure AWS CLI
### Install
1. [Download](https://s3.amazonaws.com/aws-cli/AWSCLI64PY3.msi)
> Note: by default, installation is `C:\Program Files\Amazon\AWSCLI`
2. Run `aws --version` to verify that the installation was successful
3. If not, try adding `C:\Program Files\Amazon\AWSCLI` to PATH

### Configure
1. Run `aws configure sso`
2. Use `us-east-2` for regions
3. Use `animadev` for profile naming
4. Run `aws sso login --profile animadev` - these credentials give you 4 hour access

## Install and configure AWS CDK
1. `npm i -g aws-cdk`
2. `cdk --version`
