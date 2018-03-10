import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Products',

  render() {

    const products = [];

    for (var i = 0; i < 3; i++) {
      let url = "images/product" + (i + 1) + ".png";
      products.push(
        <div key={i} className='pure-u-lg-1-3 pure-u-1'>
          <div className='product-container'>

            <div className='img-container'>
              <img className='pure-img' src={url} />
            </div>

          </div>
        </div>
      );
    }

    return (

      <Element name="products" id='products' className='section-products _section pure-g'>

        <div className='pure-u-1-1 left-text'>
          <h4>Our Products</h4>
          <p>PredictiveGrid™ is an Advanced Sensor Analytics Platform (ASAP) that enables data science and machine learning on the vast amount of sensor data available to utilities.</p>

          <p>At its most basic, an ASAP is a combination of a data infrastructure and an integrated set of user facing tools. The data infrastructure ingests sensor data, stores it, and allows authorized applications to access it. The user facing tools in an ASAP make analysis, visualization, and AI development possible.</p>
          
          <p>PredictiveGrid™ leverages a high performance data infrastructure developed at UC Berkeley with DOE funds. It is capable of ingesting 10,000’s of high speed sensors in real time. While competing solutions frequently suffer from slow data queries that may take minutes or even an hour to complete, PredictiveGrid allows users to query for years, months, minutes, or microseconds nearly instantly. Benchmarks indicate it is 10-100x faster than competitors.</p>
          
          <p>Out of the box, PredictiveGridTM provides a full suite of tools for visualization, analysis, and AI development. We use the same industry standard open source tools for data science found in Silicon Valley such as Jupyter Labs, Google TensorFlow and others. This reduces vendor lock in, makes it easier to hire and retain talent and allows new hires to make an impact quickly. The large open source community makes it easy to find answers and gives PredictiveGridTM customers the option to upgrade to state of the art functionality quickly.</p>
        </div>

        <div className='products-container pure-u-1-1'>
          {products}
        </div>

      </Element>
    )
  }

});