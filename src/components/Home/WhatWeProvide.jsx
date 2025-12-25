"use client";

import { useEffect, useState } from "react";
import { LuTarget, LuRocket, LuAward, LuArrowRight } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi2";
import Link from "next/link";

const features = [
  {
    icon: LuTarget,
    title: "Job Placement Support",
    emoji: "🎯",
    description: "At Bdcalling Academy, we offer more than just technical skills. Our Soft Skills & CV Class is designed to help you pursue your dream career. Our dedicated placement support team provides personalized advice, interview preparation, and valuable industry connections.",
    color: "#41bfb8",
    bgColor: "#f0fdfc"
  },
  {
    icon: LuRocket,
    title: "Lifetime Support",
    emoji: "🚀",
    description: "Our support doesn't end when the course finishes—our dedicated team is available 24/7, even long after you've completed your training. Through personalized guidance and continuous support, we help you overcome career challenges and grow every day.",
    color: "#F79952",
    bgColor: "#fffbeb"
  },
  {
    icon: LuAward,
    title: "Get Certification",
    emoji: "🏅",
    description: "Upon successfully completing your course, you'll earn an industry-recognized certificate that validates your skills and strengthens your professional credibility. This certification will help you stand out in the job market.",
    color: "#8B5CF6",
    bgColor: "#f5f3ff"
  }
];

const WhatWeProvide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#41bfb8]/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#41bfb8]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F79952]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#41bfb8]/10 to-[#F79952]/10 border border-[#41bfb8]/20 rounded-full">
            <HiOutlineSparkles className="text-[#41bfb8] text-lg" />
            <span className="text-sm font-medium text-gray-700 work">Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold outfit text-gray-800">
            What We <span className="text-[#41bfb8]">Provide</span>
          </h2>
          <p className="mt-3 text-gray-500 work text-sm sm:text-base max-w-2xl mx-auto">
            We're committed to elevating your learning journey with special features and support that empower you to grow without limitations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200 rounded-md p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 hover:border-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 w-0 group-hover:w-full h-1 rounded-t-md transition-all duration-500"
                style={{ backgroundColor: feature.color }}
              ></div>

              {/* Background Gradient on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"
                style={{ background: `linear-gradient(135deg, ${feature.bgColor}, transparent)` }}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <feature.icon className="text-2xl" style={{ color: feature.color }} />
                </div>

                {/* Title */}
                <h3 className="outfit-semibold text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  {feature.title}
                  <span>{feature.emoji}</span>
                </h3>

                {/* Description */}
                <p className="work text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-sm font-medium transition-colors duration-300 group-hover:gap-2" style={{ color: feature.color }}>
                  <span className="work">Learn More</span>
                  <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Corner Decoration */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at bottom right, ${feature.color}, transparent)`,
                  borderRadius: '0 0 0.375rem 0'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#41bfb8] text-[#41bfb8] rounded-md font-semibold work hover:bg-[#41bfb8] hover:text-white transition-all duration-300 group"
          >
            <span>Learn More About Us</span>
            <LuArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
