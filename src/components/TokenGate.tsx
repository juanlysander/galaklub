"use client";
import { PublicLockV13 } from "@unlock-protocol/contracts";
import { useEffect, useState } from "react";
import { useContractRead, useAccount } from "wagmi";
import { Paywall } from "@unlock-protocol/paywall";
import networks from "@unlock-protocol/networks";
import ConnectWagmi from "./ConnectWagmi";
import Logo from "@/assets/Logo";
import FriendIcon from "@/assets/FriendIcon";
import Image from "next/image";
import polygonImage from "@/../public/polygon.png";

interface TokenGateProps {
  children: React.ReactNode;
  lockAddress: `0x${string}` | undefined;
  lockAddressString: string;
}

const TokenGate: React.FC<TokenGateProps> = ({
  children,
  lockAddress,
  lockAddressString,
}) => {
  const { address, isConnected, connector } = useAccount();
  const [hash, setHash] = useState<string>("");
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const network = 80001;

  // LOCK CONFIG
  const paywallConfig = {
    locks: {
      [lockAddressString]: {
        network,
      },
    },
    skipRecipient: true,
    title: "Checkout Membership",
    pessimistic: true,
  };

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

  // LOCK NAME
  const { data: lockName } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "name",
    watch: true,
  }) as { data: string };

  // LOCK TOTAL SUPPLY
  const { data: totalSupply } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "maxNumberOfKeys",
    watch: true,
  });
  const totalLockSupply = Number(totalSupply);

  // LOCK ACTIVE MEMBER
  const { data: totalMember } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "numberOfOwners",
    watch: true,
  });
  const totalLockMember = Number(totalMember);

  // LOCK DURATION
  const { data: expiredDate } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "expirationDuration",
    watch: true,
  });
  const expiredDateInSeconds = Number(expiredDate);
  const secondsInADay = 60 * 60 * 24;
  const expiredDateInDays = expiredDateInSeconds / secondsInADay;

  // LOCK PRICE
  const { data: price } = useContractRead({
    address: lockAddress,
    abi: PublicLockV13.abi,
    functionName: "keyPrice",
    watch: true,
  });
  const keyPrice = Number(price) / 10 ** 18;

  // LOCK CHECKOUT
  const checkout = async () => {
    if (!connector) {
      console.error("Connector is not available");
      return;
    }

    try {
      const provider = await connector.getProvider();
      if (!provider) {
        throw new Error("Provider is not available");
      }

      const paywall = new Paywall(paywallConfig, networks, provider);
      const result = await paywall.loadCheckoutModal(paywallConfig);
      if (result.hash) {
        setHash(result.hash);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  if (initialLoad) {
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-1 items-center justify-center">
        <Logo fill="#111" accentFill="pink" size={40} />
        <p>Loading</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-1 items-center justify-center">
        <Logo fill="#111" accentFill="pink" size={40} />
        <p>Loading</p>
      </div>
    );
  }
  if (isError && isConnected) {
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-3 items-center justify-center">
        <Logo fill="#111" accentFill="pink" size={40} />
        <p>Error getting authorization, please refresh.</p>
      </div>
    );
  }

  if (isError && !isConnected) {
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-1 items-center justify-center">
        <p>Please Connect Your Wallet First.</p>
        <ConnectWagmi />
      </div>
    );
  }

  if (hasKey === BigInt(0)) {
    if (hash) {
      return (
        <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-3 items-center justify-center">
          <Logo fill="#111" accentFill="pink" size={40} />
          <p>Waiting for transaction to Confirm...</p>
        </div>
      );
    }
    return (
      <div className="w-full h-[calc(100%-54px)] bg-[#efefef] flex flex-col gap-4 items-center justify-center">
        <p className="text-lg font-semibold">Subscribe to {lockName}&apos;s channel.</p>

        {/* LOCK INFO */}
        <div className="w-[460px] h-24 flex justify-center items-center border-1 border-gray-400 rounded-lg">
          {/* LOCK MAX SUPPLY */}
          <div className="w-1/4 h-full border-r-1 border-gray-400">
            <p className="text-sm w-full h-1/2 border-b-1 border-gray-400 grid place-items-center">
              Max Member:
            </p>
            <div className="font-bold w-full h-1/2 flex items-center justify-center gap-1">
              <p>{totalLockSupply}</p>
              <div className="mb-1">
                <FriendIcon size={25} fill="#111111" />
              </div>
            </div>
          </div>
          {/* LOCK EXPIRED DATE */}
          <div className="w-1/4 h-full border-r-1 border-gray-400">
            <p className="text-sm w-full h-1/2 border-b-1 border-gray-400 grid place-items-center">
              Expired Date:
            </p>
            <p className="font-bold w-full h-1/2 grid place-items-center">
              {expiredDateInDays} Days
            </p>
          </div>
          {/* CREDIT CARD PAYMENT? */}
          <div className="w-1/4 h-full border-r-1 border-gray-400">
            <p className="text-sm w-full h-1/2 border-b-1 border-gray-400 grid place-items-center">
              Credit Card:
            </p>
            <p className="font-bold w-full h-1/2 grid place-items-center">None</p>
          </div>
          {/* LOCK PRICE */}
          <div className="w-1/4 h-full border-r-1 border-gray-400">
            <p className="text-sm w-full h-1/2 border-b-1 border-gray-400 grid place-items-center">
              Price:
            </p>
            <p className="font-bold w-full h-1/2 flex items-center justify-center gap-1">
              <span>{keyPrice}</span>
              <Image src={polygonImage} alt="polygon icon" width={20} quality={15} />
            </p>
          </div>
        </div>
        <button
          onClick={checkout}
          className="px-5 py-3 mt-4 w-max border-[5px] border-black bg-[#ff99a0] gap-2 hover:shadow-xl hover:shadow-red-400 rounded-full transition-all"
        >
          Buy Membership
        </button>
      </div>
    );
  }

  return children;
};

export default TokenGate;
