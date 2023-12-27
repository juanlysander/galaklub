"use client";
import ExploreContent from "@/components/ExploreContent";
import ExploreTabSection from "@/components/ExploreTabSection";
import { NextPage } from "next";
import React, { useState } from "react";

type ExploreTab = "preference" | "explore";

const Explore: NextPage = () => {
  const [tab, setTab] = useState<ExploreTab>("preference");

  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      {/* CONTENT */}
      <div className="w-[calc(100%-294px)] h-full flex flex-col gap-[6px] rounded-lg">
        <ExploreTabSection tab={tab} setTab={setTab} />
        <ExploreContent tab={tab} />
      </div>

      {/* FILTERBAR */}
      <div className="h-full hidden md:block md:w-72 bg-[#efefef] rounded-lg">
        
      </div>
    </main>
  );
};

export default Explore;
