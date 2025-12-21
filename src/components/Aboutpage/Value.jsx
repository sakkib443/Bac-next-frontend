import React from "react";
import { FcCollaboration } from "react-icons/fc";
import { LuAlarmClockMinus } from "react-icons/lu";
 
const valueItems = [
  {
    title: "Pioneers",
    subtitle: "Empowering learners with real-world skills.",
    description:
      "We focus on practical, industry-relevant training that prepares individuals for successful careers in the tech world.",
    bgColor: "#f0fdfc",
    hoverColor: "#e0f7f5",
  },
  {
    title: "Growth",
    subtitle: "Building a future-ready workforce.",
    description:
      "We believe in continuous learning and personal development, encouraging students to expand their potential and adapt to the evolving digital landscape.",
    bgColor: "#fafaee",
    hoverColor: "#f3f3d6",
  },
  {
    title: "Impact",
    subtitle: "Creating meaningful change through learning.",
    description:
      "We measure our success by the impact our training has on learners’ careers and their contributions to the tech ecosystem.",
    bgColor: "#ecfcfb",
    hoverColor: "#d7f7f6",
  },
  {
    title: "Community",
    subtitle: "Learning together, winning together.",
    description:
      "We foster a supportive environment where collaboration and shared learning drive collective success.",
    bgColor: "#f0fdfc",
    hoverColor: "#e0f7f5",
  },
  {
    title: "Excellence",
    subtitle: "Setting the standard for digital skill sets.",
    description:
      "We are committed to delivering high-quality, cutting-edge training that empowers learners to innovate and lead in the tech industry.",
    bgColor: "#fafaee",
    hoverColor: "#f3f3d6",
  },
];

const Value = () => {
  return (
    <div className="bg-[#ecfcfb] pb-5">
      <div
        className=" mx-auto px-4 sm:px-6 lg:px-24 shadow-md bg-cover  container py-12 rounded-md"
        style={{ backgroundImage: `url(" ")` }}
      >
        <div className="flex flex-col  justify-center items-center">
          <div className="flex items-center gap-2 border border-gray-200 py-1 px-2 pr-5 rounded-4xl work w-fit crd">
            <div className=" rounded-full p-3 bg-[#D8F7F6]">
              <LuAlarmClockMinus />
            </div>
            <p>Core Values That Define Us</p>
          </div>
          <h1 className="outfit-semibold lg:text-[40px] md:text-[30px] text-4xl my-2 md:my-0 crd">
            Our Values
            <span className="cpr"> & Ethics </span> <br />
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row  justify-center gap-6 my-8">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-8 md:px-8 md:py-10 lg:px-4 lg:w-72   border-b lg:border-r border-gray-200  lg:py-6 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
            >
              <FcCollaboration className="text-5xl md:text-6xl" />
              <h2 className="outfit-semibold my-3 text-xl md:text-3xl csd text-black">
                {item.title}
              </h2>
              <h3 className="outfit-semibold text-base md:text-xl crd mb-2">
                {item.subtitle}
              </h3>
              <p className="work   text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;
