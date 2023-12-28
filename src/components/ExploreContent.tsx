import React from "react";
import ExploreLinkCard from "./ExploreLinkCard";
import { lockAddresses } from "@/data/LockAddresses";

type ExploreTab = "preference" | "explore";

interface ExploreContentProps {
  tab: ExploreTab;
}

const ExploreContent: React.FC<ExploreContentProps> = ({ tab }) => {
  return tab === "preference" ? (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      {lockAddresses.map((lockAddress, index) => (
        <ExploreLinkCard key={index} address={lockAddress} />
      ))}
    </div>
  ) : (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      {lockAddresses.map((lockAddress, index) => (
        <ExploreLinkCard key={index} address={lockAddress} />
      ))}
    </div>
  );
};

export default ExploreContent;
