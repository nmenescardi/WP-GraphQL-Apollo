import React from 'react';
import './App.scss';
import Homepage from './components/pages/Homepage';
import Single from './components/pages/Single';
import BlogArchive from './components/pages/BlogArchive';
import Header from './components/layout/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/post/:id" component={Single} />
      <Route exact path="/blog/" component={BlogArchive} />
    </Switch>
  </Router>
);
