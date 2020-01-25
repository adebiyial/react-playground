import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/about'>
          <h1>About</h1>
        </Route>
        <Route path='/dashboard'>
          <DashboardPage />
        </Route>
        <Route path='/home'>
          <h1>Dashboard</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
