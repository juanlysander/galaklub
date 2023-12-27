"use client";
import React, { useState } from "react";
import ProfilePostTabSection from "./ProfilePostTabSection";
import OrbisPublicPost from "./OrbisPublicPost";
import OrbisPrivatePost from "./OrbisPrivatePost";

type ProfilePostTab = "public-post" | "private-post";

const ProfilePost = () => {
  const [tab, setTab] = useState<ProfilePostTab>("public-post");
  return (
    <>
      <ProfilePostTabSection tab={tab} setTab={setTab} />
      {tab === "public-post" ? (
        <div className="h-[calc(100%-48px)] overflow-hidden overflow-y-scroll">
          <OrbisPublicPost />
        </div>
      ) : (
        <OrbisPrivatePost />
      )}
    </>
  );
};

export default ProfilePost;
