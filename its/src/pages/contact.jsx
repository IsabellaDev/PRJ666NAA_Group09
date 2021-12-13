import { Accordion } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
import React, { useEffect, useState, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Contact(props) {

    const [contact, setContact] = useState([]);
    
    const getContactData = ()=> {
        return new Promise(function (resolve, reject) {
            fetch(`https://damp-river-45159.herokuapp.com/contacts`)
                .then(res => res.json())
                .then(result => {
                    if (result) {
                      console.log(result);  
                      resolve(result);
    
                    }
                })
        });
    }

        useEffect(() => {
            getContactData().then(result => {
                if (result) {
                  console.log(result);
                    setContact(result);
                }
            });
          }, []);

    return (
        <div id="ContactForms">
            <h1>Contact Information Maintain</h1>

            <p> </p>
            <Accordion defaultActiveKey="0">
                {contact.map((c) =>

                    <Accordion.Item eventKey={c._id} >
                        <Accordion.Header>{c.Name}</Accordion.Header>
                        <Accordion.Body><p>Email: {c.Email}</p><p>Phone: {c.Phone}</p><p>Address: {c.Address}</p> <p></p>

                        </Accordion.Body>
                    </Accordion.Item>

                )
                }

            </Accordion>


        </div>
    )

}

export default Contact;