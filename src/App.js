import React, { Component } from "react";
import { hot } from "react-hot-loader";
//
// import "./app.css";
import Layout from "./components/Layout/Layout";
import OldWebsite from "./pages/index";

class App extends Component {
  render () {
    return (
      <Layout><OldWebsite /></Layout>
    )
  }
}

export default hot(module)(App)

