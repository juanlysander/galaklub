import React from "react";

interface JewelIconProps {
  width: number;
}

const JewelIcon: React.FC<JewelIconProps> = ({ width }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width={width}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 8L8 20L10 21L14 21L16 20L19 8L12 3L5 8Z"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 21L15 9L12 3"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21L9 9L12 3"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8L9 9H15L19 8"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default JewelIcon;
