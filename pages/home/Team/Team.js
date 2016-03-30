import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Team',

  render() {
    return (

      <Element name='team' className='_section section-team'>
        <div className='pure-u-1'>
          <h4>Our Team</h4>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-3 row-1 left-1st'>
          <div className='team-img-container'>
            <img src='images/sootkoos.jpg'/>
          </div>
          <h5>Rich Sootkoos</h5>
          <h6>Chief Executive Officer</h6>
          <div className='contact-link'>
            <a target="_blank" href='http://www.linkedin.com/pub/rich-sootkoos/0/969/942'><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='mailto:rich@pingthings.io'><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-3 row-1'>
          <div className='team-img-container'>
            <img src='images/schuman.jpg'/>
          </div>
          <h5>Jerry Schuman</h5>
          <h6>Chief Technology Officer</h6>
          <div className='contact-link'>
            <a target="_blank" href='http://linkedin.com/in/jerryschuman'><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='https://twitter.com/theagent'><i className="fa fa-twitter"></i></a>
            <a target="_blank" href='mailto:jerry@pingthings.io'><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-3 row-1 right-1st'>
          <div className='team-img-container'>
            <img src='images/murphy.jpeg'/>
          </div>
          <h5>Sean Patrick Murphy</h5>
          <h6>Chief Data Scientist</h6>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/in/seanpatrickmurphy1'><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href='https://twitter.com/sayhitosean'><i className="fa fa-twitter"></i></a>
            <a target="_blank" href='mailto:sean@pingthings.io'><i className="fa fa-envelope"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-2 left-2nd'>
          <div className='team-img-container'>
            <img src='images/ramsay.jpg'/>
          </div>
          <h5>Stewart Ramsay</h5>
          <h6>Advisory Board</h6>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/pub/stewart-ramsay/6/bb5/a46'><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        <div className='pure-u-1-1 pure-u-lg-1-2 right-2nd'>
          <div className='team-img-container'>
            <img src='images/heyeck.jpg'/>
          </div>
          <h5>Mike Heyeck</h5>
          <h6>Advisory Board</h6>
          <div className='contact-link'>
            <a target="_blank" href='https://www.linkedin.com/pub/michael-heyeck/14/91/4bb'><i className="fa fa-linkedin"></i></a>
          </div>

        </div>

      </Element>

    )
  }

});