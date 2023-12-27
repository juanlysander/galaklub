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

type Profile = {
  name: string;
  description: string;
};

const OrbisSetProfileModal: React.FC = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const { setUserProfile } = useOrbis();
  const [profile, setProfile] = useState<Profile>({ name: "", description: "" });

  const handleNameChange = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };

  const handleDescriptionChange = (description: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, description }));
  };

  return (
    <>
      <button className="" onClick={onOpen}>
        Edit Profile
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Profile</p>
                <p className="text-black/70 font-normal text-sm">
                  Customize your Profile
                </p>
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  variant="underlined"
                  label="Name"
                  value={profile.name}
                  onValueChange={handleNameChange}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Bio"
                  value={profile.description}
                  onValueChange={handleDescriptionChange}
                />
              </ModalBody>
              <ModalFooter>
                {profile.name !== "" || profile.description !== "" ? (
                  <></>
                ) : (
                  <button
                    onClick={async () => {
                      const status = await setUserProfile(profile);
                      if (status === 200) {
                        () => {
                          onClose();
                        };
                      }
                    }}
                    className="text-sm py-2 px-4 border-black/70 border-2 rounded-xl"
                  >
                    Save Change
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

export default OrbisSetProfileModal;
