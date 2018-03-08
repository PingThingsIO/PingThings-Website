import React from "react";
import Scroll from "react-scroll";

const Element = Scroll.Element;
const NavTo = Scroll.Link;

export default class extends React.Component {
  static displayName = "Home-Story";

  render () {
    return (

      <Element name="top" className="_section section-story">
        <div className="center-text text-hero">
          <h1 className="animated fadeIn">Welcome to the PredictiveGrid<span className="trademark">&trade;</span></h1>
          <p className="animated fadeIn">The grid is in a state of turmoil with the advent of distributed generation, concerns about cybersecurity and the threat of another natural disaster. Wide area situational awareness demands that you know about something before it’s about to happen. Welcome to the PredictiveGrid™. PingThings brings best practices regarding big data with our in-depth understanding of real time sensor data, machine learning techniques and deploying scalable enterprise class systems.</p>
          <div className="scroll-container">
            <NavTo activeClass="active" to="about" spy smooth duration={750}>
              <div className="down-scroll animated bounceIn">
                <i className="fa fa-angle-down" />
              </div>
            </NavTo>
          </div>
        </div>
      </Element>

    )
  }
};
