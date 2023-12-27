"use client";

import React, { useState } from "react";
import TokenGate from "@/components/TokenGate";
import VerifiedTabSection from "@/components/VerifiedPageTabSection";
import VerifiedContent from "@/components/VerifiedContent";
import LockData from "@/components/LockData";

type VerifiedTab = "feed" | "chat" | "live";

const VerifiedCreatorPage = ({ params }: { params: any }) => {
  const [tab, setTab] = useState<VerifiedTab>("feed");
  const address = params.address;

  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      {/* CONTENT */}
      <div className="w-[calc(100%-294px)] h-full flex flex-col gap-[6px] rounded-lg">
        <VerifiedTabSection tab={tab} setTab={setTab} />
        <TokenGate lockAddress={address} lockAddressString={address}>
          <VerifiedContent tab={tab} />
        </TokenGate>
      </div>

      {/* FILTERBAR */}
      <div className="h-full py-4 px-6 hidden md:block md:w-72 bg-[#efefef] rounded-lg">
        <div className="flex flex-col items-start gap-1">
          <LockData lockAddress={address} />
        </div>
      </div>
    </main>
  );
};

export default VerifiedCreatorPage;
