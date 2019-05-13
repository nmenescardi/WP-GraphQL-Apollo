import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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

class TagsCloud extends Component {
  renderTagsCloud(tags) {
    return tags.map(tag => {
      return (
        <li key={tag.slug}>
          <a href="/#">{tag.name}</a>
        </li>
      );
    });
  }

  render() {
    const { loading, tags } = this.props.data;
    let tagsCloudBox = '';
    if (!loading) {
      tagsCloudBox = this.renderTagsCloud(tags.nodes);
    } else {
      tagsCloudBox = 'loading...';
    }

    return (
      <div className="single-widget tags-widget">
        <h4 className="title">Post Tags</h4>
        <ul>{tagsCloudBox}</ul>
      </div>
    );
  }
}

export default graphql(GET_TAGS)(TagsCloud);
