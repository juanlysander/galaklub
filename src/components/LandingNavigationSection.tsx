import LogoTypo from "@/assets/LogoTypo";
import Link from "next/link";
import React from "react";

const LandingNavigationSection = () => {
  return (
    <section className="bg-[#efefef] w-full h-20 px-6 rounded-lg mb-[6px] gap-8 flex items-center justify-start">
      <div className="mt-[-2px]">
        <LogoTypo size={120} accentFill="pink" fill="#111111" />
      </div>
      <div className="w-1 h-1 rounded-full bg-black" />
      <Link className="text-sm mt-1" href={"/dashboard"}>
        Get Started
      </Link>
      <Link className="text-sm mt-1" href={"/dashboard/explore"}>
        Explore
      </Link>
    </section>
  );
};

export default LandingNavigationSection;
