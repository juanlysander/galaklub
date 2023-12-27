import React from "react";

const LandingDataFeature = () => {
  return (
    <div className="w-full h-max flex mb-[6px] gap-[6px]">
      <section className="bg-[#9cdae2] w-[420px] h-96 rounded-lg p-8">
        <h3 className="text-5xl font-bold">EXCLUSIVE</h3>
        <p className="text-xl">ORBIS PROFILE IMAGE</p>
      </section>
      <section className="bg-[#ff99a0] w-[calc(100%-428px)] h-96 rounded-lg p-8">
        <h3 className="text-5xl font-bold mb-10">ENGAGE!</h3>
        <div className="w-full flex items-center gap-3">
          <div className="w-1/3 h-44 bg-[#efefef] rounded-lg p-3 flex flex-col gap-1 justify-start items-start">
            <h3 className="text-lg font-bold">LIMITED!</h3>
            <p>
              Buy the limited exclusive access to your favourite artist! It is really
              limited!
            </p>
          </div>
          <div className="w-1/3 h-44 bg-[#efefef] rounded-lg p-3 flex flex-col gap-1 justify-start items-start">
            <h3 className="text-lg font-bold">BADGES!</h3>
            <p>
              Bring your exclusive badge given by your favourite artist, even outside
              GalaKlub!
            </p>
          </div>
          <div className="w-1/3 h-44 bg-[#efefef] rounded-lg p-3 flex flex-col gap-1 justify-start items-start">
            <h3 className="text-lg font-bold">PARTICIPATE!</h3>
            <p>
              Join various exclusive community activity created by your favourite artist
              through{" "}
              <span className="font-bold">Livestream, Chat group, Feed board</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingDataFeature;
