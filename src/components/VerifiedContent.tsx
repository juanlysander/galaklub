import React from "react";
import OrbisCreatePost from "./OrbisCreatePostModal";

type VerifiedTab = "feed" | "chat" | "live";

interface VerifiedContentProps {
  tab: VerifiedTab;
}

const VerifiedContent: React.FC<VerifiedContentProps> = ({ tab }) => {
  return tab === "feed" ? (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      <OrbisCreatePost />
    </div>
  ) : tab === "chat" ? (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      chat
    </div>
  ) : (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      live stream
    </div>
  );
};

export default VerifiedContent;
