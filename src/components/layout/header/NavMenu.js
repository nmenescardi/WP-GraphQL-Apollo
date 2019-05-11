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
    let menuItems;

    if (loading) {
      menuItems = [];
    } else {
      menuItems = menu.menuItems.nodes;
      console.log('data', menuItems);
    }
    return (
      <ul className="nav-menu">
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
