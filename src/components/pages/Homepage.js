import React, { Component } from 'react';
import PostGrid from '../posts/PostGrid';
import BreakingNewsPosts from '../posts/BreakingNewsPosts';
import FeaturedPosts from '../posts/FeaturedPosts';
import MainSidebar from '../layout/MainSidebar';

export class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <div className="container-fluid">
          <div className="row">
            <section className="col-lg-12">
              <BreakingNewsPosts />
            </section>
          </div>
        </div>
        <section className="full-width">
          <FeaturedPosts />
        </section>
        <div className="container">
          <div className="row">
            <section className="col-lg-8">
              <PostGrid />
            </section>
            <aside className="col-lg-4">
              <MainSidebar />
            </aside>
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;
