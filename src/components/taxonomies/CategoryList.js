import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
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

const CategoryList = () => (
  <Query query={GET_CATEGORIES}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return 'Error. Please try refreshing the page';
      if (!data.categories.nodes) return '';

      return (
        <div className="CategoryList single-widget">
          <h4 className="single-widget__title">Post Categories</h4>
          <ul>
            {data.categories.nodes.map(cat => {
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
            })}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default CategoryList;
