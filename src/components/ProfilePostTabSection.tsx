import React from "react";
import OrbisCreatePostModal from "./OrbisCreatePostModal";

type ProfilePostTab = "public-post" | "private-post";

interface ProfilePostTabSectionProps {
  tab: ProfilePostTab;
  setTab: (value: ProfilePostTab) => void;
}
const ProfilePostTabSection: React.FC<ProfilePostTabSectionProps> = ({ tab, setTab }) => {
  return (
    <div className="h-12 border-b-1 border-gray-400 flex items-center justify-center rounded-t-lg overflow-hidden">
      <button
        onClick={() => setTab("public-post")}
        className={`${
          tab === "public-post" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/2 h-full grid place-items-center hover:brightness-95 active:brightness-105 transition-all`}
      >
        <p>Public Post</p>
      </button>
      <OrbisCreatePostModal />
      <button
        onClick={() => setTab("private-post")}
        className={`${
          tab === "private-post" ? `bg-[#9cdae2]` : `bg-[#efefef]`
        } w-1/2 h-full grid place-items-center hover:brightness-95 active:brightness-105 transition-all`}
      >
        <p>Private Post</p>
      </button>
    </div>
  );
};

export default ProfilePostTabSection;
