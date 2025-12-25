"use client";

import React, { useEffect, useState } from 'react';
import PopularCourseCard from './PopularCourseCard';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { LuSparkles } from 'react-icons/lu';
import Link from 'next/link';

const PopularCourse = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='relative bg-gradient-to-b from-white via-gray-50/50 to-white py-16 lg:py-20 overflow-hidden'>
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#41bfb8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F79952]/5 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(65,191,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(65,191,184,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#41bfb8]/10 to-[#F79952]/10 border border-[#41bfb8]/20 rounded-full">
            <HiOutlineAcademicCap className="text-[#41bfb8] text-lg" />
            <span className="text-sm font-medium text-gray-700 work">Most Popular Courses</span>
          </div>

          {/* Title */}
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold outfit'>
            <span className="text-gray-800">Explore Our </span>
            <span className="bg-gradient-to-r from-[#41bfb8] to-[#38a89d] bg-clip-text text-transparent">Popular Courses</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-500 work text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            At Bdcalling Academy, we provide skill-based training programs customized to meet the evolving needs of today's job market.
            Whether you're just beginning your career or looking to upgrade your professional expertise,
            our flexible learning options are designed to help you stay competitive.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#41bfb8]/10 rounded-md flex items-center justify-center">
                <LuSparkles className="text-[#41bfb8] text-lg" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-800 outfit">50+</p>
                <p className="text-xs text-gray-500 work">Courses</p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#F79952]/10 rounded-md flex items-center justify-center">
                <HiOutlineAcademicCap className="text-[#F79952] text-lg" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-800 outfit">4,200+</p>
                <p className="text-xs text-gray-500 work">Students</p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#41bfb8]/10 rounded-md flex items-center justify-center">
                <span className="text-[#41bfb8] font-bold text-sm">92%</span>
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-800 outfit">Success</p>
                <p className="text-xs text-gray-500 work">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Slider */}
        <PopularCourseCard />

        {/* Bottom CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white rounded-md font-semibold work hover:shadow-xl hover:shadow-[#41bfb8]/30 transition-all duration-300 group"
          >
            <span>View All Courses</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-3 text-sm text-gray-400 work">
            Join thousands of successful learners today
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;