import React from "react";

interface MailIconProps {
  size: number;
  fill: string;
}

const MailIcon: React.FC<MailIconProps> = ({ size, fill }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" fill={fill}>
      <polyline
        fill="none"
        points="4 8.2 12 14.1 20 8.2"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></polyline>{" "}
      <rect
        fill="none"
        height="14"
        rx="2"
        ry="2"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="18"
        x="3"
        y="6.5"
      />
    </svg>
  );
};

export default MailIcon;
