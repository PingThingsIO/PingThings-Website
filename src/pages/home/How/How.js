import React from "react";
import Scroll from "react-scroll";

const Element = Scroll.Element;
const NavTo = Scroll.Link;

export default class extends React.Component {
  static displayName = "Home-How";

  render () {
    return (
      <Element name="how" className="section-how _section pure-g">
        <div className="pure-u-1-1 center-text">
          <h4 className="animated slideInDown">Solution Characteristics</h4>
          <hr className="animated slideInLeft" />
        </div>

        <div className="blocks-container">

          <div className="block pure-u-lg-1-3 pure-u-1-1 animated rotateInDownLeft">
            <i className="fa fa-bar-chart" />
            <h5>Scalable</h5>
            <p>We can scale from just a few servers to thousands depending on your needs and requirements.</p>
          </div>

          <div className="block pure-u-lg-1-3 pure-u-1-1 animated fadeInDown middle">
            <i className="fa fa-link" />
            <h5>Loosley Coupled</h5>
            <p>We&#39;ve made our software to expect change. Supporting a large array of technologies that can plug in to replace something you&#39;re not familiar with or support.</p>
          </div>

          <div className="block pure-u-lg-1-3 pure-u-1-1 animated rotateInDownRight">
            <i className="fa fa-rocket" />
            <h5>Powerful</h5>
            <p>We optimize to perform. Regardless of the size or speed of your data streams, we can handle it.</p>
          </div>

        </div>

      </Element>
    )
  }
};
