"use client";
import { createContext, useState } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";

const orbis = new Orbis({});
const OrbisContext = createContext(orbis);

const OrbisProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<any>();

  type Profile = {
    name?: string;
    description?: string;
  };

  // LOGIN WITH ORBIS
  const connectOrbis = async () => {
    try {
      const res = await orbis.connect_v2({ chain: "ethereum", lit: false });
      if (res.status === 200) {
        setUserData(res.details);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // CHECK IF USER IS CONNECTED
  const isUserConnected = async () => {
    try {
      const res = await orbis.isConnected();
      if (res.status === 200) {
        setUserData(res.details);
        return true;
      } else {
        setUserData(null);
        return false;
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // LOGOUT ORBIS DATA
  const logoutOrbis = async () => {
    try {
      const res = await orbis.logout();

      if (res.status === 200) {
        setUserData(null);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // SET USER PROFILE INITIALLY
  const onBoardProfile = async (name: string, description: string) => {
    try {
      const res = await orbis.updateProfile({
        username: name,
        description: description,
      });

      if (res.status === 200) {
        alert("success set initial profile");
      }
      return res.status;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // SET USER PROFILE
  const setUserProfile = async ({ name, description }: Profile) => {
    try {
      const res = await orbis.updateProfile({
        username: name,
        description: description,
      });

      if (res.status === 200) {
        alert("success setting profile");
      }
      return res.status;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // SET USER EMAIL
  const setUserEmail = async (email: string) => {
    try {
      const res = await orbis.setEmail(email);

      if (res.status === 200) {
        alert("success setting email");
      }
      return res.status;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // CREATE PUBLIC POST
  const createPublicPost = async (body: string) => {
    try {
      const res = await orbis.createPost({
        body: body,
      });

      return res.status;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // GET USER PUBLIC POST
  const getUserPublicPost = async () => {
    try {
      const res = await orbis.getPosts({ did: userData?.did });

      return res;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // LIKE A POST
  const likePost = async (streamId: string) => {
    try {
      const res = await orbis.react(streamId, "like");

      return res;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // HAHA A POST
  const hahaPost = async (streamId: string) => {
    try {
      const res = await orbis.react(streamId, "haha");

      return res;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // DOWNVOTE A POST
  const downVotePost = async (streamId: string) => {
    try {
      const res = await orbis.react(streamId, "downvote");

      return res;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // GET REACTION
  const getReaction = async (streamId: string, did: string) => {
    try {
      const res = await orbis.getReaction(streamId, did);

      return res;
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const contextValue = {
    userData,
    connectOrbis,
    logoutOrbis,
    isUserConnected,

    onBoardProfile,
    setUserProfile,
    setUserEmail,

    createPublicPost,
    getUserPublicPost,

    likePost,
    hahaPost,
    downVotePost,
    getReaction,
  };

  return <OrbisContext.Provider value={contextValue}>{children}</OrbisContext.Provider>;
};

export { OrbisContext, OrbisProvider };
