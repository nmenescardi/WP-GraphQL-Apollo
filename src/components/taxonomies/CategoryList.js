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
        <li className="CategoryList__item" key={cat.slug}>
          <a
            href="/#"
            className="justify-content-between align-items-center d-flex"
          >
            <p>
              <img src={bullet} alt="bullet-icon" />
              <span>{cat.name}</span>
              <span> ({cat.posts.nodes.length})</span>
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
      <div className="CategoryList single-widget">
        <h4 className="single-widget__title">Post Categories</h4>
        <ul>{categoryBox}</ul>
      </div>
    );
  }
}

export default graphql(GET_CATEGORIES)(CategoryList);
