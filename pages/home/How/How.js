import React from 'react';
import './How.scss';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-How',

  render() {
    return (
      <Element name='how' className='section-how _section pure-g'>
        <div className='pure-u-1-1 center-text'>
          <h4 className='animated slideInDown'>How It Works</h4>
          <hr className='animated slideInLeft'/>
          <p className='animated slideInLeft'>T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin.</p>
        </div>

        <div className='blocks-container'>

          <div className='block pure-u-lg-1-3 pure-u-1-2 animated rotateInDownLeft'>
            <i className="fa fa-bar-chart"></i>
            <h5>Some Title</h5>
            <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='block pure-u-lg-1-3 pure-u-1-2 animated fadeInDown'>
            <i className="fa fa-futbol-o"></i>
            <h5>Some Title</h5>
            <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='block pure-u-lg-1-3 pure-u-1-2 animated rotateInDownRight'>
            <i className="fa fa-paper-plane"></i>
            <h5>Some Title</h5>
            <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='block pure-u-lg-1-3 pure-u-1-2 animated rotateInUpLeft'>
            <i className="fa fa-terminal"></i>
            <h5>Some Title</h5>
            <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='block pure-u-lg-1-3 pure-u-1-2 animated fadeInUp'>
            <i className="fa fa-university"></i>
            <h5>Some Title</h5>
            <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='block pure-u-lg-1-3 pure-u-1-2 animated rotateInUpRight'>
            <i className="fa fa-tachometer"></i>
            <h5>Some Title</h5>
            <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

        </div>

      </Element>
    )
  }

});