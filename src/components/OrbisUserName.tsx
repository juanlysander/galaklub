"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React, { useEffect, useState } from "react";
import OrbisOnboardModal from "./OrbisOnboardModal";
import { Skeleton } from "@nextui-org/react";

const OrbisUserName = ({ className }: { className?: string }) => {
  const { userData } = useOrbis();
  const [openOnBoardModal, setOpenOnBoardModal] = useState<boolean>(false);

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
    <p className={className ? className : `text-2xl font-semibold`}>
      {userData.profile.username}
    </p>
  ) : userData && !userData.profile ? (
    <p className={className ? className : `text-2xl font-semibold`}>User</p>
  ) : (
    <Skeleton className=" w-40 h-7 rounded-full" />
  );
};

export default OrbisUserName;
