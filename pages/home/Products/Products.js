import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Products',

  render() {

    const products = [];
    for (var i = 0; i < 3; i++) {
      products.push(
        <div key={i} className='pure-u-lg-1-3 pure-u-1'>
          <div className='product-container'>

            <div className='img-container'>
              <img className='pure-img' src='images/product-image.png' />
            </div>

          </div>
        </div>
      );
    }

    return (

      <Element name="products" id='products' className='section-products _section pure-g'>

        <div className='pure-u-1-1 center-text'>
          <h4>Our Products</h4>
          <hr/>
          <p>T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin.</p>
        </div>

        <div className='products-container pure-u-1-1'>
          {products}
        </div>

      </Element>
    )
  }

});