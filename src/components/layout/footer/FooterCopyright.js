import React from 'react';

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-copyright-container">
      <p className="copyright-text">
        Copyright {currentYear} © All rights reserved | This template is made
        using{' '}
        <a
          className="colorlib-link"
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

export default FooterCopyright;
