import React from 'react';
import './About.scss';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-About',

  render() {
    return (
      <Element name='about' className='section-about pure-g _section'>
        <div className='pure-u-1-1 pure-u-lg-1-2 animated fadeInLeft'>
          <div className='left-text'>
            <h4>About Ping Things</h4>
            <p>Ham hock prosciutto salami venison pastrami flank. Sausage leberkäse flank t-bone meatball kielbasa, strip steak ham pork loin turkey swine cow tenderloin jowl. Venison pig kielbasa meatball, rump pork loin chicken hamburger salami bresaola sausage meatloaf ham chuck short loin.</p>
            <button className="pure-button">LEARN MORE</button>
          </div>
        </div>
        <div className='pure-u-1-1 pure-u-lg-1-2 animated fadeInRight'>
          <div className='image-container'>
            <img className='pure-img' src='images/temp-stock-1.jpg' />
          </div>
        </div>
      </Element>
    )
  }

});