import React, { Component } from 'react';
import PostGrid from '../posts/PostGrid';
import CategoryList from '../taxonomies/CategoryList';
import TagsCloud from '../taxonomies/TagsCloud';
import UserBox from '../users/UserBox';

export class Homepage extends Component {
  render() {
    return (
      <main className="main-body section-gap">
        <div className="container">
          <div className="row">
            <section className="col-lg-8 post-list-container">
              <PostGrid />
            </section>
            <aside className="col-lg-4 sidebar">
              <UserBox />
              <CategoryList />
              <TagsCloud />
            </aside>
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;
