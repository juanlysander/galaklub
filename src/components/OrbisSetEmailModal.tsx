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

const OrbisSetEmailModal: React.FC = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const { setUserEmail } = useOrbis();
  const [email, setEmail] = useState<string>("");
  const validateEmail = (email: any) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <>
      <button className="" onClick={onOpen}>
        Set Email
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Notification Email</p>
                <p className="text-black/70 font-normal text-sm">
                  Customize your Notification Email. <br />
                  Even GalaKlub can not see your email.
                </p>
              </ModalHeader>
              <ModalBody>
                <Input
                  type="email"
                  variant="underlined"
                  label="Email"
                  value={email}
                  onValueChange={setEmail}
                  isInvalid={isInvalid}
                  color={isInvalid ? "danger" : "default"}
                  errorMessage={isInvalid && "Please enter a valid email"}
                />
              </ModalBody>
              <ModalFooter>
                {email === "" ? (
                  <></>
                ) : (
                  <button
                    onClick={async () => {
                      const status = await setUserEmail(email);
                      if (status === 200) {
                        onClose();
                      }
                    }}
                    className="text-sm py-2 px-4 border-black/70 border-2 rounded-xl"
                  >
                    Set Notification Email
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

export default OrbisSetEmailModal;
