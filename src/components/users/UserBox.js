import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_USER_BY_ID = gql`
  query {
    user(id: "dXNlcjoy") {
      firstName
      lastName
      description
      avatar {
        url
      }
    }
  }
`;

class UserBox extends Component {
  renderUserBox(user) {
    return (
      <div className="single-widget">
        <img className="img-fluid" src={user.avatar.url} alt="User Avatar" />
        <h4 className="single-widget__title">{`${user.firstName} ${
          user.lastName
        }`}</h4>
        <p className="UserBox__description">{user.description}</p>
      </div>
    );
  }

  render() {
    const { loading, user } = this.props.data;
    const mainUserBox = loading ? 'loading...' : this.renderUserBox(user);

    return <div className="UserBox">{mainUserBox}</div>;
  }
}

export default graphql(GET_USER_BY_ID)(UserBox);
