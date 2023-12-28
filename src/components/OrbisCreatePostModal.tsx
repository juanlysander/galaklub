"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Textarea } from "@nextui-org/react";
import PlusIcon from "@/assets/PlusIcon";
import { useOrbis } from "@/hooks/useOrbis";

type PostType = "Public" | "Private";

interface OrbisCreatePostModalProps {
  buttonMode?: boolean;
}

const OrbisCreatePostModal: React.FC<OrbisCreatePostModalProps> = ({ buttonMode }) => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [postType, setPostType] = useState<PostType>("Public");
  const [postBody, setPostBody] = useState<string>("");
  const { createPublicPost } = useOrbis();

  const togglePostType = () => {
    setPostType((currentType) => (currentType === "Public" ? "Private" : "Public"));
  };

  return (
    <>
      {buttonMode ? (
        <button
          className={`bg-[#efefef] flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
          onClick={onOpen}
        >
          <div className="w-8 h-8 grid place-items-center">
            <PlusIcon size={25} fill="#111111" strokeWidth="4" />
          </div>
          <p className="text-base font-normal mb-[-3px] select-none">Create Post</p>
        </button>
      ) : (
        <button
          className="flex items-center h-full justify-center border-l-1 border-r-1 border-gray-400 gap-1 w-16 hover:bg-gray-300 transition-all"
          onClick={onOpen}
        >
          <PlusIcon size={25} fill="#111111" strokeWidth="4" />
        </button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Create Post</p>
                <div className="flex items-center gap-1">
                  <p className="text-black/70 font-normal text-sm">Post Type:</p>
                  <button
                    onClick={togglePostType}
                    className="py-1 px-3 rounded-full bg-gray-300 text-sm font-normal hover:brightness-110 active:brightness-90 transition-all"
                  >
                    {postType}
                  </button>
                </div>
              </ModalHeader>
              <ModalBody>
                <Textarea
                  minRows={5}
                  type="text"
                  variant="bordered"
                  value={postBody}
                  onValueChange={setPostBody}
                  placeholder="Write your thought!"
                />
              </ModalBody>
              <ModalFooter>
                {postBody !== "" && (
                  <button
                    onClick={async () => {
                      const status = await createPublicPost(postBody);
                      if (status === 200) {
                        onClose();
                      }
                    }}
                    disabled={postBody === ""}
                    className="text-sm py-2 px-5 border-black border-4 rounded-2xl"
                  >
                    Create Post
                  </button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrbisCreatePostModal;
