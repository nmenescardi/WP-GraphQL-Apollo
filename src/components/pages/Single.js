import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_SINGLE_POST = gql`
  query {
    post(id: ":cG9zdDo1OTY=") {
      id
      postId
      title
    }
  }
`;

export class Single extends Component {
  render() {
    const { match, data } = this.props;

    console.log('props.data', data);
    return <Fragment>Single Page for : {match.params.id}</Fragment>;
  }
}
export default graphql(GET_SINGLE_POST)(Single);
