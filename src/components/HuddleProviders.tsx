"use client"
import { HuddleProvider, HuddleClient } from "@huddle01/react";

const HuddleProviders = ({ children }: { children: React.ReactNode }) => {
  const huddleClient = new HuddleClient({
    projectId: process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID!,
    options: {
      activeSpeakers: {
        size: 8,
      },
    },
  });
  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
};

export default HuddleProviders;
