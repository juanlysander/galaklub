import { NextPage } from "next";
import React from "react";

const FriendPage: NextPage = () => {
  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      {/* CONTENT */}
      <div className="w-[calc(100%-294px)] h-full p-5 flex flex-col bg-[#efefef] rounded-lg">
        Friend
      </div>

      {/* FILTERBAR */}
      <div className="h-full hidden md:block md:w-72 bg-[#efefef] rounded-lg"></div>
    </main>
  );
};

export default FriendPage;
