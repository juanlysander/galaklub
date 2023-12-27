import AnnouncementIcon from "@/assets/AnnouncementIcon";
import ChatIcon from "@/assets/ChatIcon";
import LiveStreamIcon from "@/assets/LiveStreamIcon";
import React from "react";

type VerifiedTab = "feed" | "chat" | "live";

interface VerifiedTabSectionProps {
  tab: VerifiedTab;
  setTab: (value: VerifiedTab) => void;
}
const VerifiedTabSection: React.FC<VerifiedTabSectionProps> = ({ tab, setTab }) => {
  return (
    <div className="h-12 flex items-center justify-center rounded-t-lg overflow-hidden">
      <button
        onClick={() => setTab("feed")}
        className={`${
          tab === "feed" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/3 h-full flex justify-center items-center gap-2 hover:brightness-95 active:brightness-105 transition-all`}
      >
        <AnnouncementIcon size={25} fill="#111111" strokeWidth="1.7" />
        <p>Feed</p>
      </button>
      <button
        onClick={() => setTab("chat")}
        className={`${
          tab === "chat" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/3 h-full flex justify-center items-center gap-2 hover:brightness-95 active:brightness-105 transition-all border-l-[1px] border-r-[1px] border-gray-300`}
      >
        <ChatIcon size={25} fill="#111111" strokeWidth="1.7" />
        <p>Chat Channel</p>
      </button>
      <button
        onClick={() => setTab("live")}
        className={`${
          tab === "live" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/3 h-full flex justify-center items-center gap-2 hover:brightness-95 active:brightness-105 transition-all`}
      >
        <LiveStreamIcon size={25} fill="#111111" />
        <p>Live Stream</p>
      </button>
    </div>
  );
};

export default VerifiedTabSection;
