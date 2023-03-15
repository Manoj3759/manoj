import React, { Component } from 'react'
import STYLE from "./counter.module.css"

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        if(this.state.count>0)
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className={STYLE.MAIN}>
      <h1>{this.state.count}</h1>
      <div>
      <button onClick={this.handleIncrement}>+</button>
      <button onClick={this.handleDecrement}>-</button>
      <button onClick={this.handleReset}>RESET</button>
      </div>
      </div>
    )
  }
}
