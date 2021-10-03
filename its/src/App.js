import './App.css';

import Navbar from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Install from './pages/Install'
import ReportIssue from './pages/ReportIssue';
import Articles from './pages/Articles';
import RequestService from './pages/requestService';
import Contact from './pages/contact';
import Faq from './pages/faq';
import ManagementConsole from './pages/ManagementConsole';
import LogIn from './pages/LogIn';
import NewTicket from './pages/createNewTicket';
import AllTicketList from './pages/ticketList';
import CloseTicket from './pages/closeTicket';
import TransferTicket from './pages/ticketTransferring';
import MoreInfo from './pages/requestMoreInfo';


function App() {
  return (
  
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={LogIn} />
        <Route path='/install' component={Install}/>
        <Route path='/reportIssue' component={ReportIssue}/>
        <Route path='/articles' component={Articles}/>
        <Route path='/requestService' component={RequestService}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/faq' component={Faq}/>
        <Route path="/NewTicket" exact component={() => <NewTicket />} />
        <Route path="/AllTicket" exact component={() => <AllTicketList />} />
        <Route path="/Ticketforyou" exact component={() => <AllTicketList />} />
        <Route path="/CloseTicket" exact component={() => <CloseTicket />} />
        <Route path="/TransferTicket" exact component={() => <TransferTicket />} />
        <Route path="/MoreInfoRequest" exact component={() => <MoreInfo />} />

        <Route exact path="/managementconsole">
        <ManagementConsole />
      </Route>
      </Switch>
    </Router>
    </>

  );
}

export default App;
