import OrbisDescription from "@/components/OrbisDescription";
import OrbisEmail from "@/components/OrbisEmail";
import OrbisFollowDataModal from "@/components/OrbisFollowDataModal";
import OrbisProfilePicture from "@/components/OrbisProfilePicture";
import OrbisUserName from "@/components/OrbisUserName";
import ProfileBadges from "@/components/ProfileBadges";
import ProfilePost from "@/components/ProfilePost";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <main className="h-full w-[calc(100%-294px)] gap-[6px] flex items-start justify-start overflow-hidden overflow-y-scroll">
      <div className="flex flex-col gap-[6px] w-[calc(100%-294px)] h-full">
        {/* PROFILE */}
        <div className="w-full h-52 p-4 flex justify-between bg-[#efefef] rounded-lg">
          {/* NAME, DESC, FOLOWER, EMAIL */}
          <div className="w-2/3 flex flex-col justify-between items-start">
            <div>
              <OrbisUserName />
              <OrbisDescription />
            </div>
            <div className="flex items-center gap-3">
              <OrbisFollowDataModal />
              <div className="w-1 h-1 bg-[#555555] rounded-full" />
              <OrbisEmail />
            </div>
          </div>

          {/* PFP */}
          <div className="w-1/3 flex flex-col justify-between items-end">
            <OrbisProfilePicture size={120} quality={60} />
          </div>
        </div>

        {/* POST */}
        <div className="w-full h-[calc(100%-214px)] flex flex-col bg-[#efefef] rounded-lg">
          <ProfilePost />
        </div>
      </div>

      {/* BADGE AND CREDENTIAL */}
      <div className="h-full hidden md:block md:w-72 bg-[#efefef] rounded-lg">
        <div className="flex flex-col gap-2 p-4">
          <p>Your Badges:</p>
          <ProfileBadges />
        </div>
      </div>
    </main>
  );
};

export default Profile;
