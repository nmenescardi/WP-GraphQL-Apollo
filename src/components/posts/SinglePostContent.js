import React from 'react';
import moment from 'moment';

const SinglePostContent = ({ post }) => {
  const formattedDate = moment(post.date).format('DD MMMM, YYYY');
  return (
    <div className="SinglePostContent">
      <img
        className="img-fluid"
        src={post.featuredImage.sourceUrl}
        alt={post.title}
      />
      <h4 className="SinglePostContent__title">{post.title}</h4>
      <div className="SinglePostContent__meta meta-box">
        <div>{taxonomyList(post.categories.edges)}</div>
        <div className="meta-box__author">
          <div className="meta-box__info">
            <h5>{`${post.author.firstName} ${post.author.lastName}`}</h5>
            <p>{formattedDate}</p>
          </div>
          <div className="meta-box__img">
            <img
              className="img-fluid"
              src={post.author.avatar.url}
              alt="author avatar"
            />
          </div>
        </div>
      </div>
      <div
        className="SinglePostContent__content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div>{taxonomyList(post.tags.edges)}</div>
    </div>
  );
};

const taxonomyList = list => {
  return (
    <div className="taxonomy-list-container">
      {list.map(item => (
        <a className="taxonomy-item" href="#!" key={item.node.slug}>
          {item.node.name}
        </a>
      ))}
    </div>
  );
};

export default SinglePostContent;
