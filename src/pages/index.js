import React, { Component } from "react";
import Scroll from "react-scroll";
import StorySection from "./home/Story";
import AboutSection from "./home/About";
import HowSection from "./home/How";
import RecommendationSection from "./home/Recommendation";
import StatsSection from "./home/Stats";
import ProductsSection from "./home/Products";
import TeamSection from "./home/Team";
import ResourcesSection from "./home/Resources";
import ContactSection from "./home/Contact";
import PingAnimation from "../components/PingAnimation/PingAnimation";

const Element = Scroll.Element;
const NavTo = Scroll.Link;

export default class extends Component {

  render() {
    return (

      <div id="/">
        <div className="section-story section pure-fg" style={{height: "400px"}}><PingAnimation /></div>

        <StorySection />

        <AboutSection />

        <RecommendationSection />

        <HowSection />

        <StatsSection />

        <ProductsSection />

        <TeamSection />

        <ResourcesSection />

        <ContactSection />

      </div>
    );
  }

}
