import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TicketNavigation,Footer}from "./components/ticketSystem";
import Dashboard from "./pages/ticketingSystem/Dashboard";
import NewTicket from "./pages/ticketingSystem/createNewTicket";
import CloseTicket from "./pages/ticketingSystem/closeTicket";
import TransferTicket from "./pages/ticketingSystem/ticketTransferring";
import  MoreInfo  from "./pages/ticketingSystem/requestMoreInfo";
import  EditTicket  from "./pages/ticketingSystem/modExistTicket";
import "./index";

import AllTicketList from "./pages/ticketingSystem/ticketList";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Router>
        <TicketNavigation />
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