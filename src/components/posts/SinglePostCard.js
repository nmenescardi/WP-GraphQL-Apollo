import React, { Component } from 'react';
import moment from 'moment';

export class SinglePostCard extends Component {
  render() {
    //console.log('this.props', this.props);
    const { title, excerpt, featuredImage, date, comments } = this.props;

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
      <div className="single-post-item">
        <div className="post-thumb">
          <img className="img-fluid" src={sourceUrl} alt="" />
        </div>
        <div className="post-details">
          <h4>
            <a href="#">{title}</a>
          </h4>
          <p>{excerptClean}</p>
          <div className="blog-meta">
            <a href="#" className="m-gap">
              <span className="lnr lnr-calendar-full" />
              {formattedDate}
            </a>
            <a href="#" className="m-gap">
              <span className="lnr lnr-bubble" />
              {numberOfComments}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePostCard;
