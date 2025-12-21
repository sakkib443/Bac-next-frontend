
 
import { LuAlarmClockMinus } from "react-icons/lu";
import { FiTrendingUp, FiTarget, FiBookOpen, FiUsers } from "react-icons/fi";
 
const Mission = () => {
  return (
    <div className="bg-[#ecfcfb] py-16">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 border border-gray-200 py-1 px-2 pr-5 rounded-4xl work w-fit crd">
          <div className=" rounded-full p-3 bg-[#D8F7F6]">
            <LuAlarmClockMinus />
          </div>
          <p>The Goal We Breath</p>
        </div>
        <h1 className="outfit-semibold lg:text-[40px] md:text-[30px] text-4xl my-2 md:my-0 crd">
          Our Mission
          <span className="cpr"> & Vision</span> <br />
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-12 bg-[] container mx-auto bg-[#e8f9f9] py-6 rounded-2xl">
        <div className="lg:w-5/12">
          <div className="flex justify-end ">
            {" "}
            <img className="md:w-[650px] px-4 md:px-0  " src="/images/seminar02.png" alt="seminar02" />
             
          </div>
        </div>
        <div className="lg:w-6/12 container">
          <div className="lg:w-[550px] px-6 md:px-0">
            <div className="mt-6  lg:w-xl crd work flex flex-col gap-4">
              {/* 1 */}
              <div className="flex  gap-4 border border-gray-300 px-6 py-3 rounded-md hover:shadow-lg transition duration-300">
                <div className="min-w-[60px] h-[60px] flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
                  <FiTrendingUp size={28} />
                </div>
                <p className="text-base leading-relaxed">
                  To be the world’s leading IT training platform, developing a
                  skilled workforce with a diverse range of technical expertise
                  to shape the future of the global tech industry.
                </p>
              </div>

              {/* 2 */}
              <div className="flex gap-4 border border-gray-300 px-6 py-3 rounded-md hover:shadow-lg transition duration-300">
                <div className="min-w-[60px] h-[60px] flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
                  <FiTarget size={28} />
                </div>
                <p className="text-base leading-relaxed">
                  Our goal is to create over 5,000 job opportunities by 2030,
                  actively contributing to building the Digital Bangladesh and
                  helping to lower the nation's unemployment rate.
                </p>
              </div>

              {/* 3 */}
              <div className="flex gap-4 border border-gray-300 px-6 py-3 rounded-md hover:shadow-lg transition duration-300">
                <div className="min-w-[60px] h-[60px] flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
                  <FiBookOpen size={28} />
                </div>
                <p className="text-base leading-relaxed">
                  We’re committed to equipping individuals with practical
                  technical skills, developing the core foundation for career
                  success in a rapidly changing tech world.
                </p>
              </div>

              {/* 4 */}
              <div className="flex gap-4 border border-gray-300 px-6 py-3 rounded-md hover:shadow-lg transition duration-300">
                <div className="min-w-[60px] h-[60px] flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
                  <FiUsers size={28} />
                </div>
                <p className="text-base leading-relaxed">
                  We provide industry-focused training that opens up a variety
                  of IT career paths, empowering more people to excel in the IT
                  sector and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
