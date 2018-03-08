import React from "react";
import Scroll from "react-scroll";
import "./Header.scss";
// import Link from "../Link";
import Burger from "./Burger";

const scroll = Scroll.animateScroll;
const NavTo = Scroll.Link;

class Header extends React.Component {
  state = { menu: "is-closed" };

  scrollToTop = () => {
    this.closeMenu();
    scroll.scrollToTop();
  }

  handleClick = state => {
    this.closeMenu();
    this.setState({ menu: state });
  }

  closeMenu = () => this.setState({ menu: "is-closed" })

  render () {
    return (
      <header>

        <div className="logo-container animated fadeInLeft">
          <img src="images/PingThings_logo.png" />
        </div>

        <Burger menu={this.state.menu} handleClick={this.handleClick} />

        <ul className={`Navigation ${this.state.menu}`} role="menu">
          <li className="Navigation-item animated fadeInUp">
            <a className="Navigation-link" onClick={this.scrollToTop}>Story</a>
          </li>
          <li className="Navigation-item animated fadeInUp">
            <NavTo activeClass="active" className="Navigation-link" to="products" spy smooth duration={750} onClick={this.closeMenu}>Products</NavTo>
          </li>
          <li className="Navigation-item animated fadeInUp">
            <NavTo activeClass="active" className="Navigation-link" to="resources" spy smooth duration={750} onClick={this.closeMenu}>Resources</NavTo>
          </li>
          <li className="Navigation-item animated fadeInUp">
            <NavTo activeClass="active" className="Navigation-link" to="team" spy smooth duration={750} onClick={this.closeMenu}>Team</NavTo>
          </li>
          <li className="Navigation-item animated fadeInUp">
            <NavTo activeClass="active" className="Navigation-link" to="contact" spy smooth duration={750} onClick={this.closeMenu}>Contact</NavTo>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
