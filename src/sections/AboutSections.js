import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data";
import { Link, Element } from "react-scroll";
import DownIcon from "../components/DownIcon";
import "./AboutSection.css";

export default class AboutSection extends Component {
  render() {
    return (
      <div>
      <Fullpage className="second">
        <h3>{data.section[0].title}</h3>
        <div className="para">
          {data.section[0].items.map(statement => {
            return <p>{statement.content}</p>;
          })}
        </div>
      </Fullpage>
      <Link activeClass="active" to="skills">
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("I'm working")}
          />
        </Link>
      <Element name="skills" className="element" />
      </div>
    );
  }
}
