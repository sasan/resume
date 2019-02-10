import React, { Component } from "react";

export default class DownIcon extends Component {
  constructor() {
    super();
  }
  render() {
    const { icon } = this.props;
    return <img src={icon} class="downIcon" />;
  }
}
