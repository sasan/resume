import React, { Component } from "react";
import data from "./data";
import logo from "./logo.svg";
import "./App.css";
import Header from "./sections/Header";
import AboutSection from "./sections/AboutSections";
import SkillsSection from "./sections/SkillsSection";
import { bindCallback } from "rxjs";
import NavigationSection from "./sections/NavigationSection";
import SwitchTheme from "./components/SwitchTheme";
class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "App-night"
    };
    this.changeTheme = this.changeTheme.bind(this);
  }
  changeTheme() {
    this.setState({
      theme: this.state.theme === "App-night" ? "App-day" : "App-night"
    });
  }
  render() {
    return (
      <div className={this.state.theme}>
        <SwitchTheme icon={data.icons.switch} onClick={this.changeTheme} />
        <NavigationSection />
        <Header />
        <AboutSection />
        <SkillsSection />
      </div>
    );
  }
}

export default App;
