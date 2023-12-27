import CloseIcon from "@/assets/CloseIcon";
import React from "react";

interface HomeNotificationLineProps {
  color?: string;
}
const HomeNotificationLine: React.FC<HomeNotificationLineProps> = ({ color }) => {
  return (
    <div
      className={`${
        color ? color : `bg-yellow-400`
      } w-full flex items-center justify-center gap-4 h-8 border-b-[1px] border-gray-300 absolute`}
    >
      <p className="text-black text-sm">Notification Line, Ads Line, Promotion Line</p>
      <button className="w-4 h-4 p-1 rounded-full bg-yellow-200 ">
        <CloseIcon size={8} fill="#000" />
      </button>
    </div>
  );
};

export default HomeNotificationLine;
