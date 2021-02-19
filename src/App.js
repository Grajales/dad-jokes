import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import JokeList from "./JokeList.js";

class App extends Component {
  constructor(){
    super()
    this.state={
      joke:"",
      index:0
    }
  }
  componentDidMount = async()=>{
    let response = await axios.get('https://icanhazdadjoke.com/', {
    
    headers: {
          Accept: 'application/json'
      }
 
  })
  console.log(response.data)
  this.setState({
    joke:response.data.joke
    })
  }
  nextJoke = ()=>{
    this.setState({
      index: this.state.index + 1
      })
  }
  previousJoke = ()=>{
    this.setState({
      index: this.state.index - 1
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Dad Jokes</h1>
        </header>
        <p className="App-intro">
          {this.state.joke}
        </p>
        
        <button onClick={this.componentDidMount}> New Joke </button>
        <button onClick={this.nextJoke}>+</button>
        <button onClick={this.previousJoke}>-</button>
        <JokeList jokestore={this.state.joke} index={this.state.index}/>
      </div>
    );
  }
}

export default App;
