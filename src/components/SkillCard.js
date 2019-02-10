import React, { Component } from "react";
import "./SkillCard.css";

export default class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
        <div className="skill">
          <img src={skill.content.image} />
          <p>{skill.content.title}</p>
        </div>
    );
  }
}
