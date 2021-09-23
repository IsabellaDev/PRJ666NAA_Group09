//Here to change the nav-bar
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
           Ticketing System 
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home Dashboard
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/NewTicket" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/NewTicket">
                  New Ticket
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/AllTicket" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/AllTicket">
                  List All Ticket
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/AllTicket" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/AllTicket">
                 Tickets for You
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/CloseTicket" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/closeTicket">
                  Close a Ticket
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/TransferTicket" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/ticketTransferring">
                  Transfer a Ticket
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);