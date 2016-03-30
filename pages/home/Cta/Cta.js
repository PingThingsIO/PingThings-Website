import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Cta',

  render() {
    return (
      <Element  name="cta" className='section-cta _section pure-g'>

        <div className='pure-u-1-1'>
          <h2>Call To Action. You Know You Want To Find Out More</h2>
          <button className="pure-button">Contact Us</button>
        </div>

      </Element>
    )
  }

});