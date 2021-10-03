import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function IssueForm(){
    return (
        <Form>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridID">
            <Form.Label>ID</Form.Label>
            <Form.Control placeholder="Enter student ID" />
          </Form.Group>
   
        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Enter last name" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control placeholder="+1 (416)-254-1234" />
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridContact">
            <Form.Label>Contact Type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Phone</option>
              <option>Email</option>
            </Form.Select>
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Student</option>
              <option>Teacher</option>
              <option>Guest</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAvailability">
            <Form.Label>Availability</Form.Label>
            <Form.Select defaultValue="Choose...">
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
          <Form.Control placeholder="Enter subject line" />
        </Form.Group>
      
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default IssueForm
