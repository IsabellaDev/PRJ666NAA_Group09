import React, { Component } from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function LoginForm() {
  return (
    <Form className="login-form">
      <h1 className="text-center">Log In</h1>
      <FormGroup>
        <Label className="username-label">Username</Label>
        <Input type="text" placeholder="Username"/>
      </FormGroup>

      <FormGroup>
        <Label className="password-label">Password</Label>
        <Input type="password" placeholder="Password"/>
      </FormGroup>

      <div className="login-btn">
        <Button type="submit" className="btn btn-success col-12">Log In</Button>
      </div>
      <div className="text-center links">
        <a className="links" href="#">Sign Up</a>
        <span className="p-2">|</span>
        <a className="links" href="#">Forgot Password</a>
      </div>
    </Form>
  );
}

export default LoginForm;
