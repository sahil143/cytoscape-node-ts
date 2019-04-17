import React from 'react';
import * as d3 from 'd3';
import PodsDonut from './podsdonut';
import './d3donutComp.css';

type props = {
  data?: any
};
type state = {};


export default class D3Donut extends React.Component<props, state> {

  height: number = window.innerHeight;
  width: number = window.innerHeight;
  minViewportSize = Math.min(this.width, this.height);

  radius = (this.minViewportSize * .9) / 2;
    // Centers the pie chart
  x = this.width / 2;
  y = this.height / 2;

  constructor(props: props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="charts">
        <svg height="100%" width="100%">
          <PodsDonut
            x={this.x}
            y={this.y}
            innerRadius={this.radius * .80}
            outerRadius={this.radius}
            padAngle={.01}
            data={this.props.data}></PodsDonut>
        </svg>
      </div>
    );
  }
}