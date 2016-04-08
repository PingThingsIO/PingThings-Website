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
            <p>PingThings Inc., is a venture-backed software company that brings best-of-breed big-data software and data science techniques to the utility industry. We offer streaming analytics solutions for anomaly detection and event recognition on the power grid.</p>
            <p>PingThings is the only company to ever receive seed funding from GE and was recognized as a top 20 early stage startup at the Siemens New Venture Forum in 2014. PingThings is engaged in several proof of concepts with multiple utilities and reliability coordinators on both coasts of North America. The data sharing agreements currently in place offer us access to data covering over one third of the North American continent. We are a very small team of seven professionals passionate about bringing to market new tools for stability and reliability.</p>
            <p>PingThings’ PredictiveGrid™ solution is a model-free, event-driven sensor platform focused on empirical data versus traditional system models and simulations. Our loosely coupled platform enables flexibility and plug and play integration with control room systems. A comprehensive suite of data modeling technologies, including clustering and classification techniques, is applied to real-time, high-fidelity data streaming from multiple sources internal and external to the utilities. Our analytics platform enables operators to better manage, maintain and protect assets with alerts to specific events occurring now and the probability that a future event will occur, such as asset failure. PredictiveGrid™ will enable control room operators to proactively manage imminent events and potentially avoid unplanned outages and unfavorable disruptions.</p>
            <NavTo activeClass="active" to="contact" spy={true} smooth={true} duration={750}>
              <button className="pure-button">LEARN MORE</button>
            </NavTo>
          </div>
        </div>
      </Element>
    )
  }

});