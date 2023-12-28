"use client";

import { fetchLockMetadata } from "@/utils/UnlockProtocolApi";
import { Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useAccount, useContractRead } from "wagmi";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { useEffect, useState } from "react";

interface BadgesProps {
  lockAddressString: string;
}

const Badges: React.FC<BadgesProps> = ({ lockAddressString }) => {
  const { address } = useAccount();
  const lockAddress = lockAddressString as `0x${string}`;
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const network = 80001;

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  // LOCK BALANCE
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

  // LOCK METADATA
  const {
    data: lockMetadata,
    isLoading: isLockMetadataLoading,
    error,
  } = useQuery({
    queryKey: ["lockMetadata", lockAddress],
    queryFn: () => fetchLockMetadata(network, lockAddressString),
    initialData: {},
  });

  if (isLockMetadataLoading || initialLoad || error) {
    return <Skeleton className="w-24 h-10 rounded-full" />;
  }

  return hasKey === BigInt(0) ? null : (
    <div
      style={{
        backgroundColor: lockMetadata.attributes?.find(
          (attr: any) => attr.trait_type === "color"
        )?.value,
      }}
      className="rounded-full py-2 px-5 text-sm"
    >
      {lockMetadata.attributes?.find((attr: any) => attr.trait_type === "name")?.value}
    </div>
  );
};

export default Badges;
