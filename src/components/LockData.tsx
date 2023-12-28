"use client";
import Logo from "@/assets/Logo";
import { fetchLockMetadata } from "@/utils/UnlockProtocolApi";
import { Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Badges from "./Badges";

interface LockDataProps {
  lockAddress: `0x${string}` | undefined;
  lockAddressString: string;
}

const LockData: React.FC<LockDataProps> = ({ lockAddress, lockAddressString }) => {
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const network = 80001;

  const {
    data: lockMetadata,
    isLoading: isLockMetadataLoading,
    error,
  } = useQuery({
    queryKey: ["lockMetadata", lockAddress],
    queryFn: () => fetchLockMetadata(network, lockAddressString),
    initialData: {},
  });
  console.log("lockMetadata: ", lockMetadata);

  if (isLockMetadataLoading || initialLoad) {
    return (
      <>
        <Skeleton className="w-full h-auto aspect-[1/1] rounded-2xl " />

        <Skeleton className="w-32 h-7 mt-4 rounded-full" />
        <Skeleton className="w-52 h-4 mt-2 rounded-full" />
        <Skeleton className="w-60 h-4 mt-1 rounded-full" />
        <Skeleton className="w-48 h-4 mt-1 rounded-full" />
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="w-full h-auto aspect-[1/1] rounded-2xl border-4 border-black grid place-items-center">
          Error Fetching Data
        </div>
      </>
    );
  }
  return (
    <>
      {lockMetadata && lockMetadata.image ? (
        <div className="w-full h-auto aspect-[1/1] rounded-2xl p-5 border-[1px] border-black/30 grid place-items-center relative overflow-hidden">
          <Image
            alt="Creator Photo"
            src={lockMetadata.image}
            quality={50}
            priority
            fill
            sizes="720px"
            style={{
              objectFit: "cover",
              filter: "brightness(100%)",
            }}
          />
        </div>
      ) : (
        <div className="w-full h-auto aspect-[1/1] rounded-2xl border-4 border-black flex flex-col gap-2 items-center justify-center">
          <Logo fill="#111" accentFill="pink" size={40} />
          <p>Image not available</p>
        </div>
      )}
      <h1 className="text-3xl font-semibold mt-4">{lockMetadata?.name}</h1>
      <p className="text-sm">{lockMetadata?.description}</p>
      <div className="flex flex-col gap-2 mt-3">
        <p>Badge:</p>
        {lockMetadata && lockMetadata.attributes && (
          <div
            style={{
              backgroundColor: lockMetadata.attributes?.find(
                (attr: any) => attr.trait_type === "color"
              )?.value,
            }}
            className="rounded-full py-2 px-5 text-sm"
          >
            {
              lockMetadata.attributes?.find((attr: any) => attr.trait_type === "name")
                ?.value
            }
          </div>
        )}
      </div>
    </>
  );
};

export default LockData;
