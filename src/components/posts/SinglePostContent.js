import React from 'react';
import moment from 'moment';

const SinglePostContent = ({ loading, post }) => {
  const formattedDate = moment(post.date).format('DD MMMM, YYYY');
  //TODO BEM
  return (
    <div className="single-blog-content-container">
      <img
        className="img-fluid"
        src={post.featuredImage.sourceUrl}
        alt={post.title}
      />
      <h4 className="post-title">{post.title}</h4>
      <div className="meta-details">
        <div className="taxonomy-container">
          {taxonomyList(post.categories.edges)}
        </div>
        <div className="author-data-wrapper">
          <div className="media-body">
            <h5>{`${post.author.firstName} ${post.author.lastName}`}</h5>
            <p>{formattedDate}</p>
          </div>
          <div className="author-img-wrapper">
            <img
              className="img-fluid"
              src={post.author.avatar.url}
              alt="author avatar"
            />
          </div>
        </div>
      </div>
      <div
        className="main-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="tags">{taxonomyList(post.tags.edges)}</div>
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
