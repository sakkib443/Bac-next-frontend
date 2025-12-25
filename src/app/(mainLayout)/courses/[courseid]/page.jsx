/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { fetchCoursesData } from "@/redux/CourseSlice";
import { fetchMentorsData } from "@/redux/mentorSlice";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar, FaWhatsapp, FaUsers, FaGraduationCap, FaArrowRight,
  FaLinkedin, FaFacebook, FaCheckCircle, FaStarHalfAlt
} from "react-icons/fa";
import {
  MdOutlineMenuBook, MdWorkOutline, MdVerified,
  MdPlayCircleOutline, MdOutlineQuiz, MdOutlineAssignment
} from "react-icons/md";
import {
  LuBookOpen, LuTrophy, LuUsers, LuClock, LuVideo,
  LuLayoutGrid, LuTarget, LuFileText, LuMonitor
} from "react-icons/lu";
import { RiLiveLine, RiComputerLine, RiTranslate2 } from "react-icons/ri";

import CourseCard from "@/components/sheard/CourseCard";
import Link from "next/link";

const SingleCourse = () => {
  const params = useParams();
  const courseId = params.courseid;
  const dispatch = useDispatch();

  const { courses = [] } = useSelector((state) => state.courses || {});
  const { mentors = [] } = useSelector((state) => state.mentors || {});
  const [activeTab, setActiveTab] = useState("overview");
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchCoursesData());
    dispatch(fetchMentorsData());
  }, [dispatch]);

  useEffect(() => {
    if (courses && courses.length > 0) {
      const foundCourse = courses.find((c) => c.id == courseId);
      setTimeout(() => {
        setCourse(foundCourse);
        setPopularCourses(courses.filter((c) => c.id != courseId).slice(0, 3));

        if (foundCourse && mentors.length > 0) {
          const foundMentor = mentors.find(m => m._id === foundCourse.mentor || m.id === foundCourse.mentor);
          setInstructor(foundMentor);
        }
      }, 0);
    }
  }, [courses, mentors, courseId]);

  useEffect(() => {
    if (course && mentors.length > 0 && !instructor) {
      const foundMentor = mentors.find(m => m._id === course.mentor || m.id === course.mentor);
      setInstructor(foundMentor);
    }
  }, [course, mentors, instructor]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-200" />);
      }
    }
    return stars;
  };

  const renderIcon = (iconName) => {
    const iconClass = "text-xl";
    switch (iconName) {
      case "RiLiveLine": return <RiLiveLine className={iconClass} />;
      case "LuVideo": return <LuVideo className={iconClass} />;
      case "LuMonitor": return <LuMonitor className={iconClass} />;
      case "LuFileText": return <LuFileText className={iconClass} />;
      case "MdOutlineAssignment": return <MdOutlineAssignment className={iconClass} />;
      case "MdOutlineQuiz": return <MdOutlineQuiz className={iconClass} />;
      default: return <FaCheckCircle className={iconClass} />;
    }
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-teal-100 border-t-teal-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500 font-medium outfit text-center">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFEFF]">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1D1C] text-white pt-16 pb-32 lg:pt-24 lg:pb-48">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-500/10 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-24 relative z-10">
          <div className="max-w-4xl space-y-8">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-3"
            >
              <span className="px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-xs font-bold uppercase tracking-widest work">
                Best Seller
              </span>
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs font-bold uppercase tracking-widest work">
                {course.type} Learning
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold outfit leading-tight tracking-tight"
            >
              {course.title}
            </motion.h1>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-400 work font-medium leading-relaxed max-w-3xl"
            >
              {course.courseOverview || course.details?.substring(0, 160) + "..."}
            </motion.p>

            {/* Meta Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  {renderStars(course.rating)}
                </div>
                <span className="font-bold outfit text-lg">{course.rating}</span>
                <span className="text-gray-500 text-sm work">({course.totalRating} ratings)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <FaUsers className="text-teal-400" />
                </div>
                <span className="text-gray-300 font-medium work">{course.totalStudentsEnroll}+ students enrolled</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <RiTranslate2 className="text-teal-400" />
                </div>
                <span className="text-gray-300 font-medium work">Bengali / English</span>
              </div>
            </motion.div>

            {/* Instructed by */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 pt-6"
            >
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-gray-500 work">Instructed by</span>
                <span className="text-teal-400 font-bold outfit underline decoration-teal-400/30 underline-offset-4 group-hover:decoration-teal-400 transition-all">
                  {instructor?.name || "Senior Tech Expert"}
                </span>
                {instructor && <MdVerified className="text-blue-400 text-lg" />}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Sidebar */}
      <section className="container mx-auto px-4 lg:px-24 -mt-24 lg:-mt-32 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Mobile Video Toggle / Image Placeholder */}
            <div className="lg:hidden w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8">
              <img src={course.image} alt={course.title} className="w-full aspect-video object-cover" />
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gray-900 outfit">{course.fee}</span>
                  <span className="line-through text-gray-400 font-bold">25,000৳</span>
                </div>
                <button className="w-full py-4 bg-[#43c3bc] text-white font-bold rounded-2xl shadow-lg shadow-teal-100 mb-4 transition-all active:scale-95">
                  Enroll Now
                </button>
                <p className="text-center text-xs text-gray-500 font-bold work uppercase tracking-wider">30-Day Money Back Guarantee</p>
              </div>
            </div>

            {/* Modern Tab System */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
              <div className="flex border-b border-gray-100 bg-gray-50/50 p-2">
                {[
                  { id: "overview", label: "Course Overview", icon: LuLayoutGrid },
                  { id: "curriculum", label: "Curriculum", icon: MdOutlineMenuBook },
                  { id: "instructor", label: "Instructor", icon: LuUsers },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold outfit transition-all relative rounded-2xl ${activeTab === tab.id
                      ? "text-teal-600 bg-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    <tab.icon className={`text-lg transition-transform ${activeTab === tab.id ? "scale-110" : ""}`} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(" ")[1] || tab.label}</span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 border-2 border-teal-500/10 rounded-2xl pointer-events-none"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold outfit text-gray-900 flex items-center gap-3">
                          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
                          Course Details
                        </h2>
                        <p className="text-gray-600 work text-lg leading-relaxed text-justify">
                          {course.details}
                        </p>
                      </div>

                      {/* What you will learn grid */}
                      <div className="space-y-8">
                        <h3 className="text-2xl font-bold outfit text-gray-900 flex items-center gap-3">
                          <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                          Core Value Proposition
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {course.courseIncludes?.map((item, idx) => (
                            <div key={idx} className="group p-6 bg-gradient-to-br from-white to-[#F8FAFB] border border-gray-100 rounded-3xl hover:border-teal-200 hover:shadow-lg transition-all">
                              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                                {renderIcon(item.icon)}
                              </div>
                              <h4 className="text-lg font-bold outfit text-gray-900 mb-2 truncate">{item.text}</h4>
                              <p className="text-gray-500 text-sm work">Professional guidance and real-world tools provided for your success.</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "curriculum" && (
                    <motion.div
                      key="curriculum"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold outfit text-gray-900 flex items-center gap-3">
                          <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
                          Learning Modules
                        </h2>
                        <div className="space-y-4">
                          {course.curriculum?.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-5 bg-[#F9FBFC] border border-gray-100 rounded-2xl hover:bg-white hover:shadow-md transition-all group">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-teal-600 shadow-sm font-bold outfit border border-teal-50">
                                  {String(idx + 1).padStart(2, '0')}
                                </div>
                                <span className="font-bold text-gray-800 work">{item}</span>
                              </div>
                              <MdPlayCircleOutline className="text-gray-300 group-hover:text-teal-500 text-2xl transition-colors cursor-pointer" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Software Stack */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold outfit text-gray-900 flex items-center gap-3">
                          <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                          Industry Standard Tools
                        </h2>
                        <div className="flex flex-wrap gap-3">
                          {(Array.isArray(course.softwareYoullLearn) ? course.softwareYoullLearn : course.softwareYoullLearn?.split(",") || []).map((tech, idx) => (
                            <span key={idx} className="px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm text-gray-700 font-bold work text-sm hover:border-teal-400 hover:text-teal-600 transition-all cursor-default">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "instructor" && (
                    <motion.div
                      key="instructor"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      {instructor ? (
                        <div className="space-y-12">
                          <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="relative group">
                              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 to-amber-500 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                              <div className="relative w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
                                <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover transform transition-transform group-hover:scale-105" />
                              </div>
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center gap-3">
                                <h3 className="text-4xl font-extrabold outfit text-gray-900">{instructor.name}</h3>
                                <MdVerified className="text-blue-500 text-2xl" />
                              </div>
                              <p className="text-teal-600 font-bold work text-xl">{instructor.designation} • {instructor.subject}</p>
                              <div className="flex gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
                                  <FaStar className="text-amber-400" />
                                  <span className="font-bold outfit">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
                                  <FaGraduationCap className="text-teal-500" />
                                  <span className="font-bold outfit">{instructor.training_experience?.years}+ Years Exp.</span>
                                </div>
                              </div>
                              <p className="text-gray-500 work leading-relaxed max-w-2xl">
                                {instructor.details}
                              </p>
                              <div className="flex gap-4 pt-4">
                                <a href={`https://wa.me/88${instructor.phone}`} target="_blank" className="p-3 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-colors shadow-lg shadow-green-100">
                                  <FaWhatsapp className="text-xl" />
                                </a>
                                <button className="p-3 bg-[#0A66C2] text-white rounded-2xl hover:opacity-90 transition-all">
                                  <FaLinkedin className="text-xl" />
                                </button>
                                <button className="p-3 bg-[#1877F2] text-white rounded-2xl hover:opacity-90 transition-all">
                                  <FaFacebook className="text-xl" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Experience Sections */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-[#F8FAFB] rounded-[2.5rem] border border-gray-100">
                              <h4 className="text-xl font-bold outfit text-gray-900 mb-6 flex items-center gap-2">
                                <LuTrophy className="text-amber-500" />
                                Certifications
                              </h4>
                              <ul className="space-y-4">
                                {instructor.education_qualification?.map((item, idx) => (
                                  <li key={idx} className="flex gap-3 text-sm font-medium text-gray-600 work">
                                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-8 bg-[#F8FAFB] rounded-[2.5rem] border border-gray-100">
                              <h4 className="text-xl font-bold outfit text-gray-900 mb-6 flex items-center gap-2">
                                <MdWorkOutline className="text-teal-500" />
                                Work History
                              </h4>
                              <ul className="space-y-4">
                                {instructor.work_experience?.slice(0, 5).map((item, idx) => (
                                  <li key={idx} className="flex gap-3 text-sm font-medium text-gray-600 work">
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                          <LuUsers className="mx-auto text-6xl text-gray-300 mb-4" />
                          <h4 className="text-2xl font-bold text-gray-700 outfit">Mentor Not Assigned</h4>
                          <p className="text-gray-500 work">Check back soon for instructor details.</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Right */}
          <div className="lg:col-span-4 sticky top-28 space-y-8">
            {/* Main Pricing Card */}
            <div className="hidden lg:block bg-white rounded-[2.5rem] shadow-2xl border border-teal-50 overflow-hidden">
              <div className="relative aspect-video group cursor-pointer overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <MdPlayCircleOutline className="text-white text-7xl animate-pulse" />
                </div>
              </div>
              <div className="p-10 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-extrabold text-[#0A1D1C] outfit leading-none">{course.fee}</span>
                    <span className="line-through text-gray-400 font-bold work text-lg">25,000৳</span>
                  </div>
                  <p className="text-teal-600 font-bold work text-sm uppercase tracking-widest">Early Bird Offer - 20% OFF</p>
                </div>

                <div className="space-y-4">
                  <button className="w-full py-5 bg-[#43c3bc] hover:bg-[#38a89d] text-white font-bold rounded-2xl shadow-xl shadow-teal-50 transform transition-all active:scale-95 flex items-center justify-center gap-3">
                    Enroll in this Course
                    <FaArrowRight className="text-sm" />
                  </button>
                  <button className="w-full py-4 bg-white border-2 border-gray-200 hover:border-teal-500 hover:text-teal-600 text-gray-700 font-bold rounded-2xl transition-all">
                    Add to Cart
                  </button>
                </div>

                <div className="space-y-6 pt-4 border-t border-gray-50">
                  <h5 className="font-bold outfit text-gray-900">What is Included:</h5>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-600 work text-sm font-medium">
                      <LuMonitor className="text-teal-500 text-lg" />
                      {course.lectures}+ Video Lessons
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 work text-sm font-medium">
                      <LuTarget className="text-teal-500 text-lg" />
                      {course.totalProject}+ Professional Projects
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 work text-sm font-medium">
                      <LuClock className="text-teal-500 text-lg" />
                      {course.durationMonth || course.duration} Months Duration
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 work text-sm font-medium">
                      <LuTrophy className="text-teal-500 text-lg" />
                      Certificate of Completion
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-50">
                  <p className="text-xs text-gray-400 font-bold work cursor-help hover:text-teal-500 transition-colors uppercase tracking-widest">Share Course</p>
                  <p className="text-xs text-gray-400 font-bold work cursor-help hover:text-teal-500 transition-colors uppercase tracking-widest">Gift Course</p>
                </div>
              </div>
            </div>

            {/* Popular Courses Secondary Widget */}
            <div className="bg-[#F8FAFB] rounded-[2.5rem] p-8 space-y-8 border border-gray-100">
              <h3 className="text-xl font-bold outfit text-gray-900">Recommended Courses</h3>
              <div className="space-y-6">
                {popularCourses.map(item => (
                  <Link href={`/courses/${item.id}`} key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-sm">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-bold outfit text-gray-900 group-hover:text-teal-500 transition-colors line-clamp-2 leading-tight">{item.title}</h4>
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <FaStar />
                        <span className="text-gray-900 font-bold ml-1">{item.rating}</span>
                      </div>
                      <span className="text-teal-600 font-bold work text-xs">{item.fee}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/courses" className="flex items-center justify-center w-full py-4 text-teal-600 font-bold work text-sm border-2 border-dashed border-teal-200 rounded-2xl hover:bg-teal-50 transition-all">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCourse;
