import React from 'react';
import './Header.scss';
import Link from '../Link';
import Scroll from 'react-scroll';

const scroll  = Scroll.animateScroll;
const NavTo   = Scroll.Link;

var Header = React.createClass({

  scrollToTop () {
    scroll.scrollToTop();
  },

  render () {
    return (
      <header>

        <div className='logo-container animated fadeInLeft'>
          <img src='images/PingThings_logo.png'/>
        </div>

        <ul className="Navigation" role="menu">
          <li className="Navigation-item animated fadeInRight">
            <a className="Navigation-link" onClick={this.scrollToTop}>Story</a>
          </li>
          <li className="Navigation-item animated fadeInRight">
            <NavTo activeClass="active" className="Navigation-link" to="products" spy={true} smooth={true} duration={750} >Products</NavTo>
          </li>
          <li className="Navigation-item animated fadeInRight">
            <NavTo activeClass="active" className="Navigation-link" to="resources" spy={true} smooth={true} duration={750} >Resources</NavTo>
          </li>
          <li className="Navigation-item animated fadeInRight">
            <a className="Navigation-link" href="/blog" onClick={Link.handleClick}>Blog</a>
          </li>
          <li className="Navigation-item animated fadeInRight">
            <NavTo activeClass="active" className="Navigation-link" to="contact" spy={true} smooth={true} duration={750} >Contact</NavTo>
          </li>
        </ul>
      </header>
    );
  }

})

export default Header;
