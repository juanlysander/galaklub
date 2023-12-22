import { useState, useEffect } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";

const orbis = new Orbis({});

export function useAuth() {
  /** The user object */
  const [user, setUser] = useState<"loggedIn" | "loading" | "loggedOut">("loading");
  const [address, setAddress] = useState<string | undefined>();
  console.log("address: ", address);

  /** Connect to Orbis Lit protocol */
  const connect = async () => {
    try {
      const res = await orbis.connect_v2({ chain: "ethereum", lit: false });

      if (res.status === 200) {
        setUser("loggedIn");
        setAddress(res.details.metadata.address);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  /** Check if there is session token available */
  const isUserConnected = async () => {
    try {
      const res = await orbis.isConnected();

      if (res.status === 200) {
        setUser("loggedIn");
        setAddress(res.details.metadata.address);
        return true;
      } else {
        setUser("loggedOut");
        setAddress(undefined);
        return false;
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    isUserConnected();
  }, []);

  /** Logout from Orbis Lit protocol */
  const logout = async () => {
    try {
      const res = await orbis.logout();

      if (res.status === 200) {
        setUser("loggedOut");
        setAddress(undefined);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return { user, connect, logout, isUserConnected, address };
}
