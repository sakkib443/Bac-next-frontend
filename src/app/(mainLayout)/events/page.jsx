"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const seminars = [
  {
    id: 1,
    speaker: "Sakibul Hasan",
    title: "MERN Stack Career Roadmap",
    time: "15:30 PM",
    image: "https://i.ibb.co/XZ78JQ9f/Mern-card.jpg",
    type: "Seminar",
    location: "Offline",
    startsIn: "Start In A Week",
  },
  {
    id: 2,
    speaker: "Sheikh Sakibul",
    title: "Career Of Wordpress",
    time: "16:00 PM",
    image: "https://i.ibb.co/GvS6k4FJ/DM-caed.jpg",
    type: "Seminar",
    location: "Offline",
    startsIn: "Start In A Week",
  },
  {
    id: 3,
    speaker: "Ashraf Hossain",
    title: "Digital Marketing Trends 2025",
    time: "16:00 PM",
    image: "https://i.ibb.co/GvS6k4FJ/DM-caed.jpg",
    type: "Seminar",
    location: "Online",
    startsIn: "Start In A Week",
  },
  {
    id: 4,
    speaker: "Abu Sayeed",
    title: "Graphics Design With AI",
    time: "16:00 PM",
    image: "https://i.ibb.co/zWvWjS9X/GD-Card-1.jpg",
    type: "Seminar",
    location: "Offline",
    startsIn: "Start In A Week",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#ecfcfb]">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#e8f9f9] via-white to-[#fff8f0] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(65,191,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,191,184,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#41bfb8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#F79952]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-16 py-10 lg:py-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-[#F79952]/10 border border-[#F79952]/20 rounded-full">
              <HiOutlineCalendarDays className="text-[#F79952] text-base" />
              <span className="text-xs font-medium text-gray-700 work">Upcoming Events</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold outfit text-gray-800 mb-2">
              Events & <span className="text-[#41bfb8]">Seminars</span>
            </h1>
            <p className="text-gray-500 work text-sm leading-relaxed">
              Connect with industry experts and gain practical insights into the latest tech trends.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="container mx-auto px-4 lg:px-16 pb-12">
        <div className="space-y-3">
          {seminars.map((event, index) => (
            <div
              key={event.id}
              className="bg-[#E1FCF9] rounded-lg border border-gray-200 py-4 px-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-6">
                {/* Number */}
                <span className="text-2xl font-bold text-[#41bfb8] outfit w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Image */}
                <div className="relative w-24 h-16 rounded-md overflow-hidden shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 work">
                      {event.location}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs text-[#41bfb8] font-medium work">
                      {event.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 outfit">
                    {event.title}
                  </h3>

                  {/* Speaker */}
                  <p className="text-sm text-gray-500 work">
                    {event.speaker}
                  </p>
                </div>

                {/* Time & Start */}
                <div className="text-center hidden md:block">
                  <p className="text-lg font-semibold text-gray-700 outfit">
                    {event.time}
                  </p>
                  <p className="text-sm text-gray-400 work">
                    {event.startsIn}
                  </p>
                </div>

                {/* Register Button */}
                <a
                  href={`https://wa.me/8801321231802?text=${encodeURIComponent(
                    `আমি "${event.title}" সেমিনারটিতে যোগ দিতে চাই।`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-gray-300 text-gray-600 hover:bg-[#41bfb8] hover:text-white hover:border-[#41bfb8] font-medium text-sm rounded-md transition-all"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
