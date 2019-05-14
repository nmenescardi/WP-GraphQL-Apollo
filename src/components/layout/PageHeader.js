import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PageHeader = () => {
  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg" />
      <div className="container box_1170">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="about-content col-lg-12">
            <h1 className="text-white">Blog Post Details</h1>
            <p className="text-white link-nav">
              <a href="index.html">Home </a>
              <FaArrowRight />
              <a href="#!"> Blog</a>
              <FaArrowRight />
              <a href="blog-details.html"> Blog Details</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
