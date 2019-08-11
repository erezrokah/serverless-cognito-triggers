# serverless-cognito-triggers

## Setup

```bash
yarn
```

## Deploy

```bash
sls deploy
```

## Trigger PreSignUp

```bash
aws cognito-idp admin-create-user --region <region> --user-pool-id <user-pool-id> --username <phone>
```

## Cleanup

```bash
sls remove
```
