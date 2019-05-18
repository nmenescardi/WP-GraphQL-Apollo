import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';

export class SinglePostCard extends Component {
  render() {
    const { id, title, excerpt, featuredImage, date, comments } = this.props;

    const formattedDate = moment(date).format('MMMM DD, YYYY');

    // Only approved comments
    const numberOfComments = comments.nodes.reduce((total, comment) => {
      if (comment.approved) {
        return total + 1;
      }
      return total;
    }, 0);

    const sourceUrl = featuredImage ? featuredImage.sourceUrl : '';

    const excerptClean = excerpt
      .replace('<p>', '')
      .replace('</p>', '')
      .replace('[&hellip;]', '')
      .slice(0, 90)
      .concat('...');

    return (
      <div className="SinglePostCard">
        <div className="SinglePostCard__thumb">
          <img className="img-fluid" src={sourceUrl} alt="" />
        </div>
        <div className="SinglePostCard__details">
          <h4>
            <Link to={`/post/:${id}`}>{title}</Link>
          </h4>
          <p>{excerptClean}</p>
          <div className="SinglePostCard__meta">
            <a href="/#" className="SinglePostCard__meta--item">
              <FaRegCalendarAlt size="1.2em" />
              {formattedDate}
            </a>
            <a href="/#" className="SinglePostCard__meta--item">
              <FaRegComment size="1.2em" />
              {numberOfComments}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePostCard;
