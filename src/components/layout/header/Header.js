import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="row">
          <nav className="Header__menu">
            <Logo />
            <NavMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
