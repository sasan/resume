import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import './Header.css'
import data from "../data";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";

export default class eader extends Component {
  constructor() {
    super();
  }
  changeColor() {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white"
    });
  }
  render() {
    return (
      <div class="header">
        <Fullpage className="first">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          {Object.keys(data.links).map(key => {
            return <SocialIcon url={data.links[key]} className="social" />;
          })}
        </Fullpage>
        <Link activeClass="active" to="about">
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}
