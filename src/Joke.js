import React, { Component } from "react";

export default class Joke extends Component {
  render() {
    return (
      <div className="Joke">
         {this.props.joke}
      </div>
    );
  }
}