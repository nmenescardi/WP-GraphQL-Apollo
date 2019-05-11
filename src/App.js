import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Single from './components/pages/Single';
import NavMenu from './components/layout/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => (
  <Router>
    <NavMenu />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/post/:id" component={Single} />
    </Switch>
  </Router>
);
