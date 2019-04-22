import React from 'react';
import './svgComp.css';
// import { pods } from './data';
import Donut, {DonutAnimated} from './donut-animate/donut-animate';
import DonutMotion from './react-motion/podsDonut';
import BaseNode from './BaseNode';
import Decorator from './decorator';

type props ={ data?: any, pods?: any }
type state = {pods?: any, selected: boolean}

const colors = ['#E91E63', '#2196F3', '#FF9800', '#4CAF50', '#673AB7'];

class SvgComp extends React.Component<props, state> {

  circumference: number = 100;
  viewBoxMinX: number = 0;
  viewBoxMinY: number = 0;
  strokeWidth: number = 3;
  labelHeight: number = 12;
  radiusOfCircle: number = this.circumference/ (2 * 3.14);
  diameterOfCircle: number = this.radiusOfCircle * 2
  viewBoxWidth: number = this.radiusOfCircle*2 + this.strokeWidth + 5;
  viewBoxHeight: number = this.radiusOfCircle*2 + this.strokeWidth + 5 + this.labelHeight;
  circleCenterX: number = /*this.viewBoxWidth/2 */ 0;
  circleCentery: number = /*this.viewBoxWidth/2 + 6 */ 0;

  firstStrokeDashoffset: number = 25;
  pods: {id: number, color: string}[];

  constructor(props: any) {
    super(props);
    this.pods = props.pods ? props.pods : props.data.pods;
    console.log('svg pods', this.pods);
    this.state = {pods: props.pods, selected: false}
  }


    getColors = (i: any) =>  {
      return colors[i];
    }



  donutClicked = (e: React.MouseEvent) => {
    e.persist()
    console.log('######### node Clicked');
    let selected = this.state.selected
    this.setState({selected: !selected})
  }

  createDonut = (pod: any, index: number) => {
    let dataPer = this.circumference/this.pods.length
    let strokeDashoffset = this.firstStrokeDashoffset;
    strokeDashoffset = this.circumference - (dataPer * index) + this.firstStrokeDashoffset;
    return <circle key={pod.id} onClick={() => this.podClick(pod)} className="donut-segment" data-per={dataPer} cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle - (1.5/2)} fill="transparent" stroke={pod.color} strokeWidth={this.strokeWidth} strokeDasharray={`${dataPer} ${this.circumference - dataPer}`} strokeDashoffset={index === 0 ? this.firstStrokeDashoffset : strokeDashoffset}></circle>;
  }

  podClick = (pod: any) => {
    console.log(pod.id)
  }

  cheClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log("Che Link clicked")
  }

  render() {

  return (
    <svg width="300px" height="300px" viewBox={`0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`} className="donut" onClick={this.donutClicked}>
      {/* <g transform={`translate(${this.viewBoxWidth / 2}, ${this.viewBoxHeight / 2})`}>
        <defs>
        <pattern id="image" x="0" y="0" height="100%" width="100%" viewBox={`0 0 ${this.radiusOfCircle*2 - this.strokeWidth} ${this.radiusOfCircle*2 - this.strokeWidth}`}>
        <image x="0"  y="0" width={this.radiusOfCircle*2 - this.strokeWidth} height={this.radiusOfCircle*2 - this.strokeWidth} href="https://svgshare.com/i/CTh.svg" />
        </pattern>
        </defs>
        <circle className="donut-hole" cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle - (1.5/2) - this.strokeWidth/2} fill="url(#image)">

        </circle>
        <circle className="donut-ring" cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle} fill="transparent" stroke="#fff" strokeWidth={this.strokeWidth + 1}></circle>
        </g>
        { this.state.selected && <circle className="selected" cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle + this.strokeWidth - .5} fill="transparent" stroke="#77BAFF" strokeWidth={.8}></circle>} */}
        <BaseNode height={this.viewBoxHeight} width={this.viewBoxWidth} selected={this.state.selected} radius={this.radiusOfCircle} strokeWidth={this.strokeWidth} />
        <DonutMotion
          radius={this.radiusOfCircle - (this.strokeWidth/4)}
          style={(d: any, i: any) => ({fill: this.getColors(i)})}
          height={this.viewBoxHeight}
          width={this.viewBoxWidth}
          data={this.state.pods}
          strokeWidth={this.strokeWidth}
        />
        <Decorator radius={this.radiusOfCircle} onClick={this.cheClick} />

        {/* <defs>
            <filter id="dropshadow">
              <feDropShadow dx=".2" dy=".2" stdDeviation=".3"/>
            </filter>
        </defs>
        <g>
        <circle className="che-link" cx={this.diameterOfCircle} cy={this.diameterOfCircle + 6} r={3.5} fill="#fff" filter="url(#dropshadow)" onClick={this.cheClick}></circle>
        </g> */}

        <text className="label" y={this.diameterOfCircle + this.labelHeight + 6} x={this.radiusOfCircle - 2}> Label </text>
      </svg>
  );
  }
}

export default SvgComp