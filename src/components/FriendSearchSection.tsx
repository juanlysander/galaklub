"use client";
import SearchIcon from "@/assets/SearchIcon";
import { Input } from "@nextui-org/react";
import React from "react";

interface FriendSearchSectionProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}
const FriendSearchSection: React.FC<FriendSearchSectionProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="h-24 p-4 flex items-center justify-center rounded-t-lg bg-[#efefef]">
      <Input
        type="text"
        variant="flat"
        label="Search"
        value={searchQuery}
        onValueChange={setSearchQuery}
        classNames={{
          input: ["bg-transparent", "text-black", "text-base"],
          inputWrapper: [
            "bg-gray-300",
            "focus-within:!bg-gray-300",
            "hover:!bg-gray-300",
            "shadow-inner",
            "shadow-gray-400",
          ],
        }}
      />
      <div className="h-full w-16 place-items-center grid">
        <div className="w-12 h-12 ml-4 hover:bg-gray-300 rounded-full transition-all place-items-center grid">
          <SearchIcon size={30} fill="#000" />
        </div>
      </div>
    </div>
  );
};

export default FriendSearchSection;
