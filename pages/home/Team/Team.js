import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Team',

  render() {
    return (

      <Element name='team' className='_section section-team'>
        <div className='pure-u-1 team-header'>
          <h4>Our Team</h4>
          <hr/>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-4 team-container'>
          <div className='team-img-container'>
            <img src='images/schuman.jpg'/>
          </div>
          <h5>Jerry Schuman</h5>
          <h6>Co - Chief Executive Officer</h6>
          <div className='contact-link'>
            <a target="_blank" href='http://linkedin.com/in/jerryschuman'><i className="fab fa-linkedin"></i></a>
            <a target="_blank" href='https://twitter.com/theagent'><i className="fab fa-twitter"></i></a>
            <a target="_blank" href='mailto:jerry@pingthings.io'><i className="far fa-envelope"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-4 team-container'>
          <div className='team-img-container'>
            <img src='images/murphy.jpg'/>
          </div>
          <h5>Sean Patrick Murphy</h5>
          <h6>Co - Chief Executive Officer</h6>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fab fa-linkedin"></i></a>
            <a target="_blank" href='https://twitter.com/sayhitosean'><i className="fab fa-twitter"></i></a>
            <a target="_blank" href='mailto:sean@pingthings.io'><i className="far fa-envelope"></i></a>
          </div>
        </div>

      </Element>

    )
  }

});
