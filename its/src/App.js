import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,Footer}from "./components";
import Home from "./pages/Home";
import NewTicket from "./pages/createNewTicket";
import CloseTicket from "./pages/closeTicket";
import TransferTicket from "./pages/ticketTransferring";
import  MoreInfo  from "./pages/requestMoreInfo";
import  EditTicket  from "./pages/modExistTicket";
import "./index";

import AllTicketList from "./pages/ticketList";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/ticket" exact component={() => <Home />} />
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