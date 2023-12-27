import React from "react";

type ExploreTab = "preference" | "explore";

interface ExploreTabSectionProps {
  tab: ExploreTab;
  setTab: (value: ExploreTab) => void;
}
const ExploreTabSection: React.FC<ExploreTabSectionProps> = ({ tab, setTab }) => {
  return (
    <div className="h-12 flex items-center justify-center rounded-t-lg overflow-hidden">
      <button
        onClick={() => setTab("preference")}
        className={`${
          tab === "preference" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/2 h-full grid place-items-center hover:brightness-95 active:brightness-105 transition-all`}
      >
        <p>Your Preference</p>
      </button>
      <button
        onClick={() => setTab("explore")}
        className={`${
          tab === "explore" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/2 h-full grid place-items-center hover:brightness-95 active:brightness-105 transition-all`}
      >
        <p>Explore</p>
      </button>
    </div>
  );
};

export default ExploreTabSection;
