import React from 'react';
import * as d3 from 'd3';
import { DefaultArcObject } from 'd3';

type props = {
  outerRadius: number,
  innerRadius: number,
  padAngle: number,
  value?: any,
  fill: string
}
type state = {
  outerRadius: number,
  innerRadius:number,
  padAngle?: number,
  value?: any,
  fill: string
}

export default class PodArc extends React.Component<props, state> {

  constructor(props: props) {
    super(props);
    this.state = { ...props}
  }

  render() {
    let arc = d3.arc()
    .innerRadius(this.state.innerRadius)
    .outerRadius(this.state.outerRadius)
    .padAngle(this.state.padAngle) as any;

    return (
      <path d={arc(this.state.value) ? arc(this.state.value) : undefined} fill={this.state.fill} />
    );
  }

}