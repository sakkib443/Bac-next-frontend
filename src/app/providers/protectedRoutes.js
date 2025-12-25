"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

const ProtectedRoute = ({ children, role }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      router.replace("/login");
      return;
    }

    try {
      const userObj = JSON.parse(user);
      if (role && userObj.role !== role) {
        // Role mismatch হলে redirect
        router.replace("/login");
        return;
      }
      setIsAuthorized(true);
    } catch (e) {
      router.replace("/login");
    }
  }, [router, role]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <FiLoader className="text-4xl text-[#41bfb8] animate-spin" />
        <p className="text-slate-500 font-medium animate-pulse">Verifying Access...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
