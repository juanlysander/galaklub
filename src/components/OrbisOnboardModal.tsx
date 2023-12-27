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
import { Input } from "@nextui-org/input";
import { useOrbis } from "@/hooks/useOrbis";

interface OrbisOnboardModalProps {
  isOpen: boolean;
}

const OrbisOnboardModal: React.FC<OrbisOnboardModalProps> = ({ isOpen }) => {
  const { onOpenChange } = useDisclosure();
  const { onBoardProfile } = useOrbis();
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Profile</p>
                <p className="text-black/70 font-normal text-sm">
                  Customize your GalaKlub profile.
                </p>
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  variant="underlined"
                  label="Name"
                  value={name}
                  onValueChange={setName}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Bio"
                  description="You can set your bio later."
                  value={bio}
                  onValueChange={setBio}
                />
              </ModalBody>
              <ModalFooter>
                {name === "" ? (
                  <></>
                ) : (
                  <button
                    onClick={async () => {
                      const updatedBio = bio === "" ? "-" : bio;
                      const status = await onBoardProfile(name, updatedBio);
                      console.log('status: ', status);
                    }}
                    className="text-sm py-2 px-4 border-black/70 border-2 rounded-xl"
                  >
                    Save Profile
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

export default OrbisOnboardModal;
