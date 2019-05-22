import React from 'react';
import BreakingNewsPostsSingle from './BreakingNewsPostsSingle';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_BREAKING_NEWS_POSTS = gql`
  query BREAKING_NEWS_POSTS($count: Int!, $categorySlug: String!) {
    posts(first: $count, where: { categoryName: $categorySlug }) {
      nodes {
        id
        postId
        title
        date
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`;

const BreakingNewsPosts = () => (
  <Query
    query={GET_BREAKING_NEWS_POSTS}
    variables={{ count: 4, categorySlug: 'breaking-news' }}
  >
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return 'Error. Please try refreshing the page';
      if (!data.posts.nodes) return '';

      return (
        <div className="BreakingNewsPosts">
          <div className="row">
            {data.posts.nodes.map(post => (
              <div className="col-sm-6 col-xl-3" key={post.id}>
                <BreakingNewsPostsSingle {...post} />
              </div>
            ))}
          </div>
        </div>
      );
    }}
  </Query>
);

export default BreakingNewsPosts;
