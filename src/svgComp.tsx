import React from 'react';
import './svgComp.css';
// import { pods } from './data';

type props ={ data: any }
type state = {selected: boolean}

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
  circleCenterX: number = this.viewBoxWidth/2;
  circleCentery: number = this.viewBoxWidth/2;

  firstStrokeDashoffset: number = 25;
  pods: {id: number, color: string}[];

  constructor(props: any) {
    super(props);
    this.pods = props.data.pods;
    this.state = {selected: false}
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
    return <circle key={pod.id} className="donut-segment" data-per={dataPer} cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle - (1.5/2)} fill="transparent" stroke={pod.color} strokeWidth={this.strokeWidth} strokeDasharray={`${dataPer} ${this.circumference - dataPer}`} strokeDashoffset={index === 0 ? this.firstStrokeDashoffset : strokeDashoffset}></circle>;
  }

  cheClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log("Che Link clicked")
  }

  render() {
  return (
    <svg width="300px" height="300px" viewBox={`0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`} className="donut" onClick={this.donutClicked}>
        <defs>
        <pattern id="image" x="0" y="0" height="100%" width="100%" viewBox={`0 0 ${this.radiusOfCircle*2 - this.strokeWidth} ${this.radiusOfCircle*2 - this.strokeWidth}`}>
        <image x="0"  y="0" width={this.radiusOfCircle*2 - this.strokeWidth} height={this.radiusOfCircle*2 - this.strokeWidth} href="https://svgshare.com/i/CTh.svg" />
        </pattern>
        </defs>
        <circle className="donut-hole" cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle - (1.5/2) - this.strokeWidth/2} fill="url(#image)">

        </circle>
        <circle className="donut-ring" cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle} fill="transparent" stroke="#fff" strokeWidth={this.strokeWidth + 1}></circle>
        { this.state.selected ? <circle className="selected" cx={this.circleCenterX} cy={this.circleCentery} r={this.radiusOfCircle + this.strokeWidth - .5} fill="transparent" stroke="#77BAFF" strokeWidth={.8}></circle>
          : ''
        }
        {
          this.pods.map(this.createDonut)
        }
        <defs>
            <filter id="dropshadow">
              <feDropShadow dx=".2" dy=".2" stdDeviation=".3"/>
            </filter>
        </defs>
        <g>
        <circle className="che-link" cx={this.diameterOfCircle} cy={this.diameterOfCircle} r={3.5} fill="#fff" filter="url(#dropshadow)" onClick={this.cheClick}><i className="fa fa-pen"></i></circle>
        </g>

        <text className="label" y={this.diameterOfCircle + this.labelHeight} x={this.radiusOfCircle - 2}> Label </text>

       {/*
          <circle className="donut-segment" data-per="20" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="yellow" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="25"></circle>
        <circle className="donut-segment" data-per="20" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="red" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="105"></circle>
        <circle className="donut-segment" data-per="20" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="green" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="85"></circle>
        <circle className="donut-segment" data-per="20" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="blue" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="65"></circle>
       <circle className="donut-segment" data-per="20" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="teal" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="45"></circle>
       */}
      </svg>
  );
  }
}

export default SvgComp