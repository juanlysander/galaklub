import React from "react";

interface CardIconProps {
  width: number;
}

const CardIcon: React.FC<CardIconProps> = ({ width }) => {
  return (
    <>
      <svg
        viewBox="0 0 76 76"
        xmlns="http://www.w3.org/2000/svg"
        baseProfile="full"
        xmlSpace="preserve"
        width={width}
        fill="#ffffff"
      >
        <path
          fill="#ffffff"
          strokeLinejoin="round"
          d="M 21.3,17L 46.7,17C 47.418,17 48,17.5821 48,18.3L 48,24.7C 48,25.418 47.418,26 46.7,26L 31.3,26C 30.0298,26 29,27.0298 29,28.3L 29,49.7C 29,50.418 28.418,51 27.7,51L 21.3,51C 20.582,51 20,50.418 20,49.7L 20,18.3C 20,17.582 20.582,17 21.3,17 Z M 33.3,29L 54.7,29C 55.418,29 56,29.582 56,30.3L 56,57.7C 56,58.418 55.418,59 54.7,59L 33.3,59C 32.582,59 32,58.418 32,57.7L 32,30.3C 32,29.582 32.582,29 33.3,29 Z "
        />
      </svg>
    </>
  );
};

export default CardIcon;
