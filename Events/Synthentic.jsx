import React, { Component } from 'react'

export default class Synthentic extends Component {
    constructor(){
        super()
        this.state={username:""}
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input type="text" onChange={(e)=>{
            this.setState({username:e.target.value})
        }} />
      </div>
    )
  }
}
