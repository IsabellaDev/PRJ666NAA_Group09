<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';

=======
>>>>>>> d27e482e7beb6d52516f980a1212bcfdb9966eea
import './App.css';
import Navbar from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Install from './pages/Install'
import ReportIssue from './pages/ReportIssue';
import Articles from './pages/Articles';
import RequestService from './pages/requestService';
import Contact from './pages/contact';

import Home from './Component/Home';
import ManagementConsole from './pages/ManagementConsole';

function App() {
  return (
  
  
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/install' component={Install}/>
        <Route path='/reportIssue' component={ReportIssue}/>
        <Route path='/articles' component={Articles}/>
        <Route path='/requestService' component={RequestService}/>
        <Route path='/contact' component={Contact}/>
        <Route exact path="/managementconsole">
        <ManagementConsole />
      </Route>
      </Switch>
    </Router>
    </>

  );
}

export default App;
