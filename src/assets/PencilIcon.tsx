import React from "react";

interface PencilIconProps {
  size: number;
  fill: string;
  strokeWidth?: string;
}

const PencilIcon: React.FC<PencilIconProps> = ({ size, fill, strokeWidth }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.65661 17L6.99975 17L6.99975 14M6.10235 14.8974L17.4107 3.58902C18.1918 2.80797 19.4581 2.80797 20.2392 3.58902C21.0202 4.37007 21.0202 5.6364 20.2392 6.41745L8.764 17.8926C8.22794 18.4287 7.95992 18.6967 7.6632 18.9271C7.39965 19.1318 7.11947 19.3142 6.8256 19.4723C6.49475 19.6503 6.14115 19.7868 5.43395 20.0599L3 20.9998L3.78312 18.6501C4.05039 17.8483 4.18403 17.4473 4.3699 17.0729C4.53497 16.7404 4.73054 16.424 4.95409 16.1276C5.20582 15.7939 5.50466 15.4951 6.10235 14.8974Z"
        stroke={fill}
        strokeWidth={strokeWidth ? strokeWidth : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
