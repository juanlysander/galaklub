import HomeNewsAutoSlide from "@/components/HomeNewsAutoSlide";
import HomeNotificationLine from "@/components/HomeNotificationLine";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <main className="h-full w-[calc(100%-294px)] bg-[#efefef] rounded-lg overflow-hidden overflow-y-scroll relative">
      <HomeNotificationLine />
      <HomeNewsAutoSlide />
    </main>
  );
};

export default Dashboard;
