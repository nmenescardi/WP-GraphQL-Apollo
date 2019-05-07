import React, { Component } from 'react';

export class SinglePostCard extends Component {
  render() {
    console.log('this.props', this.props);
    const { id, title, excerpt, featuredImage } = this.props;

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
              March 14, 2018
            </a>
            <a href="#" className="m-gap">
              <span className="lnr lnr-bubble" />
              05
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePostCard;
