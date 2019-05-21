import React from 'react';
import Logo from './Logo';
import NavMenu from './mainMenu/NavMenu';

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="row">
          <div className="Header__inner">
            <Logo />
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
