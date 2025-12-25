"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlinePlayCircle, HiOutlineSparkles, HiXMark } from "react-icons/hi2";
import { LuArrowRight, LuPlay } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const videoData = [
  { id: "_6cBwuHNKgI", title: "Career Transformation - Success Story", name: "Shakil Ahmed" },
  { id: "iqiNOsO7Yp8", title: "From Student to Professional", name: "Sarah Khan" },
  { id: "2GqZBsRqaf0", title: "Web Development Journey", name: "Rifat Hassan" },
  { id: "zIyMHMoQN0w", title: "Student Feedback - Course Experience", name: "Nadia Islam" },
];

const SuccesHistory = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ecfcfb] via-white to-[#ecfcfb]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#41bfb8]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F79952]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm">
            <HiOutlineSparkles className="text-[#F79952] text-lg" />
            <span className="text-sm font-medium text-gray-700 work">Real Stories, Real Success</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold outfit text-gray-800">
            Our <span className="text-[#41bfb8]">Success Stories</span>
          </h2>
          <p className="mt-3 text-gray-500 work text-sm sm:text-base max-w-2xl mx-auto">
            At Bdcalling Academy, our students grow with confidence, help others, and build real careers.
            Their success inspires us to keep creating opportunities.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <FaStar key={i} className="text-[#F79952] text-sm" />
                ))}
              </div>
              <span className="text-sm text-gray-600 work">4.9/5 Rating</span>
            </div>
            <div className="w-px h-5 bg-gray-300"></div>
            <span className="text-sm text-gray-600 work"><strong className="text-[#41bfb8]">500+</strong> Success Stories</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videoData.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(video)}
              className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Video Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300 group-hover:bg-[#41bfb8]">
                      <LuPlay className="w-6 h-6 text-[#41bfb8] group-hover:text-white ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold outfit text-base mb-1 line-clamp-1">{video.title}</p>
                    <p className="text-white/80 text-sm work">{video.name}</p>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#F79952] text-white text-xs font-medium rounded-md">
                    Student Story
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link
            href="/success-story"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#41bfb8] hover:bg-[#38a89d] text-white rounded-md font-semibold work hover:shadow-xl hover:shadow-[#41bfb8]/30 transition-all duration-300 group"
          >
            <span>View All Success Stories</span>
            <LuArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-3 text-sm text-gray-400 work">
            Be the next success story
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <HiXMark className="w-6 h-6" />
            </button>

            {/* Video */}
            <div className="relative rounded-md overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 text-center">
              <p className="text-white font-semibold outfit text-lg">{selectedVideo.title}</p>
              <p className="text-white/70 text-sm work">{selectedVideo.name}</p>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SuccesHistory;
