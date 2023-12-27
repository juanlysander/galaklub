"use client";
import ProfileImageIcon from "@/assets/ProfileImageIcon";
import { useOrbis } from "@/hooks/useOrbis";
import Image from "next/image";
import React from "react";

interface OrbisProfilePictureProps {
  size: number;
  quality?: number;
}
const OrbisProfilePicture: React.FC<OrbisProfilePictureProps> = ({ size, quality }) => {
  const { userData } = useOrbis();

  return userData && userData.profile && userData.profile.pfp ? (
    <Image
      alt="pfp"
      src={userData.profile.pfp}
      width={size}
      height={size}
      quality={quality ? quality : 70}
      className="rounded-full"
    />
  ) : userData && userData.profile && !userData.profile.pfp ? (
    <ProfileImageIcon size={size} fill="#00000025" />
  ) : (
    <ProfileImageIcon size={size} fill="#00000025" />
  );
};

export default OrbisProfilePicture;
