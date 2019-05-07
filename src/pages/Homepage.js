import React, { Component } from 'react';
import PostGrid from '../components/posts/PostGrid';
import CategoryList from '../components/taxonomies/CategoryList';
export class Homepage extends Component {
  render() {
    return (
      <div className="main-body section-gap">
        <div className="container box_1170">
          <div className="row">
            <div className="col-lg-8 post-list">
              <section className="post-area">
                <PostGrid />
              </section>
            </div>
            <div className="col-lg-4 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbs">
              <section className="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">
                <CategoryList />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
