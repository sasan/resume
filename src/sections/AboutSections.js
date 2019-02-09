import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data";
import { SocialIcon } from "react-social-icons";
import "./AboutSection.css";
export default class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second">
        <h3>{data.section[0].title}</h3>
      </Fullpage>
    );
  }
}
