"use client";
import { creatorData } from "@/data/CreatorData";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useAccount, useContractRead } from "wagmi";

interface LockDataProps {
  lockAddress: `0x${string}` | undefined;
}

const LockData: React.FC<LockDataProps> = ({ lockAddress }) => {
  const { address, isConnected, connector } = useAccount();
  const creatorInfo = creatorData.find((data) => data.lockAddress === lockAddress);
  const creatorImage = creatorInfo?.src as StaticImageData;

  // LOCK NAME
  const { data: lockName } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "name",
    watch: true,
  }) as { data: string };

  return (
    <>
      <div className="w-full h-auto aspect-[1/1] rounded-2xl p-5 border-[1px] border-black/30 grid place-items-center relative overflow-hidden">
        <Image
          alt="Creator Photo"
          src={creatorImage}
          placeholder="blur"
          quality={50}
          fill
          sizes="720px"
          style={{
            objectFit: "cover",
            filter: "brightness(100%)",
          }}
        />
      </div>
      <h1 className="text-3xl font-semibold mt-4">{lockName}</h1>
      <p className="text-sm">{creatorInfo?.description}</p>
    </>
  );
};

export default LockData;
