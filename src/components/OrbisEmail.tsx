"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React from "react";
import OrbisSetEmailModal from "./OrbisSetEmailModal";
import CloseIcon from "@/assets/CloseIcon";
import CheckIcon from "@/assets/CheckIcon";

const OrbisEmail = () => {
  const { userData } = useOrbis();

  return userData && userData.encrypted_email ? (
    <div className="bg-green-200 px-3 py-1 rounded-full w-max text-xs flex items-center gap-1 ">
      <p className="mb-[-2px]">Email</p>
      <CheckIcon size={12} fill="#000000" strokeWidth="1.7" />
    </div>
  ) : userData && !userData.encrypted_email ? (
    <div className="bg-rose-200 px-3 py-1 rounded-full w-max text-xs flex items-center gap-1 ">
      <p className="mb-[-2px]">Email</p>
      <CloseIcon size={12} fill="#000000" />
    </div>
  ) : (
    <></>
  );
};

export default OrbisEmail;
