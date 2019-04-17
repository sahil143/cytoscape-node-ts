import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SvgComp from './svgComp';
import {data, pods} from './data';
import Cytoscape from './cytoscape';
import D3Donut from './d3-node/d3DonutComp';

type state = {pods?: any};
type props = {};
class App extends Component<props, state> {
  pods: any;
  constructor(props: any) {
    super(props);
    this.state = {
      pods: pods
    };
    this.pods = pods
  }

  podUp = () => {
    let add = {id: this.pods.length + 1, color: `#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`}
    this.pods.push(add);
    console.log('+', this.pods);
    this.setState({pods: this.pods});
  }

  podDown = () => {
    if(this.pods.length > 1) this.pods.pop();
    console.log("-", this.pods);
    this.setState({pods: this.pods});
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.podUp}>+</button><button onClick={this.podDown}>-</button> */}
        {/* <SvgComp pods={this.state.pods} /> */}
        {/* {data.map((d,) => <div key={d.data.id}><SvgComp {...d}/></div>)} */}
      {/* <Cytoscape /> */}
        <D3Donut data={[4,5,6,7,2]} />
      </div>
    );
  }
}

export default App;
