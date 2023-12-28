"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import OrbisProfilePicture from "./OrbisProfilePicture";
import OrbisFollowerCount from "./OrbisFollowerCount";
import OrbisFollowButton from "./OrbisFollowButton";
import { Skeleton } from "@nextui-org/react";

type FollowTab = "follower" | "following";

const OrbisFollowDataModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [tab, setTab] = useState<FollowTab>("follower");
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <>
      {initialLoad ? (
        <Skeleton className="w-32 h-4 rounded-full" />
      ) : (
        <button className="w-max h-max flex items-center gap-1" onClick={onOpen}>
          <div className="relative w-10">
            <div className="w-5 h-5 absolute -translate-y-1/2">
              <OrbisProfilePicture size={20} quality={10} />
            </div>
            <div className="w-6 h-6 rounded-full absolute -translate-y-1/2 left-[14px] border-2 border-[#efefef]">
              <OrbisProfilePicture size={24} quality={10} />
            </div>
          </div>
          <OrbisFollowerCount />
        </button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b-[1px] border-gray-300">
                <div className="h-12 flex items-center justify-center">
                  <button
                    onClick={() => setTab("follower")}
                    className={`w-1/2 h-full grid place-items-center hover:bg-gray-200 active:bg-gray-300 transition-all`}
                  >
                    <p
                      className={`${
                        tab === "follower" ? "border-2 border-gray-500" : ""
                      } rounded-2xl px-4 py-1 text-sm`}
                    >
                      follower
                    </p>
                  </button>
                  <button
                    onClick={() => setTab("following")}
                    className={`w-1/2 h-full grid place-items-center hover:bg-gray-200 active:bg-gray-300 transition-all`}
                  >
                    <p
                      className={`${
                        tab === "following" ? "border-2 border-gray-500" : ""
                      } rounded-2xl px-4 py-1 text-sm`}
                    >
                      following
                    </p>
                  </button>
                </div>
              </ModalHeader>
              <ModalBody className="h-[400px] overflow-hidden overflow-y-scroll pb-5">
                <div>
                  <div className="p-3 flex items-center justify-between border-b-[1px] border-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-10 h-10 bg-red-300"></div>
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm font-bold">Name</p>
                        <p className="text-sm font-bold">
                          <OrbisFollowerCount />
                        </p>
                      </div>
                    </div>
                    <OrbisFollowButton />
                  </div>
                  <div className="p-3 flex items-center justify-between border-b-[1px] border-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-10 h-10 bg-red-300"></div>
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm font-bold">Name</p>
                        <p className="text-sm font-bold">
                          <OrbisFollowerCount />
                        </p>
                      </div>
                    </div>
                    <OrbisFollowButton />
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrbisFollowDataModal;
