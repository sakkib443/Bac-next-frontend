 
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="pt-10 bg-[#ecfcfb] ">
      <div className="mx-auto container px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden ">
              <div className="h-full w-full">
                <Image
                  src="/images/aboutpage/02.jpg"
                  alt="02.jpg"
                  width={700}
                  height={400}
                />
              </div>
            </div>
            <div className="grid grid-rows-1 md:grid-rows-2 gap-6 md:gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/aboutpage/022.jpg"
                  alt="02.jpg"
                  width={700}
                  height={400}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/aboutpage/033.jpg"
                  alt="02.jpg"
                  width={700}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl outfit crd">
                Our Dream
                <span className="cpr"> Our Purpose</span>
              </h2>
              <p className="text-lg font-semibold csd capitalize  outfit-semibold">
                Hub of skill development. We are committed to building a skilled
                and digitally empowered Bangladesh.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-[#414042] work">
              <p>
                Our courses cover a wide range of in-demand IT fields, including
                web development, software development, networking,
                cybersecurity, database management, multimedia, programming,
                marketing, and design. Whether you’re a student, professional,
                entrepreneur, or homemaker looking to upskill, our flexible
                training programs are designed to help you achieve your goals.
              </p>
              <p>
                At Bdcalling Academy, we believe in practical learning,
                industry-relevant training, and a supportive community. Our
                mission is to bridge the skills gap, foster innovation, and
                create opportunities for the next generation of digital
                pioneers.
              </p>
              <p>
                We’re the best place to build your IT career! We offer a variety
                of expert-led courses to boost your tech skills and help you
                grow. Learn from real-world professionals, gain hands-on
                experience, and turn your dreams into reality. Start your
                journey with Bdcalling Academy today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
