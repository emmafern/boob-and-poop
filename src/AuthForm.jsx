import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';

export default class AuthForm extends Component {
  render() {
    return (
      <div className="email-authentication-form">
        <p>Sign in to an existing account or sign up</p>

        <div className="input-field inline">
          <Input 
            className="" 
            type="text" 
            id="email" 
            name="email" 
            placeholder="Email"
          />
        </div>

        <div className="input-field inline">
          <Input 
            className="" 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Password"
          />
        </div>

        <br/><br/>

        <Button waves='light' id="sign-in" name="signin">
          Sign In
        </Button>

        &nbsp;&nbsp;

        <Button waves='light' id="sign-up" name="signup">
          Sign Up
        </Button>

        <br/><br/>

        <Button disabled waves='light' id="verify-email" name="verify-email">
          Send Email Verification
        </Button>

        <br/><br/>

        <Button waves='light' id="password-reset" name="password-reset">
          Send Password Reset Email
        </Button>
      </div>
    )
  }
}
