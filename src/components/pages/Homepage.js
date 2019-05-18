import React, { Component } from 'react';
import PostGrid from '../posts/PostGrid';
import MainSidebar from '../layout/MainSidebar';

export class Homepage extends Component {
  render() {
    return (
      <main className="Homepage section-gap">
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
