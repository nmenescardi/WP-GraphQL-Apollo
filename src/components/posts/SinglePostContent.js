import React, { Fragment } from 'react';

const SinglePostContent = ({ loading, post }) => {
  console.log('loading', loading);
  console.log('post', post);
  return (
    <Fragment>
      <div className="main_blog_details">
        <img
          className="img-fluid"
          src={post.featuredImage.sourceUrl}
          alt={post.title}
        />
        <h4>{post.title}</h4>
        <div className="user_details">
          <div className="float-left">
            <a href="#">Lifestyle</a>
            <a href="#">Gadget</a>
          </div>
          <div className="float-right">
            <div className="media">
              <div className="media-body">
                <h5>Mark wiens</h5>
                <p>12 Dec, 2017 11:21 am</p>
              </div>
              <div className="d-flex">
                <img src="img/blog/user-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="main-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="news_d_footer">
          <a href="#">
            <i className="lnr lnr lnr-heart" />
            Lily and 4 people like this
          </a>
          <a className="justify-content-center ml-auto" href="#">
            <i className="lnr lnr lnr-bubble" />
            06 Comments
          </a>
          <div className="news_socail ml-auto">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-pinterest" />
            </a>
            <a href="#">
              <i className="fa fa-rss" />
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-area">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
            <div className="thumb">
              <a href="#">
                <img className="img-fluid" src="img/blog/prev.jpg" alt="" />
              </a>
            </div>
            <div className="arrow">
              <a href="#">
                <span className="lnr text-white lnr-arrow-left" />
              </a>
            </div>
            <div className="detials">
              <p>Prev Post</p>
              <a href="#">
                <h4>A Discount Toner</h4>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
            <div className="detials">
              <p>Next Post</p>
              <a href="#">
                <h4>Cartridge Is Better</h4>
              </a>
            </div>
            <div className="arrow">
              <a href="#">
                <span className="lnr text-white lnr-arrow-right" />
              </a>
            </div>
            <div className="thumb">
              <a href="#">
                <img className="img-fluid" src="img/blog/next.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SinglePostContent;
