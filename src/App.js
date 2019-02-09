import React, { Component } from "react";
import data from "./data";
import logo from "./logo.svg";
import "./App.css";
import Header from './sections/Header';
import AboutSection from './sections/AboutSections';
import SkillsSection from './sections/SkillsSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <Header />
        <AboutSection />
        <SkillsSection />
      </div>
    );
  }
}

export default App;
