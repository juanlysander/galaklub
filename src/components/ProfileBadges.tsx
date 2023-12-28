"use client";

import React from "react";
import { lockAddresses } from "@/data/LockAddresses";
import Badges from "./Badges";

const ProfileBadges = () => {
  return (
    <div className=" flex items-start justify-start flex-wrap">
      {lockAddresses.map((lockAddress, index) => (
        <div key={index}>
          <Badges lockAddressString={lockAddress} />
        </div>
      ))}
    </div>
  );
};

export default ProfileBadges;
