import React from 'react';
import FeaturedPostsSingle from './FeaturedPostsSingle';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_FEATURED_POSTS = gql`
  query GET_FEATURED_POSTS($categorySlug: String!) {
    posts(first: 3, where: { categoryName: $categorySlug }) {
      nodes {
        id
        postId
        title
        date
        excerpt
        featuredImage {
          sourceUrl
        }
        author {
          id
          firstName
          lastName
          avatar {
            url
          }
        }
      }
    }
  }
`;

const FeaturedPosts = () => (
  <Query query={GET_FEATURED_POSTS} variables={{ categorySlug: 'featured' }}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return 'Error. Please try refreshing the page';
      if (!data.posts.nodes) return '';

      return (
        <div className="FeaturedPosts">
          <div className="row no-gutters row-eq-height">
            {data.posts.nodes.map(post => (
              <div className="col-lg-4" key={post.id}>
                <FeaturedPostsSingle {...post} />
              </div>
            ))}
          </div>
        </div>
      );
    }}
  </Query>
);

export default FeaturedPosts;
