import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Contact',

  render() {
    return (
      <Element name='contact' className='section-contact _section pure-g'>

        <div className='pure-u-1 center-text'>
          <h4>Get In Touch With Us</h4>
          <hr/>
        </div>

        <div className='pure-u-1-1 pure-u-lg-14-24'>
          <form action="https://formspree.io/murphsp1@gmail.com" method="POST" className="pure-form pure-form-stacked">
            <fieldset>
              <div className='pure-u-1'>
                <input id="first-name" name="name" className='name' placeholder="FIRST NAME" type="text"/>
                <input id="last-name" className='name' placeholder="LAST NAME" type="text"/>
              </div>
                <input id="email" name="_replyto" placeholder="EMAIL" className="pure-u-1" type="email" required/>
                <textarea id="comment" name="message" placeholder='MESSAGE' className="pure-input-1"></textarea>
              <button type="submit" value='send' className="pure-button">Submit</button>

            </fieldset>
          </form>
        </div>
        <div className='pure-u-1-1 pure-u-lg-10-24'>
          <div className='contact-item'>
            <i className="fa fa-map-marker"></i>
            <h6>31910 Del Obispo, Suite 100<br/>San Juan Capistrano, CA 92675</h6>
          </div>
          <div className='contact-item'>
            <i className="fa fa-envelope-o"></i>
            <h6><a href='mailto:info@pingthings.com'>info@pingthings.com</a></h6>
          </div>
          <div className='contact-item'>
            <i className="fa fa-phone"></i>
            <h6>949.373.9751</h6>
          </div>
        </div>
      </Element>
    )
  }

});