"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../sheard/SectionHeading";
 
 

const Concerns = () => {
  const images = [
    // 🟢 Our Concerns
    { id: 1, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/1_softvence.png", link: "https://softvence.agency/" },
    { id: 2, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/2_sm_technology.png", link: "https://smtech24.com/" },
    { id: 3, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/3_backbencher_studio.png", link: "https://backbencher.studio/" },
    { id: 4, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/4_sparktech.png", link: "https://www.sparktech.agency/" },
    { id: 5, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/5_scaleup.png", link: "https://scaleupadsagency.com/" },
    { id: 6, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/6_Data-insight.png", link: "https://www.facebook.com/profile.php?id=61568359432521" },
    { id: 7, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/1738666687308.jpeg", link: "https://www.joinventureai.com/" },
    { id: 8, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/zenex.png", link: "https://zenexcloud.com/" },
    { id: 9, category: "Our Concern", src: "/images/Our Working Partner Images/Our Concerns all images/bdcalling.png", link: "https://bdcalling.com/" },

    // 🟣 Collaborations With
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

    // Members Of
    { id: 48, category: "Member Of", src: "/images/Our Working Partner Images/Members of all images/1_basis.png" },
    { id: 49, category: "Member Of", src: "/images/Our Working Partner Images/Members of all images/2_bangladesh_computer_samity.png" },
    { id: 50, category: "Member Of", src: "/images/memberOf/member og -bitm.webp" },
    { id: 51, category: "Member Of", src: "/images/Our Working Partner Images/Members of all images/british-council-logo.svg--BugRp5Z9.png" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Our Concern");
  const filteredImages = images.filter((image) => image.category === selectedCategory);

  return (
    <div className="bg-white py-12 relative">
      <div
        className="relative container border border-gray-200 bg-cover mx-auto py-12 px-6 rounded-2xl"
        style={{ backgroundImage: `url('/images/bg1.png')` }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('')`,
          }}
        ></div>

        <div className="relative z-10">
          <SectionHeading title="Our Working Partner" />

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 work pl-6 pb-8 pr-6 mt-12">
            {["Our Concern", "Colaboration With", "Member Of"].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-md shadow-md transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#41bfb8] text-white"
                    : "bg-[#ecfcfb] text-gray-600 hover:bg-[#d5f8f5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredImages.length > 0 ? (
                  filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className="flex items-center justify-center  "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <div className="w-full max-w-[200px]    flex justify-center items-center p-4 shadow-sm border border-gray-200 bg-white rounded-xl hover:scale-105 transition-transform duration-300">
                          <Image
                            src={image.src}
                            alt={`Image ${image.id}`}
                            width={200}
                            height={150}
                            className="object-contain  w-[235px] h-[100px] "
                            priority
                          />
                        </div>
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center col-span-full text-gray-500">
                    No images to display. Select a category.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concerns;
