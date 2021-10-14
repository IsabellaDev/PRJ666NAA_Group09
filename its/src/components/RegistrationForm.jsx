import React, { useState } from 'react';
import Axios from 'axios';
import './RegistrationForm.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function RegistrationForm() {
  const url = "https://damp-river-45159.herokuapp.com/users"
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    userType: "",
    idNumber: ""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password,
      userType: data.userType,
      idNumber: parseInt(data.idNumber)
    })
    .then(res=>{
      console.log(res.data);
    })
  }

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData);
    console.log(newData)
  }

  return (
    <Form onSubmit={(e)=> submit(e)} className="registration-form">
      <h1 className="text-center">Registration</h1>
      <FormGroup>
        <Label className="firstname-label">First Name</Label>
        <Input onChange={(e)=>handle(e)} id="firstName" value={data.firstName} type="text" required placeholder="First Name"/>
      </FormGroup>

      <FormGroup>
        <Label className="lastname-label">Last Name</Label>
        <Input onChange={(e)=>handle(e)} id="lastName" value={data.lastName} type="text" required placeholder="Last Name"/>
      </FormGroup>

      <FormGroup>
        <Label className="email-label">Email</Label>
        <Input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" required placeholder="Example: john@gmail.com"/>
      </FormGroup>

      <FormGroup>
        <Label className="username-label">Username</Label>
        <Input onChange={(e)=>handle(e)} id="username" value={data.username} type="text" required placeholder="Username"/>
      </FormGroup>

      <FormGroup>
        <Label className="password-label">Password</Label>
        <Input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" required placeholder="Password"/>
      </FormGroup>

      <FormGroup>
        <Label className="user-type-label">Select which one you are:</Label> <br />
          <fieldset>
            <Label for="userTypeStudent" id="student-label">Student</Label> 
            <Input onChange={(e)=>handle(e)} id="userType" value={data.userType} type="radio" name="userType" value="student" />   

            <Label for="userTypeFaculty " id="faculty-label">Faculty</Label>
            <Input onChange={(e)=>handle(e)} id="userType" value={data.userType} type="radio" name="userType" value="faculty" /> 
          </fieldset>          
      </FormGroup>

      <FormGroup>
        <Label className="identification-number">Identification Number</Label>
        <Input onChange={(e)=>handle(e)} id="idNumber" value={data.idNumber} type="text" required placeholder="Example: 585917494"/>
      </FormGroup>

      <div className="register-btn">
        <Button type="submit" className="btn btn-success col-12">Register</Button>
      </div>
    </Form>
  );
}

export default RegistrationForm;
