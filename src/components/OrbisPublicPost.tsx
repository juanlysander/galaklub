"use client";
import { useOrbis } from "@/hooks/useOrbis";
import React, { useEffect, useState } from "react";
import OrbisProfilePicture from "./OrbisProfilePicture";
import OrbisUserName from "./OrbisUserName";
import { Skeleton } from "@nextui-org/skeleton";
import OrbisReactionPanel from "./OrbisReactionPanel";

const OrbisPublicPost = () => {
  const { getUserPublicPost } = useOrbis();
  const [userPosts, setUserPosts] = useState<any>(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const posts = await getUserPublicPost();
      setUserPosts(posts);
    };

    fetchUserPosts();
  }, [getUserPublicPost]);

  function formatUnixTime(unixTime: number) {
    const date = new Date(unixTime * 1000);
    const now = new Date();
    let options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };

    if (date.getFullYear() < now.getFullYear()) {
      options.year = "numeric";
    }

    return date.toLocaleDateString("en-US", options);
  }

  if (userPosts && userPosts.status === 200) {
    return (
      <div className="h-max">
        {userPosts.data.map((post: any, index: number) => (
          <div
            key={index}
            className="flex h-max w-full gap-4 px-4 pt-4 border-b-1 border-gray-400"
          >
            <div className="w-10 h-10">
              <OrbisProfilePicture size={40} quality={30} />
            </div>
            <div className="w-[calc(100%-200px)] flex flex-col items-start justify-start">
              <div className="flex items-center justify-start gap-2">
                <OrbisUserName className="font-semibold text-base" />
                <div className="w-1 h-1 rounded-full bg-gray-300" />
                <p className="text-sm text-gray-400">{formatUnixTime(post.timestamp)}</p>
              </div>
              <p className="text-sm">{post.content.body}</p>
              <OrbisReactionPanel post={post} />
            </div>
          </div>
        ))}
      </div>
    );
  } else if (userPosts && userPosts.status !== 200) {
    return <div>Error or different status received</div>;
  }

  return (
    <>
      <div className="flex h-max w-full gap-4 px-4 pt-4 border-b-1 border-gray-400">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="w-[calc(100%-200px)] flex flex-col items-start justify-start">
          <div className="flex items-center justify-start gap-2 mb-2">
            <Skeleton className="w-32 h-5 rounded-lg" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <Skeleton className="w-12 h-4 rounded-lg" />
          </div>
          <Skeleton className="w-64 h-4 rounded-lg mb-1" />
          <Skeleton className="w-96 h-4 rounded-lg" />
          <div className="flex items-center justify-start gap-10 w-full h-10">
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="flex h-max w-full gap-4 px-4 pt-4 border-b-1 border-gray-400">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="w-[calc(100%-200px)] flex flex-col items-start justify-start">
          <div className="flex items-center justify-start gap-2 mb-2">
            <Skeleton className="w-32 h-5 rounded-lg" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <Skeleton className="w-12 h-4 rounded-lg" />
          </div>
          <Skeleton className="w-64 h-4 rounded-lg mb-1" />
          <Skeleton className="w-96 h-4 rounded-lg" />
          <div className="flex items-center justify-start gap-10 w-full h-10">
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="flex h-max w-full gap-4 px-4 pt-4 border-b-1 border-gray-400">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="w-[calc(100%-200px)] flex flex-col items-start justify-start">
          <div className="flex items-center justify-start gap-2 mb-2">
            <Skeleton className="w-32 h-5 rounded-lg" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <Skeleton className="w-12 h-4 rounded-lg" />
          </div>
          <Skeleton className="w-64 h-4 rounded-lg mb-1" />
          <Skeleton className="w-96 h-4 rounded-lg" />
          <div className="flex items-center justify-start gap-10 w-full h-10">
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="flex h-max w-full gap-4 px-4 pt-4 border-b-1 border-gray-400">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="w-[calc(100%-200px)] flex flex-col items-start justify-start">
          <div className="flex items-center justify-start gap-2 mb-2">
            <Skeleton className="w-32 h-5 rounded-lg" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <Skeleton className="w-12 h-4 rounded-lg" />
          </div>
          <Skeleton className="w-64 h-4 rounded-lg mb-1" />
          <Skeleton className="w-96 h-4 rounded-lg" />
          <div className="flex items-center justify-start gap-10 w-full h-10">
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
            <Skeleton className="w-6 h-6 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrbisPublicPost;
