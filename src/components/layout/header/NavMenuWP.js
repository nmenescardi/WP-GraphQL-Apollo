import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_MENU_ITEMS = gql`
  query {
    menu(id: "TWVudToyOA==") {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
  }
`;

class NavMenu extends Component {
  render() {
    const { loading, menu } = this.props.data;

    const menuItems = loading
      ? [{ url: '', label: 'loading...' }]
      : menu.menuItems.nodes;

    return (
      <ul className="NavMenu">
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default graphql(GET_MENU_ITEMS)(NavMenu);
