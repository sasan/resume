import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import data from "../data";
import "./SkillsSection.css";

export default class SkillsSection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <h3>{data.section[1].title}</h3>
        <div>
          {data.section[1].items.map(skill => {
            return (
                <SkillCard skill={skill} />
            );
          })}
        </div>
      </Fullpage>
    );
  }
}
