import Link from "next/link";
import AboutHero from "@/components/Aboutpage/AboutHero";
import Count from "@/components/Aboutpage/Count";
import Mission from "@/components/Aboutpage/Mission";
import CeoMessage from "@/components/Aboutpage/CeoMessage";
import Value from "@/components/Aboutpage/Value";


const AboutPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // top-left corner
  // }, [pathname]);
  return (
    <div>
      <div>
        <div
          className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl "
          style={{
            writingMode: "vertical-rl",
            transform: "translateY(-50%) rotate(180deg)",
          }}
        >
          <Link href="/events">
            <h3 className=" outfit-semibold uppercase">Join Seminar</h3>
          </Link>
        </div>
      </div>
      <AboutHero />

      <Count />
      <CeoMessage />
      <Mission />
      <Value />
      {/* <AboutGallery /> */}
    </div>
  );
};

export default AboutPage;
