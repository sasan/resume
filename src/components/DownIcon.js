import React,{Component} from "react";

 export default class DownIcon extends Component{
     constructor(){
         super()
     }
     render(){
        const {icon} = this.props;
        const {onClick} = this.props;
        return(
        <div>
            <img src={icon} 
                style={{
                Transform:'translateY(-300px)',
                maxWidth:'30px'
                }}
                onClick={onClick}/>
        </div>
        )
    }
}