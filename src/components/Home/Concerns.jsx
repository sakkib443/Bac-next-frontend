"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineBuildingOffice2, HiOutlineSparkles } from "react-icons/hi2";
import { LuHandshake, LuUsers } from "react-icons/lu";

const Concerns = () => {
  const [selectedCategory, setSelectedCategory] = useState("Our Concern");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    // Our Concerns
    { id: 1, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/1_softvence.png", link: "https://softvence.agency/" },
    { id: 2, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/2_sm_technology.png", link: "https://smtech24.com/" },
    { id: 3, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/3_backbencher_studio.png", link: "https://backbencher.studio/" },
    { id: 4, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/4_sparktech.png", link: "https://www.sparktech.agency/" },
    { id: 5, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/5_scaleup.png", link: "https://scaleupadsagency.com/" },
    { id: 6, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/6_Data-insight.png", link: "https://www.facebook.com/profile.php?id=61568359432521" },
    { id: 7, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/1738666687308.jpeg", link: "https://www.joinventureai.com/" },
    { id: 8, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/zenex.png", link: "https://zenexcloud.com/" },
    { id: 9, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/bdcalling.png", link: "https://bdcalling.com/" },

    // Collaborations
    { id: 10, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/1_bteb.png" },
    { id: 11, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/2_ict.png" },
    { id: 12, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/3_iitu.png" },
    { id: 13, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/4_edge.png" },
    { id: 14, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/5_nsda.png" },
    { id: 15, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/6_dhaka_university.jpg" },
    { id: 16, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/7_crown_institute_of_business_and_technology.jpg" },
    { id: 17, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/8_eastern_eniversity.png" },
    { id: 18, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/9_jagannath_university.png" },
    { id: 19, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/10_dhaka_college.png" },
    { id: 20, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/11_united_international_university.png" },
    { id: 21, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/12_metropolitan_university.png" },
    { id: 22, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/13_north_south_university.png" },
    { id: 23, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/14_east_west_university.png" },
    { id: 24, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/15_smuct.png" },
    { id: 25, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/16_bracu.png" },
    { id: 26, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/17_polytechnic.png" },
    { id: 27, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/18_polytechnic.png" },
    { id: 28, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/19_polytechnic.jpg" },
    { id: 29, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/20_polytechnic.jpg" },
    { id: 30, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/21_polytechnic.png" },
    { id: 31, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/22_polytechnic.jpg" },
    { id: 32, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/23_polytechnic.png" },
    { id: 33, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/24_polytechnic.png" },
    { id: 34, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/25_polytechnic.png" },
    { id: 35, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/26_polytechnic.png" },
    { id: 36, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/27_polytechnic.jpg" },
    { id: 37, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/28_polytechnic.png" },
    { id: 38, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/29_polytechnic.png" },
    { id: 39, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/30_polytechnic.png" },
    { id: 40, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/31_polytechnic.jpg" },
    { id: 41, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/32_polytechnic.png" },
    { id: 42, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/33_polytechnic.jpg" },
    { id: 43, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/34_polytechnic.png" },
    { id: 44, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/35_polytechnic.jpg" },
    { id: 45, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/36_polytechnic.jpg" },
    { id: 46, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/37_polytechnic.png" },
    { id: 47, category: "Colaboration With", src: "/images/Our Working Partner Images/Working with all images/38_polytechnic.png" },

    // Members
    { id: 48, category: "Member Of", src: "/images/Our Working Partner Images/Members of all images/1_basis.png" },
    { id: 49, category: "Member Of", src: "/images/Our Working Partner Images/Members of all images/2_bangladesh_computer_samity.png" },
    { id: 50, category: "Member Of", src: "/images/memberOf/member og -bitm.webp" },
    { id: 51, category: "Member Of", src: "/images/Our Working Partner Images/Members of all images/british-council-logo.svg--BugRp5Z9.png" },
  ];

  const categories = [
    { name: "Our Concern", icon: HiOutlineBuildingOffice2, count: 9 },
    { name: "Colaboration With", icon: LuHandshake, count: 38 },
    { name: "Member Of", icon: LuUsers, count: 4 },
  ];

  const filteredImages = images.filter((image) => image.category === selectedCategory);

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#41bfb8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F79952]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#41bfb8]/10 to-[#F79952]/10 border border-[#41bfb8]/20 rounded-full">
            <HiOutlineSparkles className="text-[#41bfb8] text-lg" />
            <span className="text-sm font-medium text-gray-700 work">Trusted By Industry Leaders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold outfit text-gray-800">
            Our <span className="text-[#41bfb8]">Working Partners</span>
          </h2>
          <p className="mt-3 text-gray-500 work text-sm sm:text-base max-w-2xl mx-auto">
            We collaborate with leading organizations, universities, and institutions to provide the best learning experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.name)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-md font-medium text-sm work transition-all duration-300 overflow-hidden ${selectedCategory === cat.name
                ? "text-white shadow-lg shadow-[#41bfb8]/30"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#41bfb8]/50 hover:text-[#41bfb8]"
                }`}
            >
              {selectedCategory === cat.name && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#41bfb8] to-[#38a89d]"></span>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <cat.icon className="text-lg" />
                {cat.name}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${selectedCategory === cat.name ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {cat.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <a
                  href={image.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#41bfb8]/30 hover:-translate-y-1">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#41bfb8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Fixed Size Container for Logo */}
                    <div className="w-full h-24 p-4 flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={`Partner ${image.id}`}
                        width={150}
                        height={80}
                        className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 work">No partners to display.</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-100 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#41bfb8] outfit">50+</p>
            <p className="text-sm text-gray-500 work">Partners</p>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#F79952] outfit">30+</p>
            <p className="text-sm text-gray-500 work">Universities</p>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#8B5CF6] outfit">10+</p>
            <p className="text-sm text-gray-500 work">Govt. Organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concerns;
