import React, { Component } from 'react';
import SinglePostCard from './SinglePostCard';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_POSTS = gql`
  query {
    posts {
      nodes {
        id
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

export class PostGrid extends Component {
  renderGrid(posts) {
    return posts.map(post => {
      return (
        <div className="col-lg-6 col-md-6" key={post.id}>
          <SinglePostCard {...post} />
        </div>
      );
    });
  }

  render() {
    const { loading, posts } = this.props.data;
    let grid = '';
    if (!loading) {
      grid = this.renderGrid(posts.nodes);
    } else {
      grid = 'loading...';
    }

    return <div className="row">{grid}</div>;
  }
}

export default graphql(GET_POSTS)(PostGrid);
