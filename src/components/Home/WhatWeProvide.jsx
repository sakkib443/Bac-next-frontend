import { FcCollaboration } from "react-icons/fc";

const WhatWeProvide = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-1 mt-12 mb-4">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={"Learning Approach "}
          description={
            "We're committed to elevating your learning journey by providing special features and support that empower you to grow without limitations."
          }
        />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 ">
          {/* Card 1 */}
          <div
            className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#f0fdfc] rounded-2xl  cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#e0f7f5]"
          >
            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Job Placement Support 🎯
            </h2>
            <p className="work crd text-sm md:text-base">
              At Bdcalling Academy, we offer more than just technical skills.
              Our Soft Skills & CV Class is designed to help you pursue your
              dream career. Above all, our dedicated placement support team
              provides personalized advice, interview preparation, and valuable
              industry connections to help you secure your desired position. So
              why wait? Take the next step in your career journey with us at
              Bdcalling Academy!
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#fafaee] rounded-2xl  cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3d6]"
          >
            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Lifetime Support 🚀
            </h2>
            <p className="work crd text-sm md:text-base">
              At Bdcalling Academy, we’re committed to building lasting
              relationships with our students. Our support doesn’t end when the
              course finishes—our dedicated team is available 24/7, even long
              after you’ve completed your training. Through personalized
              guidance and continuous support, we help you overcome career
              challenges and grow every day.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#ecfcfb] rounded-2xl  cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#d7f7f6]"
          >
            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Get Certification 🏅
            </h2>
            <p className="work crd text-sm md:text-base">
              Upon successfully completing your course at Bdcalling Academy,
              you'll earn an industry-recognized certificate that validates your
              skills and strengthens your professional credibility. This
              certification will help you stand out in the job market and give
              you the confidence to take the next step in your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
