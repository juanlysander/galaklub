"use client";
import React, { useEffect, useState } from "react";
import LikeIcon from "@/assets/LikeIcon";
import HahaIcon from "@/assets/HahaIcon";
import DownVoteIcon from "@/assets/DownVoteIcon";
import { useOrbis } from "@/hooks/useOrbis";

const OrbisReactionPanel = ({ post }: { post: any }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [hahaed, setHahaed] = useState<boolean>(false);
  const [downvoted, setDownvoted] = useState<boolean>(false);

  const { likePost, hahaPost, downVotePost } = useOrbis();

  return (
    <div className="flex items-center justify-start gap-10 w-full h-10">
      <button
        onClick={() => {
          setLiked(true);
          likePost(post.stream_id);
        }}
        className="hover:mb-1 transition-all"
      >
        <LikeIcon size={22} fill={liked ? "#ff99a0" : "#bbbbbb"} strokeWidth="1.7" />
      </button>
      <button
        onClick={() => {
          setHahaed(true);
          hahaPost(post.stream_id);
        }}
        className="hover:mb-1 transition-all"
      >
        <HahaIcon size={23} fill={hahaed ? "#ff99a0" : "#bbbbbb"} />
      </button>
      <button
        onClick={() => {
          setDownvoted(true);
          downVotePost(post.stream_id);
        }}
        className="hover:mb-1 transition-all"
      >
        <DownVoteIcon size={22} fill={downvoted ? "#ff99a0" : "#bbbbbb"} />
      </button>
    </div>
  );
};

export default OrbisReactionPanel;
