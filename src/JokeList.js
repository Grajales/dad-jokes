import React, { Component } from "react";
export default class JokeList extends Component {
  render() {
   let list = [];
   const jokeForList = this.props.jokestore
   
   console.log(this.props.index)
    for (let i=0; i<10;i++){
    list.push(jokeForList)
    }
    const id=this.props.index
    console.log(list)

    return(
      <div>
        <h1> More Jokes</h1>
        {list[id]}
 
      </div>
    )
  }
}