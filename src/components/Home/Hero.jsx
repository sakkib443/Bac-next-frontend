"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiBookOpen, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";
import { LuSparkles, LuGraduationCap, LuRocket } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({ courses: 0, students: 0, placement: 0 });

    useEffect(() => {
        setIsVisible(true);

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
                courses: Math.floor(50 * progress),
                students: Math.floor(4200 * progress),
                placement: Math.floor(92 * progress)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden lg:py-12 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#41bfb8]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F79952]/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Floating Particles */}
            <div className="absolute top-24 right-1/4 w-3 h-3 bg-[#41bfb8] rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-40 left-1/3 w-2 h-2 bg-[#F79952] rounded-full animate-bounce delay-300 opacity-60"></div>
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#41bfb8]/50 rounded-full animate-bounce delay-500"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(65,191,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,191,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Left Section - Content */}
                    <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#41bfb8]/10 to-[#F79952]/10 border border-[#41bfb8]/20 rounded-md w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41bfb8] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41bfb8]"></span>
                            </span>
                            <p className="text-sm font-medium text-gray-700 work">
                                🎓 A Leading Platform for Skills Development
                            </p>
                        </div>

                        {/* Main Heading */}
                        <div className="mb-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold outfit leading-tight">
                                <span className="text-gray-800">Transform Your </span>
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-[#41bfb8] via-[#38a89d] to-[#41bfb8] bg-clip-text text-transparent">
                                        Career Path
                                    </span>
                                    <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                        <path d="M2 6C50 2 150 2 198 6" stroke="#F79952" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="mt-2 text-lg lg:text-3xl text-gray-600 outfit-semibold">
                                with <span className="text-[#41bfb8]">Bdcalling Academy</span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 work">
                            Welcome to Bdcalling Academy — a leading IT training institute in Bangladesh.
                            We specialize in career-oriented education with expert instructors, hands-on learning,
                            and personalized support for real career success.
                        </p>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {/* Courses */}
                            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-md p-3 hover:shadow-lg hover:border-[#41bfb8]/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#41bfb8] to-[#41bfb8]/50 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <FiBookOpen className="text-[#41bfb8] text-base" />
                                    <span className="text-xs text-gray-500 work">Courses</span>
                                </div>
                                <p className="text-xl sm:text-2xl font-bold text-gray-800 outfit">{counts.courses}+</p>
                                <p className="text-[10px] text-gray-400 work hidden sm:block">Vendor Certified</p>
                            </div>

                            {/* Students */}
                            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-md p-3 hover:shadow-lg hover:border-[#F79952]/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F79952] to-[#F79952]/50 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <FiUsers className="text-[#F79952] text-base" />
                                    <span className="text-xs text-gray-500 work">Students</span>
                                </div>
                                <p className="text-xl sm:text-2xl font-bold text-gray-800 outfit">{counts.students.toLocaleString()}+</p>
                                <p className="text-[10px] text-gray-400 work hidden sm:block">Building Skills</p>
                            </div>

                            {/* Placement */}
                            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-md p-3 hover:shadow-lg hover:border-[#41bfb8]/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#41bfb8] to-[#F79952] rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center gap-1.5 mb-1">
                                    <FiTrendingUp className="text-[#41bfb8] text-base" />
                                    <span className="text-xs text-gray-500 work">Placement</span>
                                </div>
                                <p className="text-xl sm:text-2xl font-bold text-gray-800 outfit">{counts.placement}%</p>
                                <p className="text-[10px] text-gray-400 work hidden sm:block">Career Success</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 mb-5">
                            <a href="/events" className="group relative overflow-hidden">
                                <div className="relative flex items-center gap-2 bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white px-5 py-2.5 rounded-md font-semibold work transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#41bfb8]/30 text-sm">
                                    <LuSparkles className="text-lg group-hover:rotate-12 transition-transform" />
                                    <span>Join Seminar & Events</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                                </div>
                            </a>

                            <Link href="/success-story" className="group">
                                <div className="flex items-center gap-2 bg-white border border-[#41bfb8] text-[#41bfb8] px-5 py-2.5 rounded-md font-semibold work transition-all duration-300 hover:bg-[#41bfb8]/5 hover:shadow-lg text-sm">
                                    <LuRocket className="text-lg group-hover:translate-x-1 transition-transform" />
                                    <span>Success Stories</span>
                                </div>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-[#41bfb8] to-[#2dd4bf] border-2 border-white flex items-center justify-center">
                                        <span className="text-[9px] text-white font-bold">{i}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 work">
                                <span className="text-gray-800 font-semibold">500+</span> enrolled this month
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Video */}
                    <div className={`flex-1 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#41bfb8]/20 rounded-md -z-10"></div>
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#F79952]/20 rounded-md -z-10"></div>

                            {/* Floating Badge - Top */}
                            <div className="absolute -top-4 -right-2 z-20 bg-white shadow-lg rounded-md px-3 py-2 border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 bg-gradient-to-br from-[#F79952] to-[#f59e0b] rounded-md flex items-center justify-center">
                                        <FiAward className="text-white text-xs" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-800 outfit">Top Rated</p>
                                        <p className="text-[9px] text-gray-500 work">Academy 2024</p>
                                    </div>
                                </div>
                            </div>

                            {/* Video Container */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-md overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#41bfb8]/20 via-transparent to-[#F79952]/20 rounded-md"></div>

                                <div className="relative aspect-video m-[2px] rounded-md overflow-hidden bg-gray-900">
                                    <iframe
                                        className="absolute border-none top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/FtsFZkw2h-A?si=OcWlPICdVmdLQE14"
                                        title="BD Calling Academy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Bottom Stats Badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white shadow-lg rounded-md px-4 py-2 border border-gray-100 flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#41bfb8] to-[#2dd4bf] rounded-md flex items-center justify-center">
                                        <HiOutlineAcademicCap className="text-white text-base" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 outfit">4.9/5</p>
                                        <p className="text-[9px] text-gray-500 work">Rating</p>
                                    </div>
                                </div>
                                <div className="w-px h-6 bg-gray-200"></div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#F79952] to-[#f59e0b] rounded-md flex items-center justify-center">
                                        <LuGraduationCap className="text-white text-base" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 outfit">100%</p>
                                        <p className="text-[9px] text-gray-500 work">Job Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
