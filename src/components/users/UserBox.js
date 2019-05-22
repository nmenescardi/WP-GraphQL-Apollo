import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USER_BY_ID = gql`
  query GET_USER_BY_ID($userId: ID!) {
    user(id: $userId) {
      firstName
      lastName
      description
      avatar {
        url
      }
    }
  }
`;

const UserBox = () => (
  <Query query={GET_USER_BY_ID} variables={{ userId: 'dXNlcjoy' }}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return 'Error. Please try refreshing the page';
      if (!data.user) return '';

      const { user } = data;

      return (
        <div className="UserBox">
          <div className="single-widget">
            <img
              className="img-fluid"
              src={user.avatar.url}
              alt="User Avatar"
            />
            <h4 className="single-widget__title">{`${user.firstName} ${
              user.lastName
            }`}</h4>
            <p className="UserBox__description">{user.description}</p>
          </div>
        </div>
      );
    }}
  </Query>
);

export default UserBox;
