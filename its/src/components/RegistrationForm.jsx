import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';
import './RegistrationForm.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function RegistrationForm() {
  const url = "https://damp-river-45159.herokuapp.com/users"
  let history = useHistory();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    isFaculty: false,
    isAdmin: false,
    id: ""
  })

  var onSiteChanged = (e) => {
    this.setState({
      userType: e.currentTarget.value
      });
  }

  var strToBool = (val) => {
    if(val.checked && typeof val === "string"){
      if(val.toLowerCase() === "true"){
        return true;
      }
      if(val.toLowerCase() === "false"){
        return false;
      }
    }
    return val;
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      userName: data.userName,
      password: data.password,
      isFaculty: strToBool(data.isFaculty),
      isAdmin: strToBool(data.isAdmin),
      id: parseInt(data.id)
    })
    .then(res=>{
      alert("Congratulations! You have successfully registered!");
      console.log(res.data);
      history.push("/login")
    })
  }

  function handle(e){
    const newData = {...data}
    if(newData.isAdmin.checked){
      newData.isAdmin = true;
    }
    else{
      newData.isAdmin = false;
    }
    if(newData.isFaculty.checked){
      newData.isFaculty = true;
    }
    else{
      newData.isFaculty = false;
    }
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
        <Input onChange={(e)=>handle(e)} id="userName" value={data.userName} type="text" required placeholder="Username"/>
      </FormGroup>

      <FormGroup>
        <Label className="password-label">Password</Label>
        <Input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" required placeholder="Password"/>
      </FormGroup>

      <FormGroup>
        <Label className="user-type-label">Select which one you are:</Label> <br />
          <fieldset>
            <Label for="userTypeStudent" id="admin-label">Admin</Label> 
            <Input onChange={(e)=>handle(e)} id="isAdmin" value={data.isAdmin == null ? false : true} type="radio" name="userType" />   

            <Label for="userTypeFaculty " id="faculty-label">Faculty</Label>
            <Input onChange={(e)=>handle(e)} id="isFaculty" value={data.isFaculty == null ? false : true} type="radio" name="userType" /> 
          </fieldset>          
      </FormGroup>

      <FormGroup>
        <Label className="identification-number">Identification Number</Label>
        <Input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" required placeholder="Example: 585917494"/>
      </FormGroup>

      <div className="register-btn">
        <Button type="submit" className="btn btn-success col-12">Register</Button>
      </div>
    </Form>

  );
}

export default RegistrationForm;
