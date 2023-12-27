import React from "react";

interface ArrowSimpleProps {
  width: number;
}

const ArrowSimple: React.FC<ArrowSimpleProps> = ({ width }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width={width}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default ArrowSimple;
