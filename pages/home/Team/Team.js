import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const NavTo = Scroll.Link;

const team_members = [
  {
    name: 'Jerry Schuman',
    title: 'Co - Chief Executive Officer',
    linkedin: 'jerryschuman',
    twitter: 'theagent',
    email: 'jerry@pingthings.io',
    imageLink: 'schuman.jpg',
  },
  {
    name: 'Sean Patrick Murphy',
    title: 'Co - Chief Executive Officer',
    linkedin: 'seanpatrickmurphy1',
    twitter: 'sayhitosean',
    email: 'sean@pingthings.io',
    imageLink: 'murphy.jpg',
  },
  // {
  //   name: "Adam Carte",
  //   title: "Chairman of the Board",
  //   linkedin: "adamcarte",
  //   twitter: null,
  //   email: "adam@pingthings.io",
  //   imageLink: "carte.jpg",
  // },
  // {
  //   name: "Michael Andersen",
  //   title: "Chief Technology Architect",
  //   linkedin: null,
  //   twitter: null,
  //   email: "michael@pingthings.io",
  //   imageLink: "andersen.jpg",
  // },
];

const TeamMember = (info) => {
  const LinkedIn = () => (
    <a
      target="_blank"
      href={`http://linkedin.com/in/${info.linkedin}`}
    >
      <i className="fab fa-linkedin"></i>
    </a>
  );
  const Twitter = () => (
    <a
      target="_blank"
      href={`https://twitter.com/${info.twitter}`}
    >
      <i className="fab fa-twitter"></i>
    </a>
  );
  const Email = () => (
    <a
      target="_blank"
      href={`mailto:${info.email}`}
    >
      <i className="far fa-envelope"></i>
    </a>
  );
  return (
    <div className='pure-u-1-2 pure-u-lg-1-4 team-container'>
      <div className='team-img-container'>
        <img src={`images/${info.imageLink}`}/>
      </div>
      <h5>{info.name}</h5>
      <h6>{info.title}</h6>
      <div className='contact-link'>
        {info.linkedin && <LinkedIn />}
        {info.twitter && <Twitter />}
        {info.email && <Email />}
      </div>
    </div>
  );
};

export default class extends React.Component {
  displayName = 'Home-Team';

  render() {
    return (

      <Element name='team' className='_section section-team'>
        <div className='pure-u-1 team-header'>
          <h4>Leadership Team</h4>
          <hr/>
        </div>

        {team_members.map(info => TeamMember(info) )}

      </Element>

    );
  }
}

