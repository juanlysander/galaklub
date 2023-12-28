"use client";
import { useOrbis } from "@/hooks/useOrbis";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const OrbisDescription = () => {
  const { userData } = useOrbis();

  return userData && userData.profile ? (
    <p className="text-sm text-black/60 mt-1">{userData.profile.description}</p>
  ) : userData && !userData.profile ? (
    <p className="text-sm text-black/60 mt-1">your bio</p>
  ) : (
    <div className="w-full mt-3">
      <Skeleton className=" w-full h-4 rounded-full mb-1" />
      <Skeleton className=" w-2/3 h-4 rounded-full" />
    </div>
  );
};

export default OrbisDescription;
