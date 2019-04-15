import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SvgComp from './svgComp';
import {data} from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        {data.map((d,) => <div key={d.data.id}><SvgComp {...d}/></div>)}
      </div>
    );
  }
}

export default App;
