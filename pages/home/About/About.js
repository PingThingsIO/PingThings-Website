import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-About',

  render() {
    return (
      <Element name='about' className='section-about pure-g _section'>
        <div className='pure-u-1-1 animated fadeInLeft'>
          <div className='left-text'>
            <h4>About PingThings</h4>
            <p>PingThings partners with forward thinking utilities to take advantage of a structural shift to artificial intelligence in the energy industry driven by the grid's growing complexity.
            </p>
            <p>DOE and McKinsey estimates show predictive analytics can save utilities ~17-31% annually on maintenance costs. Further, unplanned outages are growing 10% every year, costing $189B annually. Big data is key, but utilities use only 2% of their massive datasets. Existing software is designed for archiving, not analysis and is even worse for high data rate sensors.</p>
            <p>PingThings solves these issues with the PredictiveGrid™, a purpose built platform for ingesting, storing, accessing, visualizing, analyzing, and training machine- and deep-learning models with data from large numbers of sensors. The platform is offered as an on-premise appliance and as a private cloud. Benchmarks indicate that we are at least two orders of magnitude faster than competitors.</p>
            <p>For businesses, PredictiveGrid™ is designed to be easy to adopt and deploy. For end users, we integrate with industry standard open source tools for data science and machine learning. PredictiveGrid™ solves problems at every step of the data analysis pipeline to make employees more productive, reduce the cost of analysis, and expand what's possible with your data.</p>
            <NavTo activeClass="active" to="contact" spy={true} smooth={true} duration={750}>
              <button className="pure-button">LEARN MORE</button>
            </NavTo>
          </div>
        </div>
      </Element>
    )
  }

});