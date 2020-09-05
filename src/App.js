import React from 'react';
import Dashboard from './views/Dashboard'
import Startup from './views/Startup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/startup' strict exact>
          <Startup />
        </Route>
        <Route path='/' strict >
          <Dashboard />
        </Route>

      </Switch>
    </Router>
       
   
    
  );
}

export default App;

