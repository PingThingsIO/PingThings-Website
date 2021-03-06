import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default React.createClass({
  displayName: 'Home-Stats',

  render() {

    const stats = [];
    const datum = [{
      number: '6',
      klass: 'fa fa-search',
      title: 'Utility Company Proof of Concepts'
    },{
      number: '4',
      klass: 'fa fa-cogs',
      title: 'Viability Projects'
    },{
      number: '30%',
      klass: 'fa fa-database',
      title: 'of North American Sensor Data'
    },{
      number: '1',
      klass: 'fa fa-file-text-o',
      title: 'Provisional Patent'
    }]

    for (var i = 0; i < datum.length; i++) {
      let data = datum[i];
      stats.push(
        <div key={i} className='stat-container pure-u-lg-1-4 pure-u-1-2'>
          <div className='stat-numeral'>
            <i className={data.klass}></i>
            <h5>{data.number}</h5>
          </div>
          <h6>{data.title}</h6>
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