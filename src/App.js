import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#333';
let defaultStyle = {
  color: defaultTextColor


};
class Aggregate extends Component{
  render(){

    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>Number text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={{defaultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist name</h3>
        <ul><li>song1</li><li>song2</li><li>song3</li></ul>
      </div>
    );
  }
}

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
