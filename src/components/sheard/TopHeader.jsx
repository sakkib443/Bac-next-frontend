"use client";

import React, { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";
import { FiYoutube } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";

const TopHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login"; // redirect to login page
  };

  return (
    <div className="bg-[#77dbd6] work hidden lg:block">
      <div className="w-full container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5 py-2">
            {/* Phone */}
            <a href="tel:01321231802" className="flex gap-1 items-center pr-4">
              <IoMdCall className="text-[20px] text-[#F79952]" />
              <p className="text-[15px] dark:text-black/70">01321231802</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@bdcallingacademy.com"
              className="flex gap-2 text-[20px] items-center"
            >
              <IoMailOutline className="text-xl text-[#F79952]" />
              <p className="text-[15px] dark:text-black/70">
                info@bdcallingacademy.com
              </p>
            </a>
          </div>

          <div className="flex gap-12 items-center">
            <div className="flex gap-6 text-[20px] crd items-start">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/bdcallingacademy.bd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuFacebook className="text-[#414042]" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@bdcallingacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube className="transform translate-y-[2px]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bdcalling-academy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin />
              </a>
            </div>

            <div className="flex gap-4 text-[15px]">
              {user ? (
                <>
                  <span className="px-3 text-[#414042]">{user.gmail}</span>
                  <button
                    onClick={handleLogout}
                    className="px-3 text-[#414042] border border-[#414042] rounded-md hover:bg-[#414042] hover:text-white transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="border-r border-[#414042] px-3 text-[#414042]"
                  >
                    Login
                  </Link>

                  <Link href="/register" className="text-[#414042]">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
