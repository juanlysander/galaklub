"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchLockMetadata } from "@/utils/UnlockProtocolApi";
import { Skeleton } from "@nextui-org/skeleton";

interface ExploreLinkCardProps {
  address: string;
}

const ExploreLinkCard: React.FC<ExploreLinkCardProps> = ({ address }) => {
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const network = 80001;

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const {
    data: lockMetadata,
    isLoading: isLockMetadataLoading,
    error,
  } = useQuery({
    queryKey: ["lockMetadata", address],
    queryFn: () => fetchLockMetadata(network, address),
    initialData: {},
  });

  if (!isLockMetadataLoading && !error && !initialLoad) {
    return (
      <Link
        href={`/dashboard/verified/${address}`}
        className="w-full h-max hover:bg-black/10 active:bg-white/5 gap-4 mb-5 rounded-2xl flex justify-start items-start transition-all"
      >
        <div className="w-56 h-56 rounded-2xl p-5 grid place-items-center relative overflow-hidden">
          <Image
            alt="Creator Photo"
            src={lockMetadata.image}
            quality={40}
            fill
            priority
            sizes="720px"
            style={{
              objectFit: "cover",
              filter: "brightness(100%)",
            }}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3 w-[calc(100%-252px)]">
          <div className="flex justify-between items-center gap-2">
            <h1 className=" text-lg font-semibold">{lockMetadata.name}</h1>
            <div className="flex items-center flex-wrap gap-2">
              {lockMetadata.attributes
                ?.find((attr: any) => attr.trait_type === "category")
                ?.value.split(",")
                .map((word: string, index: number) => (
                  <div key={index} className="rounded-full px-3 py-1 bg-[#111111]">
                    <p className="text-xs text-white">{word.trim()}</p>
                  </div>
                ))}
            </div>
          </div>
          <p className="text-xs">{lockMetadata.description}</p>
          <p className="text-sm font-semibold">Badges you&apos;ll earn:</p>
          <div className="overflow-hidden w-full overflow-x-scroll no-scrollbar">
            <div className="flex w-max items-center gap-2 overflow-hidden">
              {lockMetadata && lockMetadata.attributes && (
                <div
                  style={{
                    backgroundColor: lockMetadata.attributes?.find(
                      (attr: any) => attr.trait_type === "color"
                    )?.value,
                  }}
                  className="rounded-full py-1 px-4 text-sm"
                >
                  {
                    lockMetadata.attributes?.find(
                      (attr: any) => attr.trait_type === "name"
                    )?.value
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="w-full h-max gap-4 mb-5 rounded-2xl flex justify-start items-start">
      <Skeleton className="w-56 h-56 rounded-2xl p-5 grid place-items-center relative overflow-hidden" />

      <div className="flex flex-col gap-2 mt-3 w-[calc(100%-252px)]">
        <div className="flex justify-between items-center gap-2">
          <Skeleton className=" w-36 h-6 rounded-full" />
          <div className="flex items-center flex-wrap gap-2">
            <Skeleton className="rounded-full w-20 h-5" />
            <Skeleton className="rounded-full w-20 h-5" />
          </div>
        </div>
        <Skeleton className="rounded-full w-full h-3" />
        <Skeleton className="rounded-full w-2/3 h-3 mb-2" />
        <Skeleton className="rounded-full w-32 h-5 mb-1" />
        <Skeleton className="rounded-full w-28 h-7" />
      </div>
    </div>
  );
};

export default ExploreLinkCard;
