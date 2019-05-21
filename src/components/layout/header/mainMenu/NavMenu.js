import React, { Component } from 'react';
import DesktopMainMenu from './DesktopMainMenu';
import MobileMainMenu from './MobileMainMenu';

class NavMenu extends Component {
  menuItems = [
    {
      id: 0,
      label: 'Home',
      url: '/'
    },
    {
      id: 1,
      label: 'About Us',
      url: '/'
    },
    {
      id: 2,
      label: 'Services',
      url: '/'
    },
    {
      id: 3,
      label: 'Blog',
      url: '/'
    },
    {
      id: 4,
      label: 'Contact Us',
      url: '/'
    }
  ];

  renderMenuItems = () => {
    return this.menuItems.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url}>{item.label}</a>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="NavMenu">
        <DesktopMainMenu renderMenuItems={this.renderMenuItems()} />
        <MobileMainMenu renderMenuItems={this.renderMenuItems()} />
      </div>
    );
  }
}

export default NavMenu;
