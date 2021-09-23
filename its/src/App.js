import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, NewTicket, closeTicket, TransferTicket } from "./components";
import CloseTicket from "./components/closeTicket";
import AllTicketList from "./components/ticketList";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/NewTicket" exact component={() => <NewTicket />} />
          <Route path="/AllTicket" exact component={() => <AllTicketList />} />
          <Route path="/Ticketforyou" exact component={() => <AllTicketList />} />
          <Route path="/CloseTicket" exact component={() => <CloseTicket />} />
          <Route path="/ticketTransferring" exact component={() => <TransferTicket />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;