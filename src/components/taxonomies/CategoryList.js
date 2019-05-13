import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import bullet from '../../img/bullet.png';

const GET_CATEGORIES = gql`
  query {
    categories {
      nodes {
        name
        slug
        posts {
          nodes {
            id
          }
        }
      }
    }
  }
`;

class CategoryList extends Component {
  renderCategoryList(categories) {
    return categories.map(cat => {
      return (
        <li className="category-list-item" key={cat.slug}>
          <a
            href="/#"
            className="justify-content-between align-items-center d-flex"
          >
            <p>
              <img src={bullet} alt="bullet-icon" />
              <span className="category-name">{cat.name}</span>
              <span className="category-count">
                {' '}
                ({cat.posts.nodes.length})
              </span>
            </p>
          </a>
        </li>
      );
    });
  }

  render() {
    const { loading, categories } = this.props.data;
    const categoryBox = loading
      ? 'loading...'
      : this.renderCategoryList(categories.nodes);

    return (
      <div className="single-widget category-widget">
        <h4 className="title">Post Categories</h4>
        <ul>{categoryBox}</ul>
      </div>
    );
  }
}

export default graphql(GET_CATEGORIES)(CategoryList);
