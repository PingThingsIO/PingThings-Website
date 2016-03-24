import React from 'react';
import './Stats.scss';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Stats',

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

    return (
      <section className='section-stats pure-g'>
        <div className='stats-container animated fadeIn'>
          {stats}
        </div>
      </section>
    )
  }

});