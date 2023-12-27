import React from "react";

interface FriendIconProps {
  size: number;
  fill: string;
}

const FriendIcon: React.FC<FriendIconProps> = ({ size, fill }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 100 100">
        <path
          fill={fill}
          d="M8.6,75v11H57.8V79H91.4V68A21.5,21.5,0,0,0,69.9,46.5H63.7A21.3,21.3,0,0,0,46,55.8a21.3,21.3,0,0,0-9.6-2.3H30.1A21.5,21.5,0,0,0,8.6,75ZM63.7,52.5h6.3A15.5,15.5,0,0,1,85.4,68v5H57.7a21.4,21.4,0,0,0-6.8-13.8A15.4,15.4,0,0,1,63.7,52.5ZM30.1,59.5h6.3A15.5,15.5,0,0,1,51.8,75v5H14.6V75A15.5,15.5,0,0,1,30.1,59.5Z"
        />
        <path
          fill={fill}
          d="M48.7,36.5A15.5,15.5,0,1,0,33.2,52,15.5,15.5,0,0,0,48.7,36.5Zm-24.9,0A9.5,9.5,0,1,1,33.2,46,9.5,9.5,0,0,1,23.7,36.5Z"
        />
        <path
          fill={fill}
          d="M82.3,29.5A15.5,15.5,0,1,0,66.8,45,15.5,15.5,0,0,0,82.3,29.5Zm-24.9,0A9.5,9.5,0,1,1,66.8,39,9.5,9.5,0,0,1,57.3,29.5Z"
        />
      </svg>
    </>
  );
};

export default FriendIcon;
