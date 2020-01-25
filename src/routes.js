import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <h1>landing page</h1>
        </Route>
        <Route path='/login'>
          <h1>Login</h1>
        </Route>
        <Route path='/home'>
          <h1>Dashboard</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
