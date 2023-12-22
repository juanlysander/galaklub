"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function OrbisLogin() {
  const { user, connect, logout } = useAuth();

  return (
    <div>
      {user === "loggedIn" ? (
        <div className="flex items-center gap-4">
          <Link href="/profile" className="text-sm transition-all">
            My Profile
          </Link>
          <div className=" border-l-black/60 border-l-2 h-6" />
          <button onClick={() => logout()} className="text-sm transition-all">
            Logout
          </button>
        </div>
      ) : user === "loading" ? (
        <div className="flex items-center gap-4">
          <div className=" border-l-black/60 border-l-2 h-6" />
          <div className="text-sm transition-all">Loading</div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className=" border-l-black/60 border-l-2 h-6" />
          <button onClick={() => connect()} className="text-sm transition-all">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
