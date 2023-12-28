import React from "react";

interface PlusIconProps {
  size: number;
  fill: string;
  hideCircle?: boolean;
  strokeWidth?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ size, fill, strokeWidth, hideCircle }) => {
  return (
    <svg width={size} viewBox="-1 -1 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="25"
        cy="25"
        r="24"
        stroke={hideCircle ? "none" : fill}
        fill="none"
        strokeWidth={strokeWidth ? strokeWidth : "2"}
      />
      <line
        x1="25"
        y1="10"
        x2="25"
        y2="40"
        stroke={fill}
        strokeWidth={strokeWidth ? strokeWidth : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="25"
        x2="40"
        y2="25"
        stroke={fill}
        strokeWidth={strokeWidth ? strokeWidth : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
