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
        <Button className="btn-success col-12">Log In</Button>
      </div>
    </Form>
  );
}

export default LoginForm;
