import React, { Component } from 'react';
import Scroll from 'react-scroll';
import StorySection from './home/Story';
import AboutSection from './home/About';
import HowSection from './home/How';
import StatsSection from './home/Stats';
import ProductsSection from './home/Products';
import CtaSection from './home/Cta';
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

        <HowSection />

        <StatsSection />

        <ProductsSection />

        <CtaSection />

        <ResourcesSection />

        <ContactSection />

      </div>
    );
  }

}
