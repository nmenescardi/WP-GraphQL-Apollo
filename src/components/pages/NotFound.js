import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <h1 className="NotFound__title">404</h1>
        <div className="NotFound__subtitle">Oops! Nothing was found</div>
        <div className="NotFound__lead">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.{' '}
          <Link to="/" className="NotFound__link">
            Return to homepage
          </Link>
          .
        </div>
      </div>
    );
  }
}
