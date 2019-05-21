import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/pages/Homepage';
import Single from './components/pages/Single';
import NotFound from './components/pages/NotFound';
import BlogArchive from './components/pages/BlogArchive';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/post/:id" component={Single} />
      <Route exact path="/blog/" component={BlogArchive} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);
