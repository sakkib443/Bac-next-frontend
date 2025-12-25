"use client";

import { HiOutlineSparkles } from "react-icons/hi2";
import { LuRocket, LuTrendingUp, LuTarget, LuUsers, LuAward } from "react-icons/lu";

const valueItems = [
  {
    icon: LuRocket,
    title: "Pioneers",
    subtitle: "Empowering learners with real-world skills.",
    description: "We focus on practical, industry-relevant training that prepares individuals for successful careers in the tech world.",
    color: "#41bfb8",
  },
  {
    icon: LuTrendingUp,
    title: "Growth",
    subtitle: "Building a future-ready workforce.",
    description: "We believe in continuous learning and personal development, encouraging students to expand their potential and adapt to the evolving digital landscape.",
    color: "#F79952",
  },
  {
    icon: LuTarget,
    title: "Impact",
    subtitle: "Creating meaningful change through learning.",
    description: "We measure our success by the impact our training has on learners' careers and their contributions to the tech ecosystem.",
    color: "#8B5CF6",
  },
  {
    icon: LuUsers,
    title: "Community",
    subtitle: "Learning together, winning together.",
    description: "We foster a supportive environment where collaboration and shared learning drive collective success.",
    color: "#EC4899",
  },
  {
    icon: LuAward,
    title: "Excellence",
    subtitle: "Setting the standard for digital skill sets.",
    description: "We are committed to delivering high-quality, cutting-edge training that empowers learners to innovate and lead in the tech industry.",
    color: "#10B981",
  },
];

const Value = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <HiOutlineSparkles className="text-[#41bfb8] text-lg" />
            <span className="text-sm font-medium text-gray-700 work">Core Values That Define Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold outfit text-gray-800">
            Our Values <span className="text-[#F79952]">& Ethics</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="text-2xl" style={{ color: item.color }} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 outfit mb-1">{item.title}</h3>

              {/* Subtitle */}
              <p
                className="text-sm font-medium mb-3 work"
                style={{ color: item.color }}
              >
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500 work leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div
                className="w-12 h-1 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
