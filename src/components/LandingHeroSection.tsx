import Arrow from "@/assets/Arrow";
import Link from "next/link";
import React from "react";
import LandingHeroPhoto from "./LandingHeroPhoto";


const LandingHeroSection = () => {
  return (
    <div className="w-full h-max flex mb-[6px] gap-[6px]">
      <section className="bg-[#efefef] p-8 w-[calc(100%-428px)] h-[480px] justify-between items-start flex flex-col rounded-lg">
        <h2 className="text-6xl font-medium leading-[100px]">
          <span className="italic">the</span>{" "}
          <span className="text-[#74b9c2]">ULTIMATE</span>
          <br />
          <span className="text-8xl font-bold">
            FANS
            <br />
            ECOSYSTEM
          </span>
        </h2>
        <div className="w-full">
          <Link
            href={"dashboard"}
            className="flex items-center px-5 py-3 w-max border-[5px] border-black bg-[#ff99a0] gap-2 hover:shadow-xl hover:shadow-red-400 rounded-full transition-all"
          >
            <p className="mb-[-3px] font-bold gap-animation">GET STARTED NOW</p>
            <Arrow size={25} fill="#111111" />
          </Link>
        </div>
      </section>
      {/* PHOTO */}
      <LandingHeroPhoto/>
    </div>
  );
};

export default LandingHeroSection;
