var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  let date = new Date()
  const cognitoIdentity = new aws.CognitoIdentityServiceProvider({ region: process.env.REGION })
  const TableName = process.env.USERTABLE
  const UserPoolId = process.env.USERPOOLID

  const userStatus = event.request.userAttributes['cognito:user_status']

  let status = userStatus === 'CONFIRMED' || userStatus === 'EXTERNAL_PROVIDER' ? 'active' : 'inactive'

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },

        username: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        email_verified: {
          S: userStatus === 'EXTERNAL_PROVIDER' ? 'true' : event.request.userAttributes.email_verified,
        },
        status: { S: status },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName,
    }

    const updateParams = {
      UserPoolId,
      Username: event.userName,
      UserAttributes: [
        {
          Name: 'email_verified',
          Value: 'true',
        },
      ],
    }

    try {
      userStatus === 'EXTERNAL_PROVIDER' && (await cognitoIdentity.adminUpdateUserAttributes(updateParams).promise())

      await ddb.putItem(params).promise()

      console.log('Success')
    } catch (err) {
      console.log('Error', err)
    }

    console.log('Success: Everything executed correctly')
    context.done(null, event)
  } else {
    console.log('Error: Nothing was written to DynamoDB')
    context.done(null, event)
  }
}
