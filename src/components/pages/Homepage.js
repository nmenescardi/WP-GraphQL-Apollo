import React, { Component } from 'react';
import PostGrid from '../posts/PostGrid';
import MainSidebar from '../layout/MainSidebar';

export class Homepage extends Component {
  render() {
    //TODO BEM
    return (
      <main className="main-body section-gap">
        <div className="container">
          <div className="row">
            <section className="col-lg-8 post-list-container">
              <PostGrid />
            </section>
            <aside className="col-lg-4 sidebar">
              <MainSidebar />
            </aside>
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;
