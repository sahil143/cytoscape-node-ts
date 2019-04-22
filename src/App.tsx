import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SvgComp from "./svgComp";
import { data, pods } from "./data";
import Cytoscape from "./cytoscape";
import D3Donut from "./d3-node/d3DonutComp";
import Donut from "./donut-animate/donut-animate";
import { remove } from "lodash-es";

type state = { pods?: any };
type props = {};

const podsStatus = [
  "Running",
  "Empty",
  "Not Ready",
  "Warning",
  "Failed",
  "Pulling",
  "Pending",
  "Succceeded",
  "Terminating",
  "Unknown"
];
class App extends Component<props, state> {
  pods: any;
  constructor(props: any) {
    super(props);
    this.state = {
      pods: pods
    };
    this.pods = pods;
  }

  podUp = () => {
    let add = {
      id: this.pods.length + 1,
      status: {
        phase: podsStatus[Math.floor(Math.random() * podsStatus.length)]
      },
      color: `#${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
      )}${Math.floor(Math.random() * 10)}`
    };
    this.pods.push(add);
    console.log("+", this.pods);
    this.setState({ pods: this.pods });
  };

  podDown = () => {
    let pods: any;
    console.log("########### - random down", Math.floor(Math.random() * this.pods.length));

    if (this.pods.length > 1) {
      // this.pods.pop();
      pods = remove(
        this.pods,
        (p: any, i: any) => i === Math.floor(Math.random() * this.pods.length)
      );
    }
    // remove
    console.log("-", pods);
    this.setState({ pods: pods });
  };

  render() {
    console.log("state.pods", this.state.pods);
    return (
      <div className="App">
        <button onClick={this.podUp}>+</button>
        <button onClick={this.podDown}>-</button>
        <SvgComp pods={this.state.pods} />
        {/* {data.map((d) => <div key={d.data.id}><SvgComp {...d}/></div>)} */}
        {/* <Cytoscape /> */}
        {/* <D3Donut data={[4,5,6,7,2]} /> */}
        {/* <Donut
    data={[
      { value: 50, color: '#ED696C' },
      { value: 10, color: '#f0e387' },
      { value: 30, color: '#d6d6d6' },
      { value: 70, color: '#43b4a1' }
    ]}
    speed={5}
    width={5}
  /> */}
      </div>
    );
  }
}

export default App;
