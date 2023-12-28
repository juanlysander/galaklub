"use client";
import React from "react";
import SearchIcon from "@/assets/SearchIcon";
import FriendIcon from "@/assets/FriendIcon";
import MailIcon from "@/assets/MailIcon";
import BellIcon from "@/assets/BellIcon";
import LockIcon from "@/assets/LockIcon";
import HomeIcon from "@/assets/HomeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OrbisCreatePostModal from "./OrbisCreatePostModal";
import VerifiedPageHistoryButton from "./VerifiedPageHistoryButton";

const SideNavBarLink = () => {
  const currentPath = usePathname();
  return (
    <div className="h-full flex flex-col justify-between items-start gap-1">
      <div className="flex flex-col items-start justify-start gap-1">
        <Link
          href="/dashboard"
          className={`${
            currentPath === "/dashboard"
              ? `bg-[#9cdae2] border-4 border-[#111111]`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <HomeIcon size={25} fill="#000000dd" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">Home</p>
        </Link>

        <Link
          href="/dashboard/explore"
          className={`${
            currentPath === "/dashboard/explore"
              ? `bg-[#9cdae2] border-4 border-[#111111]`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <SearchIcon size={30} fill="#000" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">Explore</p>
        </Link>

        <Link
          href="/dashboard/notification"
          className={`${
            currentPath === "/dashboard/notification"
              ? `bg-[#9cdae2] border-4 border-[#111111]`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <BellIcon size={25} fill="#000" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">Notification</p>
        </Link>

        <Link
          href="/dashboard/friend"
          className={`${
            currentPath === "/dashboard/friend"
              ? `bg-[#9cdae2] border-4 border-[#111111]`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <FriendIcon size={30} fill="#000" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">Friends</p>
        </Link>

        <Link
          href="/dashboard/message"
          className={`${
            currentPath === "/dashboard/message"
              ? `bg-[#9cdae2] border-4 border-[#111111]`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <MailIcon size={25} fill="#000" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">Messages</p>
        </Link>

        <Link
          href="/dashboard/my-subscription"
          className={`${
            currentPath === "/dashboard/my-subscription"
              ? `bg-[#9cdae2] border-4 border-[#111111]`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <LockIcon size={26} fill="#000" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">My Subscription</p>
        </Link>
      </div>

      <div className="flex flex-col items-start justify-start gap-1">
        <VerifiedPageHistoryButton/>
        <OrbisCreatePostModal buttonMode/>
      </div>  
    </div>
  );
};

export default SideNavBarLink;
