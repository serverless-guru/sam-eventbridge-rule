## How to test the application


- Use AWS Profile or SSO to authenticate

```bash
sam build 
sam deploy
cd events
aws events put-events --entries file://event.json
```

- Login to AWS Console where stack is deployed
- Open Event Bridge and go to the Rules
- You should see the rule created by the stack
- Click on the rule and you should see the target created by the stack
- Click on the target and you should see the Lambda function created by the stack
- Click on the Lambda function to open the Function dashboard
- Click on Monitoring tab and you should see the invocation count
- Click on the "View logs in CloudWatch" to see the logs

- Open DynamoDB and you should see the table created by the stack
- Click on the table and then click on the Items tab to see the items
- You can add multiple events to the `event.json` file and run the `aws events put-events --entries file://event.json` command to send the events 

## Cleanup

- To delete the stack run the following command with same profile used to deploy the stack
```bash
sam delete
```

## Cleanup


