import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function FAQEditing(prop) {
  const [faqs, setFaqs] = useState([]);

  function getFAQData() {
    return new Promise(function (resolve, reject) {
        fetch(`http://localhost:5000/faq/:id`)
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
  getFAQData().then(result => {
      if (result) {
        console.log(result);
          setFaqs(result);
      }
  });
}, []);

if (faqs.length > 0) {
  
  
  return (
    <>
    <button>Add new FAQ article</button>
      <Accordion defaultActiveKey="0">
    {faqs.map((faq) =>
    
       <Accordion.Item eventKey={faq._id} >  
          <Accordion.Header>{faq.articleTitle}</Accordion.Header>
          <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
      
  )
  }
  
  </Accordion>

  
    </>
  );

}else{
  return (
    <>
    <p>loading please wait...</p>
    </>
);
}
   
}

export default FAQEditing;
