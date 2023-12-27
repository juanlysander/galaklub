import React from "react";

interface DownVoteIconProps {
  size: number;
  fill: string;
}

const DownVoteIcon: React.FC<DownVoteIconProps> = ({ size, fill }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.59,13.48,5.43,11a1,1,0,0,1,1.36-.23L9,12.27v-8a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v8l2.21-1.48a1,1,0,0,1,1.36.23l1.84,2.46a1,1,0,0,1-.19,1.39l-7.61,5.92a1,1,0,0,1-1.22,0L3.78,14.87A1,1,0,0,1,3.59,13.48Z"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default DownVoteIcon;
