"use client";
import Navbar from "@/components/Navbar";
import TokenGate from "@/components/TokenGate";
import { NextPage } from "next";
import React, { useState } from "react";

type PageTab = "purchase" | "feed" | "chat" | "livestream";

const SinkaJKT48Page: NextPage = () => {
  const [page, setPage] = useState<PageTab>("purchase");

  const getButtonClass = (tab: PageTab) => {
    return `text-white text-sm py-2 px-4 w-full rounded-lg text-left transition-all ${
      page === tab ? "bg-green-500" : "bg-green-400"
    }`;
  };

  return (
    <main>
      <Navbar />
      <div className="pt-[53px] h-screen w-screen flex">
        {/* SIDEBAR */}
        <div className="p-5 h-full hidden md:block md:w-60 lg:w-80 bg-red-400">
          <div className="flex flex-col gap-2 items-start">
            <button
              onClick={() => setPage("purchase")}
              className={getButtonClass("purchase")}
            >
              Purchase
            </button>
            <button onClick={() => setPage("feed")} className={getButtonClass("feed")}>
              Feed
            </button>
            <button onClick={() => setPage("chat")} className={getButtonClass("chat")}>
              Chat
            </button>
            <button
              onClick={() => setPage("livestream")}
              className={getButtonClass("livestream")}
            >
              Livestream
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className=" p-5 h-full w-full md:w-[calc(100%-192px)] lg:w-[calc(100%-320px)] bg-blue-400 flex gap-5">
          <TokenGate>
            <p>SEEEEEE</p>
          </TokenGate>
        </div>
      </div>
    </main>
  );
};

export default SinkaJKT48Page;
