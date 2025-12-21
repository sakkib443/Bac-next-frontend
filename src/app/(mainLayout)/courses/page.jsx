

"use client";

import React, { useEffect, useState, useRef } from "react";
import SectionHeading from "@/components/sheard/SectionHeading";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import LeftCategory from "@/components/coursepage/LeftCategory";
import dynamic from "next/dynamic";
import { fetchCoursesData } from "@/redux/CourseSlice";

 
const RightCoursesDetalis = dynamic(
  () => import("@/components/coursepage/RightCoursesDetalis"),
  { ssr: false }
);

const Course = () => {
  const dispatch = useDispatch();
  const { courses = [], loading } = useSelector((state) => state.courses || {});

  const [searchQuery, setSearchQuery] = useState("");

  const detailsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Fetch courses from Redux
  useEffect(() => {
    dispatch(fetchCoursesData());
  }, [dispatch]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransformValue = () => {
    return "none";
  };

  return (
    <>
      {/* Vertical Join Seminar Button */}
      <div
        className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <Link href="/events">
          <h3 className="outfit-semibold uppercase">Join Seminar</h3>
        </Link>
      </div>

      {/* Courses Section */}
      <div className="bg-[#ecfcfb] py-8">
        <div className="mb-24">
          <SectionHeading
            title={"Discover Your Next Skill"}
            description={
              "Unlock a wide range of practical, in-demand courses designed to align with your career goals. Whether you’re taking your first step into tech or advancing your expertise, our learning paths are crafted by industry experts to ensure you gain real-world knowledge that truly makes a difference."
            }
          />
        </div>

        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="flex gap-10">
            <div className="w-1/5">
              <LeftCategory
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            <div className="w-[80%]" ref={detailsRef} style={{ transform: getTransformValue() }}>
              <RightCoursesDetalis 
                searchQuery={searchQuery} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
