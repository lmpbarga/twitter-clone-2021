import React from 'react';
import { LoginContainer } from './login-styles';

const Login = () => (
  <LoginContainer>
    <div style={{display: 'flex', flex: 1, backgroundColor: 'red'}} />
    <div style={{display: 'flex', flex: 1, backgroundColor: 'blue'}} />
  </LoginContainer>
);

export default Login