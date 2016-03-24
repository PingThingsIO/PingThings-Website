import React from 'react';
import './Story.scss';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Story',

  render() {
    return (

      <Element name='top' className='_section section-story'>
        <div className='center-text text-hero'>
          <h1 className='animated fadeIn'>Welcome to the PredictiveGrid&trade;</h1>
          <p className='animated fadeIn'>Ham hock prosciutto salami venison pastrami flank. Sausage leberkäse flank t-bone meatball kielbasa, strip steak ham pork loin turkey swine cow tenderloin jowl. Venison pig kielbasa meatball, rump pork loin chicken hamburger salami bresaola sausage meatloaf ham chuck short loin.</p>
          <div className='scroll-container'>
            <NavTo activeClass="active" to="about" spy={true} smooth={true} duration={750}>
              <div className='down-scroll animated bounceIn'>
                <i className="fa fa-angle-down"></i>
              </div>
            </NavTo>
          </div>
        </div>
      </Element>

    )
  }

});