import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TAGS = gql`
  query {
    tags {
      nodes {
        name
        slug
      }
    }
  }
`;

const TagsCloud = () => (
  <Query query={GET_TAGS}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return 'Error. Please try refreshing the page';
      if (!data.tags.nodes) return '';

      return (
        <div className="TagsCloud single-widget">
          <h4 className="single-widget__title">Post Tags</h4>
          <ul>
            {data.tags.nodes.map(tag => {
              return (
                <li key={tag.slug}>
                  <a href="/#">{tag.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default TagsCloud;
