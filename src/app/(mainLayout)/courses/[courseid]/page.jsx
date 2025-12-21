/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { fetchCoursesData } from "@/redux/CourseSlice";
import { FaCheck, FaStar, FaRegClock, FaWhatsapp } from "react-icons/fa";
import { MdLanguage, MdLiveTv, MdWorkOutline } from "react-icons/md";
import { RiComputerLine, RiExpandLeftRightLine, RiLiveLine } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";

import { BsArrowRightCircle } from "react-icons/bs";
import CourseCard from "@/components/sheard/CourseCard";

const SingleCourse = () => {
  const params = useParams();
  const courseId = params.courseid;
  const dispatch = useDispatch();
  
  const { courses = [] } = useSelector((state) => state.courses || {});
  const [activeTab, setActiveTab] = useState("overview");
  const [course, setCourse] = useState(null);
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchCoursesData());
  }, [dispatch]);

  useEffect(() => {
    if (courses && courses.length > 0) {
      const foundCourse = courses.find((c) => c.id == courseId);
      setCourse(foundCourse);
      setPopularCourses(courses.filter((c) => c.id != courseId).slice(0, 2));
    }
  }, [courses, courseId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const renderIcon = (iconName) => {
    const iconClass = "cpr text-base mt-0.5";
    switch (iconName) {
      case "RiLiveLine":
        return <RiLiveLine className={iconClass} />;
      case "RiExpandLeftRightLine":
        return <RiExpandLeftRightLine className={iconClass} />;
      case "RiComputerLine":
        return <RiComputerLine className={iconClass} />;
      case "MdLiveTv":
        return <MdLiveTv className={iconClass} />;
      case "TfiCup":
        return <TfiCup className={iconClass} />;
      case "MdWorkOutline":
        return <MdWorkOutline className={iconClass} />;
      default:
        return <FaCheck className={iconClass} />;
    }
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading course details...</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="bg-[#ECFCFB] pb-6">
          <div className="space-y-6 md:space-y-6">
            {/* Hero Section */}
            <div className="py-10 md:py-16 lg:py-20 border-b border-gray-300">
              <div className="container sm:px-0 lg:px-24 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
                  {/* Left Content */}
                  <div className="space-y-6 w-full lg:w-1/2">
                    <p className="text-xl outfit-semibold crd">Exploring Course</p>
                    <h1 className="crd font-bold outfit text-3xl xl:text-5xl">
                      {course.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3">
                      <div className="py-2 px-6 border border-gray-200 rounded-md text-center">
                        <p className="crd outfit font-bold text-lg">{course.duration} Month</p>
                        <p className="crd text-base work">Duration</p>
                      </div>
                      <div className="py-2 px-6 border border-gray-200 rounded-md text-center">
                        <p className="text-black font-bold text-lg">{course.lectures}+</p>
                        <p className="crd text-base">Lectures</p>
                      </div>
                      <div className="py-2 px-6 border border-gray-200 rounded-md text-center">
                        <p className="text-black font-bold text-lg outfit">{course.totalProject}+</p>
                        <p className="crd text-base work">Projects</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-base md:text-lg crd work w-11/12">
                        {course.details}
                      </p>
                    </div>

                    {/* Price and Button */}
                    <div className="flex flex-wrap items-center gap-6">
                      <p className="text-2xl md:text-3xl text-gray-800 outfit-semibold">
                        Course Fee: {course.fee}
                      </p>
                      <button className="bg-[#43c3bc] hover:bg-[#41bfb8] rounded-md py-3 px-7 work tracking-tight text-[16px] text-white cursor-pointer transition-all">
                        Enroll Now
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="cpr flex items-center gap-1">
                        <span className="text-lg outfit-semibold">{course.rating}</span>
                        <div className="flex gap-0.5">{renderStars(course.rating)}</div>
                      </div>
                      <p className="csd text-base lg:text-lg outfit-semibold">
                        ({course.totalRating} ratings)
                      </p>
                      <p className="text-gray-600 text-base lg:text-lg outfit-semibold">
                        {course.totalStudentsEnroll}+ students
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="w-full lg:w-1/2 h-full rounded-2xl overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content and Sidebar */}
            <div className="flex flex-col lg:flex-row gap-10 container lg:px-24  sm:px-0 mx-auto pt-8">
              {/* Main Content */}
              <div className="space-y-6 w-full lg:w-2/3 border border-gray-100 px-8 py-8 shadow-sm rounded-md bg-white">
                {/* Tab Navigation */}
                <div className="text-gray-600">
                  <div className="flex gap-4 rounded-md border-gray-300 py-3 px-4">
                    <button
                      className={`px-5 py-2.5 rounded-md transition-all border border-gray-300 shadow-none duration-300 cursor-pointer ${
                        activeTab === "overview"
                          ? "bg-[#43c3bc] text-white shadow-none border-[#43c3bc]"
                          : "bg-white crd hover:bg-gray-50 shadow-md"
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`px-5 py-2.5 rounded-lg font-medium shadow-none border border-gray-300 text-sm transition-all duration-300 ease-in-out cursor-pointer ${
                        activeTab === "curriculum"
                          ? "bg-[#43c3bc] text-white shadow-none border-[#43c3bc]"
                          : "bg-white crd hover:bg-gray-50 shadow-md"
                      }`}
                      onClick={() => setActiveTab("curriculum")}
                    >
                      Curriculum
                    </button>
                    <button
                      className={`px-5 py-2.5 rounded-md shadow-none border border-gray-300 transition-all duration-300 cursor-pointer ${
                        activeTab === "instructor"
                          ? "bg-[#43c3bc] text-white shadow-none border-[#43c3bc]"
                          : "bg-white crd hover:bg-gray-50 shadow-md"
                      }`}
                      onClick={() => setActiveTab("instructor")}
                    >
                      Instructor
                    </button>
                  </div>
                </div>

                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="crd">
                    <div>
                      <h2 className="outfit-semibold text-2xl md:text-3xl">
                        Course <span className="csd">Overview</span>
                      </h2>
                      <p className="crd lg:text-base work leading-8 mt-4">
                        {course.details}
                      </p>
                    </div>

                    {/* Course Includes */}
                    {course.courseIncludes && (
                      <div className="space-y-4 mt-8">
                        <h2 className="outfit-semibold text-2xl md:text-3xl">
                          This course<span className="csd"> Includes</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.courseIncludes.map((item, index) => (
                            <div
                              key={index}
                              className="flex gap-2 items-start border border-gray-200 p-3 rounded-md work"
                            >
                              {renderIcon(item.icon)}
                              <p className="text-sm md:text-base work">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === "curriculum" && (
                  <div className="space-y-8 crd">
                    <div>
                      <h2 className="outfit-semibold text-2xl md:text-3xl">
                        What <span className="csd">You'll Learn</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {course.curriculum && course.curriculum.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-2 items-start border border-gray-200 p-3 rounded-md work"
                          >
                            <BsArrowRightCircle className="text-gray-400 mt-1 text-base flex-shrink-0" />
                            <p className="text-sm md:text-base crd">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Software You'll Learn */}
                    <div className="space-y-4">
                      <h2 className="outfit-semibold text-2xl md:text-3xl">
                        Software<span className="csd"> You'll Learn</span>
                      </h2>
                      <div className="border border-gray-300 rounded-lg p-6 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.technology && course.technology.split(", ").map((tech, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <BsArrowRightCircle className="text-gray-400 text-base" />
                              <p className="text-sm md:text-base crd">{tech}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Job Positions */}
                    {course.jobPositions && (
                      <div className="space-y-4">
                        <h2 className="outfit-semibold text-2xl md:text-3xl">
                          Open<span className="csd"> Job Positions</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-gray-300 rounded-lg p-6">
                          {course.jobPositions.map((job, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <BsArrowRightCircle className="text-gray-400 text-base" />
                              <p className="crd text-sm md:text-base">{job}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Instructor Tab */}
                {activeTab === "instructor" && (
                  <div className="space-y-4">
                    <h2 className="outfit-semibold text-2xl md:text-3xl">
                      <span className="cpr">Instructor</span>
                    </h2>
                    <div className="flex items-center gap-6 rounded-lg">
                      <div className="size-32 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          src={course.instructorImg}
                          alt={course.instructorName}
                        />
                      </div>
                      <div className="space-y-2 outfit-semibold crd">
                        <h5 className="text-xl md:text-2xl">{course.instructorName}</h5>
                        <p className="text-base md:text-lg">{course.designation} - {course.subject}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">{renderStars(5)}</div>
                          <span className="text-gray-600 text-sm">
                            ({course.instructorReviews} Reviews)
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{course.instructorExperience}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg font-medium">
                      {course.instructorBio || "Experienced instructor with proven track record"}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar - Popular Courses */}
              <div className="w-full lg:w-1/3">
                <div className="space-y-6">
                  <h3 className="cpr text-2xl md:text-3xl outfit-semibold text-center">
                    Popular <span className="crd">Courses</span>
                  </h3>
                  <div className="flex flex-col gap-6">
                    {popularCourses.map((item) => <CourseCard key={item.id} course={item}></CourseCard>
                    
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
