import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <ul className="Navigation" role="menu">
      <li className="Navigation-item">
        <a className="Navigation-link" href="/" onClick={Link.handleClick}>Story</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/products" onClick={Link.handleClick}>Products</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/resources" onClick={Link.handleClick}>Resources</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/blog" onClick={Link.handleClick}>Blog</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
