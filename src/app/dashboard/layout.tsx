import type { Metadata } from "next";
import SideNavBar from "@/components/SideNavBar";

export const metadata: Metadata = {
  title: "GalaKlub Dashboard - Manage Your GalaKlub Experience",
  description: "Access your personalized GalaKlub dashboard to manage your exclusive artist interactions, track your badge achievements, and participate in community events. Our user-friendly dashboard puts control at your fingertips, allowing you to curate your ultimate fan journey with live updates and community features. Log in to stay connected and immerse yourself in the GalaKlub ecosystem!",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-screen flex justify-center">
      <div className="p-4 w-full max-w-screen-2xl h-full flex justify-center relative">
        <div className="w-screen h-screen max-w-screen-2xl absolute top-0 left-0 bg-[#111111] -z-50" />
        {/* w-72 */}
        <SideNavBar />

        {/* w-[calc(100%-288px)] */}
        {children}
      </div>
    </main>
  );
}
