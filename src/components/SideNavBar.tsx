import Link from "next/link";
import React from "react";
import NavbarMobileBurger from "./NavbarMobileBurger";
import ConnectWagmi from "./ConnectWagmi";
import LogoTypo from "@/assets/LogoTypo";
import SideNavBarLink from "./SideNavBarLink";
import OrbisCreatePostModal from "./OrbisCreatePostModal";

const SideNavBar = () => {
  return (
    <>
      <nav className="w-72 h-full rounded-lg flex flex-col items-start justify-start py-4 px-6 bg-[#efefef] mr-[6px]">
        {/* LAPTOP SIZE */}
        <Link href="/" className="h-12">
          <LogoTypo size={120} accentFill="blue" fill="#111111" />
        </Link>

        <div className="mb-8">
          <ConnectWagmi />
        </div>

        <SideNavBarLink/>

        {/* MOBILE SIZE */}
        <div className="md:hidden block">
          <NavbarMobileBurger />
        </div>
      </nav>
    </>
  );
};

export default SideNavBar;
