import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useState } from 'react';
import Axios from 'axios';

function IssueForm(){
  const databaseURL = "https://damp-river-45159.herokuapp.com/reportIssue"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    phone: "",
    userType: "Student",
    preferredContact: "Phone",
    availability: "Monday",
    subject: "",
    problemDescription: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(databaseURL, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      id: parseInt(formData.id),
      phone: formData.phone,
      userType: formData.userType,
      preferredContact: formData.preferredContact,
      availability: formData.availability,
      subject: formData.subject,
      problemDescription: formData.problemDescription
    })
    .then(res=>{
      console.log(res.data)
    })
    
    console.log('The Form was Submitted: ' + JSON.stringify(formData));
  }

  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    setFormData(formData => {
      return {...formData, [name]: value};
    });
  }

  if (!formData){
    return null;
  }
  return (
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridID">
          <Form.Label>ID</Form.Label>
          <Form.Control placeholder="Enter student ID" name="id" value={formData.id} onChange={handleChange} />
        </Form.Group>
  
      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="+1 (416)-254-1234" name="phone" value={formData.phone} onChange={handleChange} />
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridContact">
          <Form.Label>Contact Type</Form.Label>
          <Form.Select name="preferredContact" value={formData.preferredContact} defaultValue="Phone" onChange={handleChange}>
            <option>Phone</option>
            <option>Email</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridUserType">
          <Form.Label>User Type</Form.Label>
          <Form.Select name="userType" value={formData.userType} defaultValue="Student" onChange={handleChange}>
            <option>Student</option>
            <option>Teacher</option>
            <option>Guest</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAvailability">
          <Form.Label>Availability</Form.Label>
          <Form.Select name="availability" value={formData.availability} defaultValue="Monday" onChange={handleChange}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Enter subject line" name="subject" value={formData.subject} onChange={handleChange}/>
      </Form.Group>
    
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Control type="file" size="sm" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={6} name="problemDescription" value={formData.problemDescription} onChange={handleChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
  
  export default IssueForm
