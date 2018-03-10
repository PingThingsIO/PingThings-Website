import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

const pubDate = [
  {
    title: 'Data and Electric Power',
    subTitle: 'From Deterministic Machines to Probablistic Systems in Traditional Engineering',
    date: 'February 2016',
    url: 'http://www.oreilly.com/data/free/data-and-electric-power.csp'
  },{
    title: 'National Space Weather Action Plan',
    subTitle: ' Federal implementation approach for the National Space Weather Strategy',
    date: 'October 2015',
    url: 'https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/final_nationalspaceweatheractionplan_20151028.pdf'
  },
];

export default class extends React.Component {
  displayName =  'Home-Resources';

  render() {
    const publications = [];
    for (var i = 0; i < pubDate.length; i++) {
      const unIndexed = i + 1;
      let data = pubDate[i]
      const path = `./images/publication` + unIndexed + `.png`;

      publications.push(
        <div key={i} className='pure-u-lg-1-2 pure-u-1'>
          <a href={data.url} target="_blank">
            <div className='pub-container'>

              <div className='img-container'>
                <img className='pure-img' src={path} />
              </div>

              <div className='pub-text'>
                <h3>{data.title}</h3>
                <p>{data.subTitle}</p>
                <div className='date-container'>
                  <p><i className="far fa-calendar"></i>{data.date}</p>
                </div>
                <div className='more'>MORE</div>
              </div>

            </div>
          </a>
        </div>
      );
    }

    return (
      <Element name="resources" className='section-resources _section pure-g'>

        <div className='pure-u-1-1 center-text'>
          <h4>Publications and Resources</h4>
          <hr/>
          <p>See the documents below for a sampling of some of our latest research and work. More documents will be added soon.</p>
        </div>

        <div className='publications-container pure-u-1-1'>
          {publications}
        </div>

      </Element>
    )
  }
};
