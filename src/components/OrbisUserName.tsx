"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React, { useEffect, useState } from "react";
import OrbisOnboardModal from "./OrbisOnboardModal";

const OrbisUserName = () => {
  const { userData } = useOrbis();
  const [openOnBoardModal, setOpenOnBoardModal] = useState(false);

  useEffect(() => {
    if (userData && !userData.profile) {
      setOpenOnBoardModal(true);
    } else {
      setOpenOnBoardModal(false);
    }
  }, [userData]);

  if (openOnBoardModal) {
    return <OrbisOnboardModal isOpen={openOnBoardModal} />;
  }

  return userData && userData.profile ? (
    <span>{userData.profile.username}</span>
  ) : userData && !userData.profile ? (
    <span>User</span>
  ) : (
    <></>
  );
};

export default OrbisUserName;
