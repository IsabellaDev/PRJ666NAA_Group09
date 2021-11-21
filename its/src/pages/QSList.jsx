import { Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { withRouter,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function QSList( props) {
  const history = useHistory();
  const [QS, setQS] = useState([]);

  function getQSData() {
    return new Promise(function (resolve, reject) {
        fetch(`/articles`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                  console.log(result);  
                  resolve(result);

                }
            })
    });

    
}

function deleteQSRecord(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
   
};
  return new Promise(function (resolve, reject) {
      fetch(`/articles/${id}`, requestOptions)
          .then(res => res.json())
          .then(result => {
              if (result) {
                console.log(result);  
                resolve(result);

              }
          })
  });

  
}

function AddNewQS(){
  history.push('/faqadd');
}

useEffect(() => {
  getFAQData().then(result => {
      if (result) {
        console.log(result);
          setQS(result);
      }
  });
}, []);


if (faqs.length > 0) {
 

  return (
    <>
    <button className="btn btn-success" onClick={() => {AddNewQS();}}>Add new FAQ article</button>
    <p> </p>
      <Accordion defaultActiveKey="0">
    {QS.map((qs) =>
    
       <Accordion.Item eventKey={qs._id} >  
          <Accordion.Header>{qs.articleTitle}</Accordion.Header>
          <Accordion.Body>{qs.body} <p></p> <button className="btn btn-outline-danger" key={qs._id} onClick={() => {if(window.confirm("Are you sure you want to delete this Quick Solution Article? This CANNOT be undone!")){deleteFAQRecord(qs._id); window.location.reload(false);};  }} >Delete this article</button>  <button className="btn btn-outline-primary" key={faq._id} onClick={() => { history.push(`/faqedit/${faq._id}`) }}>Edit this article</button></Accordion.Body>
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

export default QSList;
