import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export class BreakingNewsPostsSingle extends Component {
  render() {
    const { id, title, featuredImage, date } = this.props;

    const formattedDate = moment(date)
      .format('MMMM DD, YYYY')
      .toUpperCase();

    const sourceUrl = featuredImage ? featuredImage.sourceUrl : '';

    return (
      <div className="BreakingNewsPostsSingle">
        <div className="BreakingNewsPostsSingle__thumb">
          <img className="img-fluid" src={sourceUrl} alt="" />
        </div>
        <div className="BreakingNewsPostsSingle__details">
          <h6>
            <Link to={`/post/:${id}`}>{title}</Link>
          </h6>
          <div className="BreakingNewsPostsSingle__date">{formattedDate}</div>
        </div>
      </div>
    );
  }
}

export default BreakingNewsPostsSingle;
