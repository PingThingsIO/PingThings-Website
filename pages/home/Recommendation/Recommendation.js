import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Recommendation',

  render() {
    return (
      <Element  name="recommendation" className='section-recommendation _section pure-g'>

        <div className='pure-u-1-1'>
          <h2>PingThings is a great example of the type of disruptive software that industries need to scale up the individual Internet, and we&#39;re delighted to make an investment in the company.</h2>
          <h3>- William &#39;Bill&#39; Ruh, CEO, GE Digital</h3>
        </div>

      </Element>
    )
  }

});
