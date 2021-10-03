import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,Footer}from "./TicketingSystem/components";
import Dashboard from "./TicketingSystem/pages/Dashboard";
import NewTicket from "./TicketingSystem/pages/createNewTicket";
import CloseTicket from "./TicketingSystem/pages/closeTicket";
import TransferTicket from "./TicketingSystem/pages/ticketTransferring";
import  MoreInfo  from "./TicketingSystem/pages/requestMoreInfo";
import  EditTicket  from "./TicketingSystem/pages/modExistTicket";
import "./index";

import AllTicketList from "./TicketingSystem/pages/ticketList";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/NewTicket" exact component={() => <NewTicket />} />
          <Route path="/AllTicket" exact component={() => <AllTicketList />} />
          <Route path="/Ticketforyou" exact component={() => <AllTicketList />} />
          <Route path="/CloseTicket" exact component={() => <CloseTicket />} />
          <Route path="/TransferTicket" exact component={() => <TransferTicket />} />
          <Route path="/MoreInfoRequest" exact component={() => <MoreInfo />} />
          <Route path="/edit" exact component={() => <EditTicket />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;