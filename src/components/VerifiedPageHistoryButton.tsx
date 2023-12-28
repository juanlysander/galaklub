"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import VerifiedPageHistoryLink from "./VerifiedPageHistoryLink";
import StarsIcon from "@/assets/StarsIcon";

const VerifiedPageHistoryButton = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentPath = usePathname();

  useEffect(() => {
    const savedHistory = localStorage.getItem("page-history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (currentPath.startsWith("/dashboard/verified/")) {
      setHistory((prevHistory) => {
        const newHistory = prevHistory.filter((path) => path !== currentPath);
        newHistory.unshift(currentPath);
        const updatedHistory = newHistory.slice(0, 8);
        localStorage.setItem("page-history", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
    }
  }, [currentPath]);

  return (
    <Dropdown
      placement="top-start"
      onOpenChange={() => {
        setIsOpen(!isOpen);
      }}
    >
      <DropdownTrigger>
        <button
          className={`${
            isOpen || currentPath.startsWith("/dashboard/verified/")
              ? `bg-[#ff99a0] border-4 border-black`
              : `bg-[#efefef]`
          } flex items-center gap-2 mb-2 pl-3 pr-6 py-1 rounded-full hover:brightness-95 transition-all`}
        >
          <div className="w-8 h-8 grid place-items-center">
            <StarsIcon fill="#111" size={25} />
          </div>
          <p className="text-base font-normal mb-[-3px]">
            {currentPath.startsWith("/dashboard/verified/")
              ? "Creator"
              : "Recent Creator"}
          </p>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {history.map((url, index) => (
          <DropdownItem key={index} className="p-0 mt-1" textValue={url.slice(20)}>
            <VerifiedPageHistoryLink lockAddressString={url.slice(20)} index={index} />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default VerifiedPageHistoryButton;
