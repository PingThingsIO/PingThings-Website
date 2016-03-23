import React from 'react';
import './Footer.scss';
import Link from '../Link';

function Footer() {
  return (
    <footer>

      <div className='logo-container'>
        <img src='images/PingThings_logo.png'/>
      </div>

      <p>&copy; PingThings Inc. All Rights Reserved</p>

    </footer>
  );
}

export default Footer;
