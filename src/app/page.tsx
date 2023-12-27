import { NextPage } from "next";
import LandingNavigationSection from "@/components/LandingNavigationSection";
import LandingHeroSection from "@/components/LandingHeroSection";
import LandingDataFeature from "@/components/LandingDataFeature";
import LandingFooterAndPartner from "@/components/LandingFooterAndPartner";
import LandingActionButton from "@/components/LandingActionButton";
import LandingPoweredBy from "@/components/LandingPoweredBy";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex justify-center w-screen ">
        <div className="p-4 w-screen max-w-screen-2xl relative">
          <div className="w-screen h-full max-w-screen-2xl absolute top-0 left-0 bg-[#111111] -z-50" />
          <LandingNavigationSection />

          <LandingHeroSection />

          <LandingDataFeature />

          <LandingActionButton />

          <LandingPoweredBy />

          <LandingFooterAndPartner />
        </div>
      </main>
    </>
  );
};

export default Home;
