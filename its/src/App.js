import './App.css';

import Navbar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Install from './pages/Install'
import ReportIssue from './pages/ReportIssue';
import Articles from './pages/Articles';
import RequestService from './pages/requestService';
import Contact from './pages/contact';
<<<<<<< HEAD
import ManagementConsole from './pages/ManagementConsole';
import Faq from './pages/faq';
=======
import Faq from './pages/faq';
import ManagementConsole from './pages/ManagementConsole';
import LogIn from './pages/LogIn';
import DeviceInventory from './pages/DeviceInventory';
import ArticleList from './pages/ArticleList';
import TicketManagement from './pages/TicketManagement';
import NewTicket from './pages/createNewTicket';
import AllTicketList from './pages/ticketList';
import CloseTicket from './pages/closeTicket';
import TransferTicket from './pages/ticketTransferring';
import MoreInfo from './pages/requestMoreInfo';

>>>>>>> 7dbf6b5aa767a47b2d5cb2b52ded6c7098023fe6

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
<<<<<<< HEAD
        <Route exact path="/managementconsole">
        <ManagementConsole />
      </Route>
=======
        <Route path="/NewTicket" exact component={() => <NewTicket />} />
        <Route path="/AllTicket" exact component={() => <AllTicketList />} />
        <Route path="/Ticketforyou" exact component={() => <AllTicketList />} />
        <Route path="/CloseTicket" exact component={() => <CloseTicket />} />
        <Route path="/TransferTicket" exact component={() => <TransferTicket />} />
        <Route path="/MoreInfoRequest" exact component={() => <MoreInfo />} />

        <Route exact path="/managementconsole"><ManagementConsole /></Route>
          <Route exact path="/deviceInventory"><DeviceInventory /></Route>
          <Route exact path="/articleList"><ArticleList /></Route>
          <Route exact path="/ticketManagement"><TicketManagement /></Route>
>>>>>>> 7dbf6b5aa767a47b2d5cb2b52ded6c7098023fe6
      </Switch>
    </Router>
    </>

  );
}

export default App;
