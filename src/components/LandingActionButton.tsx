import Arrow from "@/assets/Arrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "@/../public/BANNER.svg";

const LandingActionButton = () => {
  return (
    <section className="bg-[#efefef] w-full h-48 rounded-lg mb-[6px] grid place-items-center overflow-hidden relative">
      <Link
        href={"/dashboard/explore"}
        className="flex items-center px-7 py-3 bg-[#222222] hover:bg-[#000000] gap-2 hover:shadow-xl hover:shadow-gray-600 rounded-full transition-all z-50 relative"
      >
        <p className="mb-[-3px] text-xl font-bold text-white gap-animation ">
          FIND YOUR FAVOURITE ARTIST NOW
        </p>
        <Arrow size={30} fill="#efefef" strokeWidth="2.5" />
      </Link>

      <Image
        alt="Background Image"
        src={banner}
        fill
        sizes="720px"
        style={{
          objectFit: "cover",
          filter: "brightness(95%)",
        }}
      />
    </section>
  );
};

export default LandingActionButton;
