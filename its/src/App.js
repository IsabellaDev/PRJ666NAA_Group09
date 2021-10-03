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
        <Route exact path="/managementconsole">
        <ManagementConsole />
      </Route>
      </Switch>
    </Router>
    </>

  );
}

export default App;
