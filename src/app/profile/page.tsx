"use client";
import Navbar from "@/components/Navbar";
import OrbisLogin from "@/components/OrbisLogin";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Profile: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!localStorage.getItem("ceramic-session")) {
        router.push("/");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main>
      <Navbar />
      <div className="pt-[53px]">
        <div>Profile</div>
      </div>
    </main>
  );
};

export default Profile;
