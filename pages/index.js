import React, { Component } from 'react';
import Scroll from 'react-scroll';
import StorySection from './home/Story';
import AboutSection from './home/About';
import HowSection from './home/How';
import RecommendationSection from './home/Recommendation';
import QuoteSection from './home/Quote';
import ProductsSection from './home/Products';
import TeamSection from './home/Team';
import ResourcesSection from './home/Resources';
import ContactSection from './home/Contact';

const Element = Scroll.Element;
const NavTo  = Scroll.Link;

export default class extends Component {

  render() {

    return (

      <div id='/'>

        <StorySection />

        <AboutSection />

        <RecommendationSection />

        <HowSection />

        <QuoteSection />

        <ProductsSection />

        <TeamSection />

        <ResourcesSection />

        <ContactSection />

      </div>
    );
  }

}
