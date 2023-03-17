import React, { Component } from 'react'

export default class Nonsyn extends Component {
    constructor(){
        super()
        this.state={user:""}
    }
    componentDidMount(){
        let ip=document.querySelector('input')
        ip.addEventListener('keypress',(e)=>{
            this.setState({user:e.target.value})
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <input type="text" />
      </div>
    )
  }
}
