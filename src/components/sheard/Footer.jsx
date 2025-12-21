/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="mt-12">
       
        <div className="bg-gray-50 border-t border-gray-200">
          <div></div>
          <div className="container px-4 mx-auto">
            <div className="space-y-6 md:space-y-8">
              <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-6 justify-between gap-12">
                {/* Logo + Description + Socials */}
                <div className="flex flex-col items-center md:items-start justify-center gap-4 col-span-1 md:col-span-2">
                  <div className="flex items-center justify-center w-30 md:w-40">
                    <img src="/images/logo.png" alt="" />
                  </div>
                  <p className="font-montserrat text-sm md:text-base text-gray-600 md:text-left leading-relaxed">
                    Bdcalling Academy is a leading online learning platform in
                    Bangladesh, offering a wide range of courses to help you
                    enhance your skills and knowledge.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-blue-600 hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-md">
                      <a
                        href="https://www.facebook.com/bdcallingacademy.bd"
                        target="_blank"
                      >
                        <FaFacebook className="text-xl" />
                      </a>
                    </div>
                    <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-blue-600 hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-md">
                      <a
                        href="https://www.linkedin.com/company/bdcalling-academy/"
                        target="_blank"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    </div>
                    <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-red-600 hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-md">
                      <a
                        href="https://www.youtube.com/@bdcallingacademy"
                        target="_blank"
                      >
                        <FaYoutube className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Links + Categories */}
                {/* <div className="flex items-center md:items-start justify-center md:justify-between gap-20 lg:gap-0"> */}
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2 lg:col-span-1">
                  <h2 className="font-montserrat text-lg text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                    Quick Links
                  </h2>
                  <div className="flex flex-col items-start gap-1">
                    {[
                      { to: "/", label: "Home" },
                      { to: "/about", label: "About Us" },
                      { to: "/contact", label: "Contact Us" },
                      { to: "/courses", label: "Courses" },
                      { to: "/certification", label: "Certification" },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.to}
                        className="text-sm md:text-base text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-200 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-200 text-nowrap"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 col-span-1 md:col-span-2 lg:col-span-1">
                  <h2 className="font-montserrat text-lg text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                    Course Categories
                  </h2>
                  <div className="flex flex-col items-start gap-1">
                    {[
                      "Programming",
                      "Digital Marketing",
                      "Networking & Server",
                      "Database",
                      "Language Skills",
                    ].map((cat) => (
                      <Link
                        key={cat}
                        href={`/courses?category=${encodeURIComponent(cat)}`}
                        className="text-sm md:text-base text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-200 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-200 text-nowrap"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* </div> */}

                {/* Contact Info */}
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                  <h2 className="font-montserrat text-lg text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                    Contact Info
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <a href="tel:+88 01321231802">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                            <IoCallOutline className="text-xl" />
                          </div>
                          <p className="text-sm md:text-base text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-200 after:scale-x-0 after:origin-left hover:after:scale-x-100 text-nowrap">
                            +88 01321231802
                          </p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="mailto:info@bdcallingacademy.com">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                            <MdOutlineMailOutline className="text-xl" />
                          </div>
                          <p className="text-sm md:text-base text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-200 after:scale-x-0 after:origin-left hover:after:scale-x-100 text-nowrap">
                            info@bdcallingacademy.com
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                        <IoLocationOutline className="text-xl" />
                      </div>
                      <p className="text-sm md:text-base text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-200 after:scale-x-0 after:origin-left hover:after:scale-x-100 text-left">
                        Daisy Garden, House 14, Block A, Banasree, main road,
                        Dhaka-1219
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 py-6 md:py-8 border-t border-gray-200">
                {/* Copyright */}
                <p className="font-montserrat text-sm md:text-base crd text-center py-4 md:py-6">
                  Copyright &copy; 2025 Bdcalling Academy. All Rights Reserved.{" "}
                  <span className="text-xs md:text-sm text-gray-500 hover:text-[#F79952] ease-in-out cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-200 after:scale-x-0 after:origin-left hover:after:scale-x-100">
                    Trade License - TRAD/DNCC/032933/2023
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
