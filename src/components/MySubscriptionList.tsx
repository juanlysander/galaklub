"use client";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { useEffect, useState } from "react";
import { useContractRead, useAccount } from "wagmi";
import ConnectWagmi from "./ConnectWagmi";
import Logo from "@/assets/Logo";

interface MySubscriptionListProps {
  lockAddress: `0x${string}` | undefined;
}

const MySubscriptionList: React.FC<MySubscriptionListProps> = ({ lockAddress }) => {
  const { address, isConnected } = useAccount();
  const {
    data: hasKey,
    isLoading,
    isError,
  } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });
  const { data: expiredDate } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "expirationDuration",
    watch: true,
  });
  console.log("expiredDate: ", expiredDate);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  if (initialLoad || isLoading) {
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-1 items-center justify-center">
        <Logo fill="#111" accentFill="pink" size={40} />
        <p>Loading</p>
      </div>
    );
  }

  if (isError && isConnected) {
    return null;
  }

  if (isError && !isConnected) {
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-1 items-center justify-center">
        <p>Please Connect Your Wallet First.</p>
        <ConnectWagmi />
      </div>
    );
  }

  if (hasKey === BigInt(1)) {
    return <div></div>;
  } else {
    return null;
  }
};

export default MySubscriptionList;
