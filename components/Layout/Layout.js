import React, { PropTypes } from 'react';
import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div>
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
