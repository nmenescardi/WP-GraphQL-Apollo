import React from 'react';
import SinglePostCard from './SinglePostCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_POSTS = gql`
  query GET_POSTS($skipCategories: [ID!]!) {
    posts(where: { categoryNotIn: $skipCategories }) {
      nodes {
        id
        postId
        title
        excerpt
        slug
        author {
          id
          nickname
          slug
        }
        date
        featuredImage {
          sourceUrl
        }
        comments {
          nodes {
            approved
          }
        }
      }
    }
  }
`;

const PostGrid = () => (
  <Query query={GET_POSTS} variables={{ skipCategories: [29, 17] }}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return 'Error. Please try refreshing the page';
      if (!data.posts.nodes) return '';

      return (
        <div className="PostGrid">
          <div className="row">
            {data.posts.nodes.map(post => (
              <div className="col-lg-6 col-md-6" key={post.id}>
                <SinglePostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      );
    }}
  </Query>
);

export default PostGrid;
