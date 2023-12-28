import Image from "next/image";
import React from "react";
import polygonIcon from "@/../public/polygon.png";
import orbisIcon from "@/../public/ORBIS.png";
import huddleIcon from "@/../public/HUDDLE.png";
import unlockIcon from "@/../public/UNLOCK.png";

const LandingPoweredBy = () => {
  return (
    <div className="w-full h-max flex mb-[6px] gap-[6px]">
      <section className="bg-[#ff99a0] w-1/4 h-80 rounded-lg p-8 flex flex-col items-center justify-center gap-3">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image
            alt="Polygon Network Icon"
            src={polygonIcon}
            placeholder="blur"
            width={150}
            height={150}
            quality={40}
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <p className="mb-2">Enjoy Faster and lower fee making transaction in</p>
          <p className="text-xl font-bold">Polygon Network</p>
        </div>
      </section>
      <section className="bg-[#9cdae2] w-1/4 h-80 rounded-lg p-8 flex flex-col items-center justify-center gap-3">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image
            alt="huddle01 Icon"
            src={huddleIcon}
            placeholder="blur"
            width={150}
            height={150}
            quality={40}
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <p className="mb-2">Fast, HD and decentralized live streaming room with</p>
          <p className="text-xl font-bold">Huddle 01</p>
        </div>
      </section>
      <section className="bg-[#ff99a0] w-1/4 h-80 rounded-lg p-8 flex flex-col items-center justify-center gap-3">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image
            alt="Unlock Protocol Icon"
            src={unlockIcon}
            placeholder="blur"
            width={140}
            height={140}
            quality={40}
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <p className="mb-2">Secure exclusive room and transaction using</p>
          <p className="text-xl font-bold">Unlock Protocol</p>
        </div>
      </section>
      <section className="bg-[#9cdae2] w-1/4 h-80 rounded-lg p-8 flex flex-col items-center justify-center gap-3">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image
            alt="Orbis Protocol Icon"
            src={orbisIcon}
            placeholder="blur"
            height={150}
            width={120}
            quality={40}
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <p className="mb-2">Bring your Proof Of Fans across different platform using</p>
          <p className="text-xl font-bold">Orbis</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPoweredBy;
