import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./MenuItem.css";

export default class MenuItem extends Component {
  render() {
    const { submenu } = this.props;
    return (
      <div>
        <Link activeClass="active" to={submenu.to}>
          <li>{submenu.content}</li>
        </Link>
      </div>
    );
  }
}
