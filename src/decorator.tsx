import React from "react";

interface DecoratorTypes {
  radius: number;
  onClick: any;
}

const Decorator: React.SFC<DecoratorTypes> = ({radius, onClick}) => {
  return (
    <g className="decorator">
      <defs>
        <filter id="dropshadow">
          <feDropShadow dx=".2" dy=".2" stdDeviation=".3" />
        </filter>
      </defs>
      <g>
        <circle
          className="che-link"
          cx={radius * 2}
          cy={radius * 2 + 6}
          r={3.5}
          fill="#fff"
          filter="url(#dropshadow)"
          onClick={onClick}
        />
        {/* <text fontSize="7px" id="chk" x={radius * 2} y={radius * 2 + 6}>&#x2714;</text> */}
      </g>
    </g>
  );
};

export default Decorator;
