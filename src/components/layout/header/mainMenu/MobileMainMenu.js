import React, { Component } from 'react';
import classnames from 'classnames';

class MobileMainMenu extends Component {
  state = {
    menuOpened: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpened: !prevState.menuOpened
    }));
  };

  render() {
    const { renderMenuItems } = this.props;

    const openedClass = this.state.menuOpened ? 'menu-opened' : '';

    return (
      <div className={classnames('MobileMainMenu', openedClass)}>
        <a
          className="MobileMainMenu__button"
          onClick={this.toggleMenu}
          href="#!"
        >
          <span className="MobileMainMenu__icon">&nbsp;</span>
        </a>

        <div className="MobileMainMenu__background">&nbsp;</div>

        <nav className="MobileMainMenu__nav">
          <ul className="MobileMainMenu__list">{renderMenuItems}</ul>
        </nav>
      </div>
    );
  }
}

export default MobileMainMenu;
