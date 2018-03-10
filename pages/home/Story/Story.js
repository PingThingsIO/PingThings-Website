import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Story',

  render() {
    return (

      <Element name='top' className='_section section-story'>
        <div className='center-text text-hero'>
          <h1 className='animated fadeIn'>Welcome to the PredictiveGrid<span className='trademark'>&trade;</span></h1>
          <p className='animated fadeIn'>We offer the AI platform for sensor data to transform today’s Smart Grid into tomorrow’s Neural Grid. Data Science and AI thrive in complex domains with massive data. The electrical grid is the most complex machine ever built, and utilities are awash in data. Navigant estimates the "Neural Grid" to be a staggering $3.8 trillion market. PingThings is helping our partners accelerate this change and reap the rewards of this transformation.</p>
          <div className='scroll-container'>
            <NavTo activeClass="active" to="about" spy={true} smooth={true} duration={750}>
              <div className='down-scroll animated bounceIn'>
                <i className="fas fa-angle-down"></i>
              </div>
            </NavTo>
          </div>
        </div>
      </Element>

    )
  }

});