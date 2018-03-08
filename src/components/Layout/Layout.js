import React from "react";
import PropTypes from "prop-types";
import { Head } from "react-static";
import "./Layout.scss";
import Header from "../Header";
import Footer from "../Footer";

function Layout ({ children }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/g/pure@0.6.0,animatecss@3.5.1" />
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css" />
      </Head>
      <Header />
      <div className="Layout">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
