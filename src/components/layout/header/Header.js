import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  //TODO: BEM
  return (
    <header>
      <div className="main-menu header-container">
        <div className="container">
          <div className="row">
            <nav id="nav-menu-container">
              <Logo />
              <NavMenu />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
