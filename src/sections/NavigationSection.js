import React,{Component} from "react";
import data from "../data";
import './NavigationSection.css';
import { Link, Element } from "react-scroll";
import MenuItem from '../components/MenuItem';
export default class NavigationSection extends Component{
    constructor(){
        super()
    }
    render(){
        return(
        <div>
        <ul> 
            {data.navigation.map(submenu => {
                return (
                    <MenuItem submenu={submenu} />
                )
            })}
        </ul>
        </div>
        )
    }
}