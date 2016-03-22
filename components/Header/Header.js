import React from 'react';
import './Header.scss';
import Link from '../Link';

function Navigation() {
  return (
    <header>

      <div className='logo-container'>
        <img src='images/PingThings_logo.png'/>
      </div>

      <ul className="Navigation" role="menu">
        <li className="Navigation-item">
          <a className="Navigation-link" href="/">Story</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/#products">Products</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/#resources">Resources</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/blog" onClick={Link.handleClick}>Blog</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
