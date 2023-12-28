"use client"
import FriendSearchSection from "@/components/FriendSearchSection";
import { NextPage } from "next";
import React, { useState } from "react";

const FriendPage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      {/* CONTENT */}
      <div className="w-[calc(100%-294px)] h-full flex flex-col gap-[6px] rounded-lg">
        <FriendSearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
      </div>

      {/* FILTERBAR */}
      <div className="h-full hidden md:block md:w-72 bg-[#efefef] rounded-lg"></div>
    </main>
  );
};

export default FriendPage;
