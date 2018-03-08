import React from "react";
import Scroll from "react-scroll";

const Element = Scroll.Element;
const NavTo = Scroll.Link;

export default class extends React.Component {
  static displayName = "Home-Products";

  render () {
    const products = [];

    for (let i = 0; i < 3; i++) {
      const url = `images/product${i + 1}.png`;
      products.push(
        <div key={i} className="pure-u-lg-1-3 pure-u-1">
          <div className="product-container">

            <div className="img-container">
              <img className="pure-img" src={url} />
            </div>

          </div>
        </div>
      );
    }

    return (

      <Element name="products" id="products" className="section-products _section pure-g">

        <div className="pure-u-1-1 center-text">
          <h4>Our Products</h4>
          <hr />
          <p>Decades of experience with electric system relays, and a few years of experience with phasor measurement unit monitoring, suggests that different grid events exhibit distinct patterns or “signatures” as seen through voltage, power, frequency, or other monitored evidence. While the specific characteristics of a specific event such as a tree-to- powerline contact may vary, the overall signature or pattern for a specific signature tends to be remarkably consistent across the grid, and these patterns can be used for forensic analysis and, in some cases, for predictive diagnostics and asset management. In the case of Geomagnetically-Induced Currents (GICs) caused by GMD events, the GICs drive reactive power responses in substation transformers that can be detected by PMUs, and that those responses may create a distinctive signature that could be used to create GMD-GIC alerts.</p>
        </div>

        <div className="products-container pure-u-1-1">
          {products}
        </div>

      </Element>
    )
  }
};
