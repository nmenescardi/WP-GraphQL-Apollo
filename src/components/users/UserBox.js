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
      <div className="single-widget protfolio-widget">
        <img className="img-fluid" src={user.avatar.url} alt="" />
        <a href="/#">
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
        </a>
        <p className="p-text">{user.description}</p>
      </div>
    );
  }

  render() {
    const { loading, user } = this.props.data;
    let mainUserBox = '';
    if (!loading) {
      mainUserBox = this.renderUserBox(user);
    } else {
      mainUserBox = 'loading...';
    }

    return <div className="user-box-container">{mainUserBox}</div>;
  }
}

export default graphql(GET_USER_BY_ID)(UserBox);
