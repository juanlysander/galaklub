import React from "react";

interface CheckIconProps {
  size: number;
  fill: string;
  strokeWidth?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({ size, fill, strokeWidth }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke={fill}
          strokeWidth={strokeWidth ? strokeWidth : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default CheckIcon;
