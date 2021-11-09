import './App.css';

import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

import Navbar from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Install from './pages/Install'
import ReportIssue from './pages/ReportIssue';
import Articles from './pages/Articles';
import RequestService from './pages/requestService';
import Contact from './pages/contact';
import Faq from './pages/faq';
import FaqAdd from './pages/FAQAdd';
import FaqEdit from './pages/FAQEditing';
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
import TicketDashboard from './pages/Dashboard';
import TicketNavbar from './components/TicketNavigation';
import EditTicket from './pages/modExistTicket';
import PasswordReset from './pages/PasswordReset';
import Registration from './pages/Registration';
import AllRentedDevices from './pages/RentedDevice';





function App() {

  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  console.log("user's isAdmin is: " + user.isAdmin)

  function IsTicket() {
    let isTicket = false;
    let initRoute = useLocation().pathname;
    if (useLocation().pathname === "/dashboard") {
      isTicket = true;

    }
    if (useLocation().pathname === "/") {
      isTicket = false;

    }
    if (initRoute !== useLocation().pathname) {
      window.reload();

    }
    initRoute = useLocation().pathname
    return isTicket
  }



  return (

    <div className="container">

      <Router>
        <Navbar />
        {/* {         (isAuthenticated  && user.isAdmin )? <TicketNavbar /> : <Navbar />}  */}
        {/* !IsTicket() ? <Navbar /> : <TicketNavbar /> */}
{/*         <Switch> */}
          <Route exact path='/'><Home /></Route>
          <Route pexact path='/login'><LogIn /></Route>
          <Route path='/register' component={Registration} id="S" />
          <Route path='/install' component={Install} id="S" />
          <Route path='/reportIssue' component={ReportIssue} id="S" />
          <Route path='/articles' component={Articles} id="S" />
          <Route path='/requestService' component={RequestService} id="S" />
          <Route path='/contact' component={Contact} id="S" />
          <Route path='/faq' component={Faq} id="S" />
          <Route path='/faqadd' component={FaqAdd} id="S" />
          <Route path='/faqedit/:id' component={FaqEdit} id="S" />
          <Route path="/rentedDevice" component={AllRentedDevices} />
          <Route path="/Dashboard" exact component={() => <TicketDashboard />} {...IsTicket()} />
          <Route path="/NewTicket" exact component={() => <NewTicket />} {...IsTicket()} />
          <Route path="/AllTicket" exact component={() => <AllTicketList />} {...IsTicket()} />
          <Route path="/edit" exact component={() => <EditTicket />} {...IsTicket()} />
          <Route path="/CloseTicket" exact component={() => <CloseTicket />} {...IsTicket()} />
          <Route path="/TransferTicket" exact component={() => <TransferTicket />} {...IsTicket()} />
          <Route path="/MoreInfoRequest" exact component={() => <MoreInfo />} {...IsTicket()} />
          

          <Route exact path="/managementconsole"><ManagementConsole /></Route>
          <Route exact path="/deviceInventory"><DeviceInventory /></Route>
          <Route exact path="/articleList"><ArticleList /></Route>
          <Route exact path="/ticketManagement"><TicketManagement /></Route>
          <Route exact path="/PasswordReset"><PasswordReset /></Route>

{/*        </Switch> */}
      </Router>
    </div>

  );
}

export default App;
