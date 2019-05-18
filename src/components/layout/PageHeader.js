import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PageHeader = () => {
  return (
    <section className="PageHeader">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="PageHeader__details">
            <h1 className="text-white">Blog Post Details</h1>
            <p className="text-white PageHeader__details__nav">
              <a href="/">Home </a>
              <FaArrowRight />
              <a href="/blog/">Blog</a>
              <FaArrowRight />
              <span>Single Post</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
