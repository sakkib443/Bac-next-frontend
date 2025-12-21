 
import Image from "next/image";

const messages = [
  {
    name: "Muhammad Monir Hossain",
    title: "CEO at Betopia Group",
    heading: "Moving forward, limitless – together",
    message:
      "As part of Betopia Group, Bdcalling Academy carries forward the belief that true prosperity is built on empowering people. We are committed to expanding learning horizons, supporting youth employment, and bridging the gap between ambition and achievement — so everyone can move forward with shared purpose and limitless potential.",
    img: "/images/ceo.jpg",
  },
  {
    name: "Sabina Akter",
    title: "Chairman at Betopia Group",
    heading: "True growth starts with knowledge and purpose",
    message:
      "At Bdcalling Academy, we believe education is the foundation for unlocking the limitless potential within every learner. Our vision is to nurture confident, skilled individuals who can transform not only their own futures but also contribute meaningfully to society.",
    img: "/images/chirman mam.jpg",
  },
];

const CeoMessage = () => {
  return (
    <div className="bg-[#ECFCFB]">
      <div
        style={{ backgroundImage: `url(" ")` }}
        className="container mx-auto bg-cover px-6 md:px-12 py-16 md:py-20 rounded-md"
      >
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-16">
          {messages.map((msg, index) => (
            <div key={index} className="flex flex-col items-center max-w-lg ">
              <div className="w-full h-80 overflow-hidden rounded-md mb-6 border border-gray-200">
                <img src={msg.img} alt={msg.name} className=" rounded-md" />
                <Image src={msg.img} alt={msg.name} height={100} width={100} />
              </div>

              <div>
                <h1 className="outfit text-3xl md:text-4xl ">{msg.name}</h1>
                <h3 className="work text-lg md:text-xl mb-2">{msg.title}</h3>

                <h3 className="outfit-semibold text-xl mb-2">{msg.heading}</h3>
                <p className="work text-sm md:text-base text-justify">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
