import { NextPage } from "next";
import React from "react";

const MySubscriptionPage: NextPage = () => {
  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      {/* CONTENT */}
      <div className="w-[calc(100%-294px)] h-full p-5 flex flex-col bg-[#efefef] rounded-lg">
        <h2 className="text-xl font-bold">My Subscription</h2>
        <hr className="border-gray-300 my-4" />

        {/* <MySubscriptionList lockAddress={tiaraAndiniLock}/> */}
      </div>

      {/* FILTERBAR */}
      <div className="h-full hidden md:block md:w-72 bg-[#efefef] rounded-lg"></div>
    </main>
  );
};

export default MySubscriptionPage;
