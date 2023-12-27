import React from "react";

interface ArrowProps {
  size: number;
  fill: string;
  strokeWidth?: string;
}

const Arrow: React.FC<ArrowProps> = ({ size, fill, strokeWidth }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke={fill}
        strokeWidth={strokeWidth ? strokeWidth : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
