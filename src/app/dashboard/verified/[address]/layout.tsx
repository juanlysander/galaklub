import { creatorData } from "@/data/CreatorData";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const lockAddress = params.address;
  const creatorInfo = creatorData.find((data) => data.lockAddress === lockAddress);

  return {
    title: `${creatorInfo?.title}'s Exclusive Offers on GalaKlub - Discover Your Access`,
    description: `Dive into the world of GalaKlub where you can explore ${creatorInfo?.title}'s exclusive offers on GalaKlub - ${creatorInfo?.description}`,
  };
}

export default function VerifiedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
