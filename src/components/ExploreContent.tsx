import React from "react";
import ExploreLinkCard from "./ExploreLinkCard";
import { creatorData } from "@/data/CreatorData";

type ExploreTab = "preference" | "explore";

interface ExploreContentProps {
  tab: ExploreTab;
}

const ExploreContent: React.FC<ExploreContentProps> = ({ tab }) => {
  return tab === "preference" ? (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      {creatorData.map((card, index) => (
        <ExploreLinkCard
          key={index}
          address={card.lockAddress}
          src={card.src}
          title={card.title}
          description={card.description}
          badge={card.badge}
          category={card.category}
        />
      ))}
    </div>
  ) : (
    <div className="h-[calc(100%-54px)] bg-[#efefef] p-5 flex flex-col rounded-b-lg items-start justify-start overflow-hidden overflow-y-scroll no-scrollbar">
      {creatorData.map((card, index) => (
        <ExploreLinkCard
          key={index}
          address={card.lockAddress}
          src={card.src}
          title={card.title}
          description={card.description}
          badge={card.badge}
          category={card.category}
        />
      ))}
    </div>
  );
};

export default ExploreContent;
