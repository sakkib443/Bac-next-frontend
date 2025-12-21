 
import { LuBookOpenCheck } from "react-icons/lu";
import { LuAlarmClockMinus } from "react-icons/lu";
import { PiCertificateThin } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Link from "next/link";
 

const SeminarAndEvent = () => {
  return (
    <>
      <div
        className="flex lg:flex-row flex-col justify-center items-center gap-12 border crd border-gray-200 bg-cover  container mx-auto bg-[#e8f9f9] py-16 rounded-2xl"
        style={{ backgroundImage: `url("/images/bg1.png")` }}
      >
        <div className="lg:w-6/12">
          <div className="flex justify-end ">
            {" "}
            <img className="md:w-[650px] px-4 md:px-0  " src="/images/seminar02.png" alt="" />
          </div>
        </div>
        <div className="lg:w-6/12 container">
          <div className="lg:w-[550px] px-6 md:px-0">
            <div>
              <div className="flex items-center gap-2 border border-gray-200 py-1 px-2 pr-5 rounded-4xl work w-fit">
                <div className=" rounded-full p-3 bg-[#D8F7F6]">
                  <LuAlarmClockMinus />
                </div>
                <p>To know Us Better</p>
              </div>
              <h1 className="outfit-semibold lg:text-[40px] md:text-[30px] text-2xl my-2 md:my-0 ">
                Let's Explore the
                <span className="csd"> World of IT</span> <br />
              </h1>
              <p className="work crd mt-2">
                Whether you're a student or a working professional, our interactive seminars and industry events are crafted to educate, motivate, and equip you for a successful career in the tech industry. Gain valuable insights from experienced professionals, stay updated with emerging technology trends, and build the knowledge you need to thrive in today’s digital economy.
              </p>
            </div>

            <div className="mt-4">
              {/* Seminar Section */}
              <Link href="/events">
                <div className="border border-gray-300 py-4 hover:shadow-md px-4 rounded-md flex items-center gap-3 cursor-pointer transition-all duration-300">
                  <div className="rounded-full p-3 bg-[#D8F7F6] w-fit">
                    <PiCertificateThin className="text-5xl" />
                  </div>
                  <div>
                    <p className="outfit-semibold text-xl">Join Our Seminar</p>
                    <p className="work">
                      Unlock your potential with guidance from industry leaders.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Workshop Section */}
              <Link href="/events">
                <div className="border border-gray-300 py-4 px-4 hover:shadow-md rounded-md flex items-center gap-3 mt-4 cursor-pointer transition-all duration-300">
                  <div className="rounded-full p-3 bg-[#D8F7F6] w-fit">
                    <HiOutlineComputerDesktop className="text-5xl" />
                  </div>
                  <div>
                    <p className="outfit-semibold text-xl">Enjoy Our Events</p>
                    <p className="work">
                      Build your network through meaningful connections.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeminarAndEvent;
