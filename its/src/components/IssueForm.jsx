import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useRef } from 'react';
import Axios from 'axios';

function IssueForm(){
  //const databaseURL = "https://damp-river-45159.herokuapp.com/reportIssue"
  const databaseURL = "http://localhost:5000/reportIssue"
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
    problemDescription: "",
    file: ""
  });

  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(true)

  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('id', parseInt(formData.id));
    data.append('phone', formData.phone);
    data.append('userType', formData.userType);
    data.append('preferredContact', formData.preferredContact);
    data.append('availability', formData.availability);
    data.append('subject', formData.subject);
    data.append('problemDescription', formData.problemDescription);
    data.append('file', formData.file);


    Axios.post(databaseURL, data)
    .then(result => {
        console.log(result.data.message)
        // error message came back from POST
        if (result.data.message !== undefined){
          // set message and isError values
           setMessage(result.data.message.msgBody)
           setIsError(result.data.message.msgError)
        }
        // no error message from POST, log a success message
        else{
          setIsError(false)
          setMessage(null)
          console.log('File Upload successful....')
        }
        console.log('The Form was Submitted: ' + JSON.stringify(data));
    })

     // pop-up confimation alert
     alert("Submitting ticket...")

    console.log("Message:" +message)
    console.log("isError:" +isError)
  }

  if (!isError){
    setIsError(true);
    // Clear form on submit
    setFormData(formData => {
      return {
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        phone: "",
        userType: "Student",
        preferredContact: "Phone",
        availability: "Monday",
        subject: "",
        problemDescription: "",
        file: ""
      };
    });
    fileInput.current.value = ""
  } 

  const handleUploadChange = (e) => {
    let target = e.target;
    let value = target.files[0];
    let name = target.name;

    setFormData(formData => {
      return {...formData, [name]: value};
    });
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
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Enter first name" required name="firstName" value={formData.firstName} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridID">
          <Form.Label>ID</Form.Label>
          <Form.Control placeholder="Enter student ID" required name="id" type="number" value={formData.id} onChange={handleChange} />
        </Form.Group>
  
      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter last name" required name="lastName" value={formData.lastName} onChange={handleChange} />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="+1 (416)-254-1234" required name="phone" value={formData.phone} onChange={handleChange} />
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridContact">
          <Form.Label>Contact Type</Form.Label>
          <Form.Select name="preferredContact" required value={formData.preferredContact} defaultValue="Phone" onChange={handleChange}>
            <option>Phone</option>
            <option>Email</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridUserType">
          <Form.Label>User Type</Form.Label>
          <Form.Select name="userType" required value={formData.userType} defaultValue="Student" onChange={handleChange}>
            <option>Student</option>
            <option>Teacher</option>
            <option>Guest</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAvailability">
          <Form.Label>Availability</Form.Label>
          <Form.Select name="availability" required value={formData.availability} defaultValue="Monday" onChange={handleChange}>
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
        <Form.Control placeholder="Enter subject line" name="subject" required value={formData.subject} onChange={handleChange}/>
      </Form.Group>
    
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Control name="file" filename="file" ref={fileInput} onChange={handleUploadChange} type="file" size="sm" />
      </Form.Group>

      {message && <div style={{color: 'red'}}> {message} </div>}

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={6} name="problemDescription" required value={formData.problemDescription} onChange={handleChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
  
  export default IssueForm