import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Team',

  render() {
    return (

      <Element name='team' className='_section section-team'>
        <div className='pure-u-1 center-text'>
          <h4>Our Team</h4>
          <hr/>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-3'>
          <div className='team-img-container'>
            <img src='images/sootkoos.jpg'/>
          </div>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-twitter"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-3'>
          <div className='team-img-container'>
            <img src='images/schuman.jpg'/>
          </div>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-twitter"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-3'>
          <div className='team-img-container'>
            <img src='images/murphy.jpeg'/>
          </div>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-twitter"></i></a>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-envelope"></i></a>
          </div>
        </div>

      </Element>

    )
  }

});