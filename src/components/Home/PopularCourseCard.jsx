"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoMdCall } from "react-icons/io";
import { LuBookOpenCheck } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "../sheard/CourseCard";

const PopularCourseCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Redux state
  const { items: courseCategories = [] } = useSelector((state) => state.categories);
  const { courses = [] } = useSelector((state) => state.courses);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setVisibleItems(1);
      else setVisibleItems(3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const visibleCourses = filteredCourses.slice(startIndex, startIndex + visibleItems);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.max(filteredCourses.length - visibleItems, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleItems >= filteredCourses.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto mt-12 w-full">
      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 pb-8 pr-6">
        {courseCategories.map((cat) => (
          <label
            key={cat.id}
            className={`fieldset-label btn rounded-md px-3 py-2 dark:border-gray-300 dark:shadow-none ${
              selectedCategory === cat.name ? "bg-[#41bfb8] text-white" : "bg-[#ecfcfb] dark:text-gray-500 border border-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(cat.name);
              setStartIndex(0); 
            }}
          >
            {cat.name}
          </label>
        ))}
      </div>

      {/* Courses Slider */}
      <div className="flex items-center justify-center relative">
        <button
          onClick={handlePrev}
          className="absolute cursor-pointer md:left-0 -left-4 lg:left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white transition duration-500"
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-4 lg:right-10 cursor-pointer top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white border border-gray-300 transition duration-500"
        >
          <FaChevronRight size={18} />
        </button>

        <div className="flex flex-wrap gap-8 justify-center transition-all duration-700 ease-in-out md:px-12">
          {visibleCourses.map((course) => <CourseCard key={course.id} course={course} />
     
          )}
        </div>
      </div>
    </div>
  );

};

export default PopularCourseCard;
