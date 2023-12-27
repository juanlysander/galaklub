"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React from "react";

const OrbisFollowingCount = () => {
  const { userData } = useOrbis();

  return userData ? <span>{userData.count_following} Following</span> : <></>;
};

export default OrbisFollowingCount;
