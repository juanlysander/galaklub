"use client";
import Logo from "@/assets/Logo";
import { fetchLockMetadata } from "@/utils/UnlockProtocolApi";
import { Skeleton } from "@nextui-org/skeleton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VerifiedPageHistoryLinkProps {
  lockAddressString: string;
  index: number;
}
const VerifiedPageHistoryLink: React.FC<VerifiedPageHistoryLinkProps> = ({
  lockAddressString,
  index,
}) => {
  const network = 80001;

  const {
    data: lockMetadata,
    isLoading: isLockMetadataLoading,
    error,
  } = useQuery({
    queryKey: ["lockMetadata", lockAddressString],
    queryFn: () => fetchLockMetadata(network, lockAddressString),
    initialData: {},
  });

  if (isLockMetadataLoading || error) {
    <div className="flex items-center justify-start gap-3 w-full h-full py-1 px-3">
      <Skeleton className="w-10 h-10 rounded-full" />
      <Skeleton className="w-24 h-5 rounded-full" />
    </div>;
  }

  return (
    <Link
      key={index}
      href={`/dashboard/verified/${lockAddressString}`}
      className="flex items-center justify-start gap-3 w-full h-full py-1 px-3"
    >
      <div className="w-10 h-10 rounded-full relative overflow-hidden grid place-items-center">
        {lockMetadata && lockMetadata.image ? (
          <Image
            alt="Creator Photo"
            src={lockMetadata.image}
            quality={10}
            priority
            fill
            sizes="720px"
            style={{
              objectFit: "cover",
              filter: "brightness(100%)",
            }}
          />
        ) : (
          <Skeleton className="w-10 h-10 rounded-full" />
        )}
      </div>
      <p>{lockMetadata.name}</p>
    </Link>
  );
};

export default VerifiedPageHistoryLink;
