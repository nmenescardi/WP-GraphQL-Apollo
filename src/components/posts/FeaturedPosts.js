import React, { Component } from 'react';
import FeaturedPostsSingle from './FeaturedPostsSingle';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_POSTS = gql`
  query {
    posts(first: 3, where: { categoryName: "featured" }) {
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

export class FeaturedPosts extends Component {
  renderGrid(posts) {
    return posts.map(post => {
      return (
        <div className="col-md-4" key={post.id}>
          <FeaturedPostsSingle {...post} />
        </div>
      );
    });
  }

  render() {
    const { loading, posts } = this.props.data;
    const grid = loading ? 'loading...' : this.renderGrid(posts.nodes);

    return (
      <div className="FeaturedPosts">
        <div className="row no-gutters row-eq-height">{grid}</div>
      </div>
    );
  }
}

export default graphql(GET_POSTS)(FeaturedPosts);
