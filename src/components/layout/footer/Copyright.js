import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Copyright">
      <p className="Copyright__text">
        Copyright {currentYear} © All rights reserved{' '}
        <span className="Copyright__separator">|</span> <br />
        This template is made using{' '}
        <a
          className="Copyright__colorlib-link"
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colorlib
        </a>
      </p>
    </div>
  );
};

export default Copyright;
