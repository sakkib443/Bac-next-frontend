import Link from "next/link";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { LuBookOpenCheck } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative crd">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 relative">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-between w-full">
          <div className="font-poppins">
            <div className="flex items-center gap-2 mb-2">
              <FiBookOpen className="text-2xl sm:text-3xl animate-bounce" />
              <p className="text-sm sm:text-xl md:text-[22px] crd work">
                A Leading Platform for Skills
              </p>
            </div>
            <h1 className="md:text-6xl my-4 text-4xl csd  outfit">
              {/* Become Learner{" "}
              <span className="text-4xl sm:text-5xl md:text-6xl 2xl:text-4xl text-[#41bfb8]">
                To Leader{" "}
              </span> */}
              Bdcalling Academy
            </h1>
            <h1 className=" text-3xl sm:text-4xl md:text-6xl 2xl:text-4xl font-semibold outfit"></h1>
            <p className="mt-3 mb-3 text-xs sm:text-sm md:text-[15px] work">
              Welcome to Bdcalling Academy — a leading IT training institute in
              Bangladesh and a proud part of Betopia Group. We specialize in
              career-oriented education designed to help you develop practical
              digital skills and grow professionally. Our expert instructors,
              hands-on learning approach, and personalized support will guide
              you toward real career success in today’s competitive tech
              landscape
            </p>

            {/* Stats */}
            <div className="mb-4 w-auto lg:w-12/12">
              <div className="flex items-center justify-between px-5 stats shadow md:w-full w-[99%] overflow-hidden py-3 pz-4">
                {/* Total Courses */}
                <div className=" flex items-center gap-1.5 sm:w-auto">
                  <div>
                    <div className="stat-title text-xs sm:text-sm crd">
                      Our Courses
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="stat-value font-bold   text-[#41bfb8] text-lg sm:text-xl">
                        50+
                      </div>
                    </div>
                    <div className="stat-desc text-xs md:block hidden crd">
                      Including Vendor Certfied Courses
                    </div>
                  </div>
                </div>

                {/* Total Students */}
                <div className=" flex items-center gap-1.5 w-full sm:w-auto max-sm:ml-6">
                  <div>
                    <div className="stat-title text-xs sm:text-sm crd">
                      Total Students
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="stat-value font-bold  text-[#41bfb8] text-lg sm:text-xl">
                        4200+
                      </div>
                    </div>
                    <div className="stat-desc text-xs md:block hidden crd">
                      Building a skilled society
                    </div>
                  </div>
                </div>

                {/* Job Success */}
                <div className=" flex items-center gap-1.5 w-full sm:w-auto">
                  <div className="stat-figure text-secondary   mr-2">
                    <div className="avatar online">
                      <div className=" ">
                        <img
                          className="border-2  rounded-full h-[52px] w-[52px] border-[#F79952] "
                          src="https://www.creativefabrica.com/wp-content/uploads/2021/03/10/business-success-icon-Graphics-9457042-1-1-580x386.jpg"
                          alt="Job success"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="stat-value text-lg sm:text-xl font-bold ">92%</div>
                    <div className="stat-title text-xs sm:text-sm crd">
                      Career Placement rate
                    </div>
                    <div className="stat-desc text-[#41bfb8] text-xs md:block hidden">
                      Targeting to reach 100%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Course Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a
                href="/events"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <button className="flex gap-1 cursor-pointer text-base sm:text-lg md:text-xl items-center bg-[#41bfb8] px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-[#38a8a1] transition-colors">
                  <LuBookOpenCheck className="text-xl sm:text-2xl text-white font-semibold" />
                  <p className="text-white work">Join Seminar & Events</p>
                </button>
              </a>

              <Link href="/success-story">
                <button className="flex gap-2 text-base sm:text-lg md:text-xl items-center border border-[#41bfb8] px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                  <LuBookOpenCheck className="text-xl sm:text-2xl text-[#41bfb8] font-semibold" />
                  <p className="text-[#41bfb8] work font-semibold">
                    Success Story
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="flex-1 flex justify-center items-center w-full mt-6 lg:mt-0">
          <div className="relative w-full h-[400px]  overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/FtsFZkw2h-A?si=OcWlPICdVmdLQE14"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
