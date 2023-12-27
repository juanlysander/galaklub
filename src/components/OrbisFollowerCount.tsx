"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React from "react";

const OrbisFollowerCount = () => {
  const { userData } = useOrbis();

  return userData ? (
    <span className="text-black/50 text-sm">{userData.count_followers} followers</span>
  ) : (
    <></>
  );
};

export default OrbisFollowerCount;
