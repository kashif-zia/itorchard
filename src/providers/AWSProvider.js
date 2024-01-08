import React from 'react';
import awsConfig from '../aws-exports';
import { Amplify } from 'aws-amplify';
const AmplifyProvider = ({ children }) => {
  awsConfig.oauth.scope = ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'];

  Amplify.configure({ ...awsConfig, ssr: true });

  return <>{children}</>;
};

export default AmplifyProvider;
