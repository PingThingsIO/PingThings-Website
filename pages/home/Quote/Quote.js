import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default class extends React.Component {
  displayName =  'Home-Quote';

  render() {
    return (
      <Element  name="quote" className='section-quote _section pure-g'>

        <div className='pure-u-1-1'>
          <h2>Utilities today are increasingly seeking ways to manage, process, and act on the massive influx of data streaming in from meters, sensors, voltage monitors, and other devices deployed across the network. The need to manage and make optimal use of this data—to filter out the noise, analyze the value, and translate insight into automated decision-making and real-time problem solving—makes the integration of analytics into utility operations an almost foregone conclusion.
          </h2>
          <h3>-<i>From Smart Grid to Neural Grid,</i> Navigant, 2018</h3>
        </div>

      </Element>
    )
  }
};
