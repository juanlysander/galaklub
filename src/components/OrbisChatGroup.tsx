"use client";
import PlusIcon from "@/assets/PlusIcon";
import SendIcon from "@/assets/SendIcon";
import { Textarea } from "@nextui-org/react";
import { easeOut, motion } from "framer-motion";
import React, { useState } from "react";

const OrbisChatGroup = () => {
  const [message, setMessage] = useState<string>("");
  
  return (
    <div className="h-[calc(100%-54px)] flex flex-col gap-[6px] rounded-b-lg items-start justify-start overflow-hidden">
      <div className="w-full h-[calc(100%-62px)] bg-[#efefef]">tes</div>
      <div className="w-full h-max bg-[#efefef] flex items-end gap-2 p-2">
        <div className="h-10 w-10 hover:bg-gray-300 active:bg-white rounded-full grid place-items-center transition-all cursor-pointer">
          <PlusIcon size={25} fill="#111111" strokeWidth="5" hideCircle />
        </div>
        <Textarea
          className=" w-[calc(100%-96px)] bg-gray-300 rounded-full"
          size="sm"
          value={message}
          onValueChange={setMessage}
          classNames={{
            input: ["bg-transparent", "text-black", "text-base"],
            inputWrapper: [
              "bg-gray-300",
              "focus-within:!bg-gray-300",
              "hover:!bg-gray-300",
              "shadow-inner",
              "shadow-gray-400",
            ],
          }}
          maxRows={6}
          minRows={1}
        />
        <motion.div
          whileHover={{ rotate: -30 }}
          transition={{ duration: 0.05, ease: easeOut }}
          className="h-10 w-10 hover:bg-gray-300 active:bg-white rounded-full grid place-items-center transition-all cursor-pointer overflow-hidden"
        >
          <SendIcon size={25} fill="#111111" strokeWidth="1.7" />
        </motion.div>
      </div>
    </div>
  );
};

export default OrbisChatGroup;
