import OrbisDescription from "@/components/OrbisDescription";
import OrbisEmail from "@/components/OrbisEmail";
import OrbisFollowDataModal from "@/components/OrbisFollowDataModal";
import OrbisProfilePicture from "@/components/OrbisProfilePicture";
import OrbisUserName from "@/components/OrbisUserName";
import ProfilePost from "@/components/ProfilePost";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      <div className="flex flex-col gap-[6px] w-[calc(100%-294px)] h-full">
        {/* PROFILE */}
        <div className="w-full h-52 p-5 flex flex-col bg-[#efefef] rounded-lg">
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-xl font-semibold">
                <OrbisUserName />
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-sm text-black/70">
                  <OrbisDescription />
                </p>
              </div>
            </div>
            <OrbisProfilePicture size={100} quality={60} />
          </div>
          <OrbisEmail />
          <OrbisFollowDataModal />
        </div>
        {/* POST */}
        <div className="w-full h-[calc(100%-214px)] flex flex-col bg-[#efefef] rounded-lg">
          <ProfilePost/>
        </div>
      </div>

      {/* FILTERBAR */}
      <div className="h-full hidden md:block md:w-72 bg-[#efefef] rounded-lg"></div>
    </main>
  );
};

export default Profile;
