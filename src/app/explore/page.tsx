import Navbar from "@/components/Navbar";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Explore: NextPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-[53px] h-screen w-screen flex">
        {/* SIDEBAR */}
        <div className="h-full hidden md:block md:w-60 lg:w-80 bg-red-400"></div>

        {/* CONTENT */}
        <div className=" p-5 h-full w-full md:w-[calc(100%-192px)] lg:w-[calc(100%-320px)] bg-blue-400 flex gap-5">
          <Link href="/verified/sinka">
            <div className="w-72 h-48 bg-green-400 flex flex-col justify-center items-center">
              <h2>Sinka</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Explore;
