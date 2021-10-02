import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './Component/Home';
import ManagementConsole from './Component/ManagementConsole';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/managementconsole">
        <ManagementConsole />
      </Route>


    </Switch>
  
  
  
  );
}

export default App;
