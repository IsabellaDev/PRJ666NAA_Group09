import React, {useState} from "react";
import data from "../SampleData/SampleData.json"
import "../components/ticketList.css"
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';
const AllTicket = () => {
  const [customers, setCustomers] = useState(data);

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light header">All Tickets</h1>

            <form className="filterButtons">
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
            </form>

            <table className="table table-striped ticketTable">
              <thead>
                <tr>
                  <th class="col-md-3">#</th>
                  <th class="col-md-3">Ticket Number</th>
                  <th class="col-md-3">Requested By</th>
                  <th class="col-md-3">Short Description</th>
                  <th class="col-md-3">Assigned To</th>
                  <th class="col-md-3">Priority</th>
                  <th class="col-md-3">State</th>
                  <th class="col-md-3"></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer)=> (
                  <tr>
                    <th class="col-md-2">{customer.id}</th>
                    <td class="col-md-2">{customer.ticketNumber}</td>
                    <td class="col-md-2">{customer.requestedBy}</td>
                    <td class="col-md-2">{customer.shortDescription}</td>
                    <td class="col-md-2">{customer.assignedTo}</td>
                    <td class="col-md-2">{customer.priority}</td>
                    <td class="col-md-2">{customer.state}</td>
                    <td class="col-md-2"><button type="submit" class="btn btn-danger">Delete</button></td>
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