import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/ticketList.css"
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';
import axios from "axios";

require("es6-promise").polyfill()
require("isomorphic-fetch")


const AllTicket = () => {
  let history = useHistory();
  const [tickets, setTickets] = useState([]);

useEffect(() => {
  fetch("/ticket")
  .then(response => response.json())
  .then(json => setTickets(json));
}, [])

const deleteTicket = (id) => {
  const delTicket = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  
  return new Promise(function (resolve, reject) {
    fetch(`/ticket/${id}`, delTicket)
        .then(res => res.json())
        .then(result => {
            if (result) {
              console.log(result);  
              resolve(result);

            }
        })
  });
}

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light header">All Tickets</h1>

            {/* <form className="filterButtons">
              <label>Filter</label>
              <button type="submit" class="btn btn-success filterButton">AND</button>
              <button type="submit" class="btn btn-success filterButton">OR</button>
              <button type="submit" class="btn btn-success filterButton">RUN</button>
              <button type="submit" class="btn btn-success filterButton">SAVE</button>
            </form>

            <form className="filterLists">
              <select className="filterList">
                <option>State</option>
                <option>Requested By</option>
                <option>Short Description</option>
                <option>Assigned to</option>
                <option>Priority</option>
                <option>Ticket Number</option>
              </select>
              <select className="filterList">
                <option>is</option>
                <option>is not</option>
              </select>
              <select className="filterList">
                <option>Closed</option>
                <option>Opened</option>
                <option>New</option>
                <option>Work Started</option>
                <option>Pending Customer</option>
                <option>Awaiting Vender</option>
                <option>Escalated</option>
              </select>
            </form> */}

            <table className="table table-striped ticketTable">
              <thead>
                <tr>
                  <th class="col-md-4">Requester's ID</th>
                  <th class="col-md-4">Requested By</th>
                  {/* <th class="col-md-4">Requester's Email</th> */}
                  <th class="col-md-4">Ticket Subject</th>
                  <th class="col-md-4">Short Description</th>
                  {/* <th class="col-md-4">Assigned To</th> */}
                  <th class="col-md-4">Date Created On</th>
                  <th class="col-md-4"></th>
                  <th class="col-md-4"></th>  
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket)=> (
                  <tr>
                    <th class="col-md-3">{ticket.studentID}</th>
                    <td class="col-md-3">{ticket.firstName} {ticket.lastName}</td>
                    {/* <td class="col-md-3">{ticket.email}</td> */}
                    <td class="col-md-2">{ticket.subject}</td> 
                    <td class="col-md-3">{ticket.description}</td>
                    {/* <td class="col-md-3"><img src={ticket.file} /></td> */}
                    <td class="col-md-3">{ticket.createOn}</td>
                    <td class="col-md-3"><button  class="btn btn-danger" type="button" key={ticket._id} onClick={()=> {if(window.confirm("Are you sure? If you already got a solution for this ticket, please consider to close it first! ")){deleteTicket(ticket._id); window.location.reload(false);} }}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AllTicket);