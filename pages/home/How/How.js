import React from "react";
import Scroll from "react-scroll";

const Element = Scroll.Element;
const NavTo = Scroll.Link;

export default class extends React.Component {
  displayName = "Home-How";

  render() {
    return (
      <Element name="how" className="section-how _section pure-g">
        <div className="pure-u-1-1 center-text">
          <h4 className="animated slideInDown">Solution Characteristics</h4>
          <hr className="animated slideInLeft" />
        </div>

        <div className="blocks-container">
          <div className="block pure-u-lg-1-4 pure-u-1-1 animated rotateInDownRight">
            <i className="fa fa-rocket" />
            <h5>High Performance</h5>
            <p>
              Store more data and query it faster than any competitor. Make
              analysis faster, easier, and cheaper.
            </p>
          </div>

          <div className="block pure-u-lg-1-4 pure-u-1-1 animated rotateInDownRight">
            <i className="fa fa-wrench" />
            <h5>Extensible</h5>
            <p>
              Use the best tools available. We provide a rock solid storage and
              query engine, integrations to leading tools, and the ability to
              integrate with more.
            </p>
          </div>

          <div className="block pure-u-lg-1-4 pure-u-1-1 animated rotateInDownRight">
            <i className="fa fa-wrench" />
            <h5>Reliable</h5>
            <p>
              Designed for reliability with a containerized, distributed
              architecture that is fault tolerant, redundant, and can self heal.
            </p>
          </div>

          <div className="block pure-u-lg-1-4 pure-u-1-1 animated rotateInDownRight">
            <i className="fa fa-wrench" />
            <h5>Business Friendly</h5>
            <p>
              Designed for reliability, ease of deployment, rapid Time to Value,
              security and can run parallel to existing systems.
            </p>
          </div>
        </div>
      </Element>
    );
  }
});
