import Link from "next/link";
import React from "react";
import OrbisLogin from "./OrbisLogin";
import NavbarMobileBurger from "./NavbarMobileBurger";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-screen grid place-items-center">
        <div className="w-screen max-w-screen-2xl px-5 py-3">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl">MBF</h1>
            </Link>

            <div className="md:hidden block">
              <NavbarMobileBurger />
            </div>
            <div className="md:flex hidden items-center gap-4">
              <Link href="/explore" className="text-sm">
                Explore
              </Link>
              <OrbisLogin />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
