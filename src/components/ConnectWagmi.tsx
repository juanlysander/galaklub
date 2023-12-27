"use client";
import { useAccount, useConnect } from "wagmi";
import { useEffect, useState } from "react";
import { useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useOrbis } from "@/hooks/useOrbis";
import OrbisProfilePicture from "./OrbisProfilePicture";

const ConnectWagmi = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { chain } = useNetwork();
  const { chains, isLoading: isSwitchNetworkLoading, switchNetwork } = useSwitchNetwork();
  const { disconnect } = useDisconnect();
  const [isLoading, setIsLoading] = useState(true);
  const { userData, connectOrbis, logoutOrbis, isUserConnected } = useOrbis();
  console.log("userData: ", userData);

  useEffect(() => {
    if (address || !isConnected) {
      setIsLoading(false);
    }
  }, [address, isConnected]);

  useEffect(() => {
    if (chain?.id !== 80001 && !isSwitchNetworkLoading) {
      switchNetwork?.(chains[0].id);
    }
  }, [chain, isSwitchNetworkLoading]);

  useEffect(() => {
    isUserConnected();
  }, [isConnected, address]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-4 h-10 cursor-pointer select-none">
        <button className="min-w-28 w-max rounded-xl border-2 border-black/70 px-3 py-1">
          <p className="text-sm text-center text-black/50">Loading</p>
        </button>
      </div>
    );
  }

  return isConnected ? (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="flex items-center gap-4 h-10 cursor-pointer select-none">
          <OrbisProfilePicture size={40} quality={20} />
          <button className=" min-w-28 w-max rounded-xl border-2 border-black/70 px-3 py-1">
            <p className="text-sm text-center mb-[-2px]">
              {userData && userData.profile && userData.profile.username
                ? userData.profile.username
                : address?.slice(0, 4) + ".." + address?.slice(-4)}
            </p>
          </button>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2" textValue="My Profile">
          <Link href="/dashboard/profile">
            <p className="text-sm">My Profile</p>
            <p className="font-semibold text-sm">
              {address?.slice(0, 4) + "..." + address?.slice(-4)}
            </p>
          </Link>
        </DropdownItem>
        <DropdownItem key="switch" textValue="switch account">
          Switch Account
        </DropdownItem>
        <DropdownItem
          key="logout"
          onClick={() => {
            disconnect();
            logoutOrbis();
          }}
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <div className="flex items-center gap-4 h-10 cursor-pointer select-none">
      <button
        onClick={() => {
          connect({ connector: connectors[0] });
          connectOrbis();
        }}
        className=" min-w-28 w-max rounded-xl border-2 border-black/70 px-3 py-1"
      >
        <p className="text-sm text-center">Sign In</p>
      </button>
    </div>
  );
};

export default ConnectWagmi;
