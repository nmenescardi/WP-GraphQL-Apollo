import React, { Component } from 'react';
import BreakingNewsPostsSingle from './BreakingNewsPostsSingle';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_POSTS = gql`
  query {
    posts(first: 4, where: { categoryName: "breaking-news" }) {
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

export class BreakingNewsPosts extends Component {
  renderGrid(posts) {
    return posts.map(post => {
      return (
        <div className="col-md-3" key={post.id}>
          {<BreakingNewsPostsSingle {...post} />}
        </div>
      );
    });
  }

  render() {
    const { loading, posts } = this.props.data;
    const grid = loading ? 'loading...' : this.renderGrid(posts.nodes);

    return (
      <div className="BreakingNewsPosts">
        <div className="row">{grid}</div>
      </div>
    );
  }
}

export default graphql(GET_POSTS)(BreakingNewsPosts);
