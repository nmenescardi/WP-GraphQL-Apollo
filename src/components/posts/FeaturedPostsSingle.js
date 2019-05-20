import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import excerptClean from '../util/excerptClean';
import { FaRegCalendarAlt } from 'react-icons/fa';

export class FeaturedPostsSingle extends Component {
  render() {
    const { id, title, featuredImage, date, excerpt, author } = this.props;

    const formattedDate = moment(date)
      .format('Do MMMM, YYYY')
      .toUpperCase();

    const sourceUrl = featuredImage ? featuredImage.sourceUrl : '';

    return (
      <div className="FeaturedPostsSingle">
        <div className="FeaturedPostsSingle__thumb">
          <img src={sourceUrl} alt="" />
        </div>
        <div className="FeaturedPostsSingle__data">
          <div className="FeaturedPostsSingle__title">
            <h2>
              <Link to={`/post/:${id}`}>{title}</Link>
            </h2>
          </div>
          <div className="FeaturedPostsSingle__details">
            <div className="FeaturedPostsSingle__author">
              <div className="FeaturedPostsSingle__author-img">
                <img src={author.avatar.url} alt="Author Avatar" />
              </div>
              <div className="FeaturedPostsSingle__meta-wrapper">
                <div className="FeaturedPostsSingle__author-name">
                  {`${author.firstName} ${author.lastName}`}
                </div>
                <div className="FeaturedPostsSingle__date">
                  <FaRegCalendarAlt size="1.2em" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
            <div className="FeaturedPostsSingle__excerpt">
              {excerptClean(excerpt)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedPostsSingle;
