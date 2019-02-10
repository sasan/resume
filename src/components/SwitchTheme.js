import React, { Component } from "react";
import "./SwitchTheme.css";

export default class SwitchTheme extends Component {
  constructor() {
    super();
  }
  render() {
    const { icon } = this.props;
    const { onClick } = this.props;
    return (
      <img
        src={icon}
        style={{
          maxWidth: "20px",
          float: "left"
        }}
        onClick={onClick}
      />
    );
  }
}
