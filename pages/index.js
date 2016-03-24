import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default class extends Component {

  render() {

    const stats = [];
    for (var i = 0; i < 4; i++) {
      stats.push(
        <div key={i} className='stat-container pure-u-lg-1-4 pure-u-1-2'>
          <div className='stat-numeral'>
            <i className="fa fa-star-o"></i>
            <h5>100</h5>
          </div>
          <h6>Stat Number {i + 1}</h6>
          <hr/>
        </div>
      );
    }

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

    const products = [];
    for (var i = 0; i < 3; i++) {
      products.push(
        <div key={i} className='pure-u-lg-1-3 pure-u-1'>
          <div className='product-container'>

            <div className='img-container'>
              <img className='pure-img' src='/images/product-image.png' />
            </div>

          </div>
        </div>
      );
    }

    return (
      <div id='/'>
        <section className='section-story'>
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
        </section>

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

        <section className='section-how pure-g'>

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
        </section>

        <section className='section-stats pure-g'>
          <div className='stats-container animated fadeIn'>
            {stats}
          </div>
        </section>

        <Element name="products" id='products' className='section-products _section pure-g'>

          <div className='pure-u-1-1 center-text'>
            <h4>Our Products</h4>
            <hr/>
            <p>T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='products-container pure-u-1-1'>
            {products}
          </div>

        </Element>

        <section className='section-cta pure-g'>

          <div className='pure-u-1-1'>
            <h2>Call To Action. You Know You Want To Find Out More</h2>
            <button className="pure-button">Contact Us</button>
          </div>

        </section>

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

        <Element name='contact' className='section-contact _section pure-g'>

          <div className='pure-u-1 center-text'>
            <h4>Get In Touch With Us</h4>
            <hr/>
            <p>T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin. T-bone meatball kielbasa, strip steak ham pork loin.</p>
          </div>

          <div className='pure-u-1-1 pure-u-lg-14-24'>
            <form className="pure-form pure-form-stacked">
              <fieldset>
                <div className='pure-u-1'>
                  <input id="first-name" className='name' placeholder="FIRST NAME" type="text"/>
                  <input id="last-name" className='name' placeholder="LAST NAME" type="text"/>
                </div>
                  <input id="email" placeholder="EMAIL" className="pure-u-1" type="email" required/>
                  <textarea id="comment" placeholder='MESSAGE' className="pure-input-1"></textarea>
                <button type="submit" className="pure-button">Submit</button>

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

      </div>
    );
  }

}
