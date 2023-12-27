"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React from "react";

const OrbisDescription = () => {
  const { userData } = useOrbis();
  

  return userData && userData.profile ? (
    <span>{userData.profile.description}</span>
  ) : userData && !userData.profile ? (
    <span>your bio</span>
  ) : (
    <></>
  );
};

export default OrbisDescription;
