import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import data from "../data";
import { SocialIcon } from "react-social-icons";
import { Link, Element} from 'react-scroll'

export default class eader extends Component {
  constructor(){
    super();
    this.state = {
      color:'white'
    }
    this.changeColor=this.changeColor.bind(this);
  }
  changeColor(){
    this.setState({
      color:this.state.color === 'white' ? 'yellow' : 'white'
    })
  }
  render() {
    return (
      <div>
        <Fullpage className="first">
          <div>
            <h1 className="title"
              style={{
                color:this.state.color
              }}
              onMouseOver={this.changeColor}
               onMouseLeave={this.changeColor}>{data.title}</h1>
          </div>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          {Object.keys(data.links).map(key => {
            return <SocialIcon url={data.links[key]} />;
          })}
        </Fullpage>
        <Link activeClass="active" 
          to="about">
          <DownIcon icon={data.icons.down}
            onClick={() => console.log("I'm working")} />
        </Link>
        <Element name="about" className="element">
        </Element>
      </div>
    );
  }
}
