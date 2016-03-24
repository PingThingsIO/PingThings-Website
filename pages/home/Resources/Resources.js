import React from 'react';
import './Resources.scss';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Resources',

  render() {
{}
    const publications = [];
    for (var i = 0; i < 2; i++) {
      const unIndexed = i + 1;
      const path = `/images/temp-stock-2.jpg`;

      publications.push(
        <div key={i} className='pure-u-lg-1-2 pure-u-1'>
          <div className='pub-container'>

            <div className='img-container'>
              <img className='pure-img' src={path} />
            </div>

            <div className='pub-text'>
              <h3>Blog Title {unIndexed}</h3>
              <p>T-bone meatball kielbasa, strip steak ham pork loin.</p>
              <div className='date-container'>
                <p><i className='fa fa-calendar'></i>March 14, 2015</p>

              </div>
            </div>

          </div>
        </div>
      );
    }

    return (
      <Element name="resources" className='section-resources _section pure-g'>

        <div className='pure-u-1-1 center-text'>
          <h4>Latest Publications and Resources</h4>
          <hr/>
          <p>T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin.</p>
        </div>

        <div className='publications-container pure-u-1-1'>
          {publications}
        </div>

      </Element>
    )
  }

});