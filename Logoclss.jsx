import React from "react";
import { Component } from "react";

class Logoclss extends Component{
    render(){
        return(
            <>
            <h1>{this.props.string} 
            {this.props.boolean} 
            {this.props.number} 
            </h1>
            <img src={this.props.IMG1} alt="" />
            </>
        )
    }
}
export default Logoclss;