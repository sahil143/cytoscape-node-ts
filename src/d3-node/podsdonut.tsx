import React from "react";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import * as d3 from "d3";
import PodArc from "./PodArc";

type props = {
  x: number;
  y: number;
  innerRadius: number;
  outerRadius: number;
  padAngle: number;
  data: any;
};
type state = {
  x: number;
  y: number;
  innerRadius: number;
  outerRadius: number;
  padAngle: number;
  data: any;
};

export default class PodsDonut extends React.Component<props, state> {
  colorScale: any;
  constructor(props: any) {
    super(props);
    this.state = { ...props };
    this.colorScale = scale.scaleOrdinal(d3.schemeCategory10);
  }

  renderPod = (d: any, i: number) => {
    return (
      <PodArc
        key={i}
        innerRadius={this.state.innerRadius}
        outerRadius={this.state.outerRadius}
        padAngle={this.state.padAngle}
        value={d}
        fill={this.colorScale(i)}
      />
    );
  };

  render() {
    let pie = shape.pie();
    return (
      <g transform={`translate(${this.state.x}, ${this.state.y})`}>
        {pie(this.state.data).map(this.renderPod)}
      </g>
    );
  }
}
