/* Amplify Params - DO NOT EDIT
	API_ITORCHARD_CONTACTUSTABLE_ARN
	API_ITORCHARD_CONTACTUSTABLE_NAME
	API_ITORCHARD_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

const ses = new AWS.SES({
  region: process.env.REGION,
});

AWS.config.update({ region: process.env.REGION });

exports.handler = async (event) => {
  const name = event.Records[0].dynamodb.NewImage.name.S;
  const organization = event.Records[0].dynamodb.NewImage.organization.S;
  const email = event.Records[0].dynamodb.NewImage.email.S;
  const description = event.Records[0].dynamodb.NewImage.description.S;
  const result = event.Records[0].dynamodb.NewImage.category.L.map((obj) => obj.S);

  const sendEmail = async (emailData) => {
    let emailParams = {
      Destination: {
        ToAddresses: [emailData.to],
      },
      Message: {
        Body: {
          Text: {
            Data: emailData.body,
          },
        },
        Subject: {
          Data: emailData.subject,
        },
      },
      Source: emailData.from,
    };
    try {
      await ses.sendEmail(emailParams).promise();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };
  // if (newData) {
  let adminEmailBody = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    body: `
    Dear Admin,

    You have received a new contact form submission with the following details:
    
    Name: ${name}
    Organization: ${organization}
    Email: ${email}
    description: ${description}
    Category: ${result}  
    
    Please review the application and take appropriate action.
    
    Thank you for your attention.
    `,
    subject: 'New Contact Form Submission',
  };

  // Engagement: ${engagement}
  // Team Strength: ${teamStrength}
  let userEmailBody = {
    from: process.env.EMAIL,
    to: email,
    body: ` Dear ${name},

    Thank you very much for your inquiry to ITORCHARD.

    We are working hard to examine the details of your inquiry and provide you with an appropriate response.
    Our staff will reply to you within 2-3 days, so we hope you will be patient.

    If you have any questions or concerns, please feel free to contact us at any time.
    Thank you for your continued support.

    Inquiry details

    Name: ${name}
    Organization: ${organization}
    Email: ${email}
    description: ${description}
    Category: ${result}  
    
    
    IDENBRID INC.
    `,
    subject: 'Thank you for contacting us.',
  };
  // Engagement: ${engagement}
  // Team Strength: ${teamStrength}

  await sendEmail(adminEmailBody);

  await sendEmail(userEmailBody);

  return {
    statusCode: 200,
    body: JSON.stringify('Successfully send the email'),
  };
};
