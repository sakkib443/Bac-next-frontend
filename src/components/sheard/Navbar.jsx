"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BiCategory, BiMenu, BiX } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const courseTypes = ["Online", "Offline", "Recorded"];

  const handleCourseTypeClick = (courseType) => {
    closeMobileMenu();
    router.push(`/courses?type=${courseType}`);
  };

  const menu = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/events", label: "Events" },
    { href: "/mentors", label: "Mentors" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/certification", label: "Certification" },
    // { href: "/phoenix", label: "Phoenix" }
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed lg:hidden top-0 left-0 w-[70%] bg-white shadow-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{
          height: "calc(100vh - 80px)",
          marginTop: "68px",
        }}
      >
        <div className="p-4 flex flex-col h-full">
          <nav className="flex-1">
            <ul className="space-y-4">
              {menu.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 text-lg ${
                      pathname === href
                        ? "bg-[#41bfb8] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/courses" onClick={closeMobileMenu}>
            <div className="mt-auto mb-6">
              <div className="flex gap-2 items-center justify-center bg-[#41bfb8] px-4 py-3 rounded-md cursor-pointer transition-all hover:brightness-110">
                <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                <p className="text-white text-[16px] font-semibold">
                  GetCourse
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b px-3 border-gray-200 font-poppins sticky top-0 z-50 bg-white transition-all duration-500 ease-in-out ${
          isSticky ? "shadow-md opacity-100 translate-y-0" : "shadow-none"
        }`}
      >
        <div className="container mx-auto">
          <div className="container sm:px-0 mx-auto py-4 text-[16px] flex flex-col md:flex-row justify-between items-center transition-all duration-500 ease-in-out">
            {/* Logo and Category */}
            <div className="w-full lg:w-auto flex justify-between items-center">
              <div className="flex gap-8">
                <Link
                  href="/"
                  className="md:border-r border-gray-400 flex gap-8 pr-8 2xl:pr-12"
                >
                  <img
                    className="w-32 lg:w-44"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </Link>

                <div className="relative group hidden md:flex items-center gap-2 dark:text-black/70 cursor-pointer">
                  <BiCategory className="text-3xl" />
                  <p className="text-[18px]">Category</p>

                  <div className="absolute top-full mt-2 left-0 w-48 bg-white dark:bg-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="py-2 px-4 space-y-2 text-black">
                      {courseTypes.map((type) => (
                        <li
                          key={type}
                          onClick={() => handleCourseTypeClick(type)}
                          className="hover:text-[#41BFB8] cursor-pointer py-2 px-2 rounded hover:bg-gray-100 transition-colors"
                        >
                          {type} Course
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-3xl focus:outline-none cursor-pointer"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <BiX /> : <BiMenu />}
              </button>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex lg:gap-4 2xl:gap-8 font-poppins">
              {menu.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative pb-1 transition-all duration-300 
                    hover:text-[#41bfb8] text-[16px]
                    ${
                      pathname === href
                        ? "text-[#F79952] after:scale-x-100"
                        : "text-black after:scale-x-0"
                    } 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform 
                    after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* GetCourse Button - Desktop */}
            <Link href="/courses">
              <div className="hidden lg:block">
                <div className="flex gap-2 text-xl items-center bg-[#41bfb8] px-4 py-2 rounded-md cursor-pointer transition-all hover:brightness-110">
                  <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                  <p className="text-white text-[16px] font-semibold">
                    GetCourse
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
