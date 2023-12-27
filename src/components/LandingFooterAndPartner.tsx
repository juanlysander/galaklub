import LogoTypo from "@/assets/LogoTypo";
import Image from "next/image";
import React from "react";
import parallax from "@/../public/parralax.jpg";

const LandingFooterAndPartner = () => {
  return (
    <div className="w-full h-max flex gap-[6px]">
      <section className="bg-[#ff99a0] w-[420px] h-40 p-4 rounded-lg gap-1 flex flex-col items-center justify-center">
        <div className="mt-4">
          <LogoTypo size={220} accentFill="blue" fill="#111111" />
        </div>
        <p className="text-[#111111] text-base mb-4">the ultimate fans ecosystem</p>
        <p className="text-[#111111] text-sm">&copy; 2024 Gala Klub, All right reserve</p>
      </section>
      <section className="bg-[#efefef] w-[calc(100%-428px)] h-40 rounded-lg flex flex-col justify-start items-start gap-3 p-4">
        <h3 className="text-2xl font-bold">OUR PARTNER</h3>
        <div className="flex items-center gap-4 justify-center">
          <div className="rounded-lg w-48 h-16 relative overflow-hidden">
            <Image
              alt="Parallax Network Logo"
              src={parallax}
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
        </div>
      </section>
    </div>
  );
};

export default LandingFooterAndPartner;
