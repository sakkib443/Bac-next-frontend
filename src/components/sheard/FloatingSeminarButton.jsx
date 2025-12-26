"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const FloatingSeminarButton = () => {
  const { language } = useLanguage();
  const fontClass = language === "bn" ? "hind-siliguri" : "outfit";

  return (
    <>
      <Link
        href="/events"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group"
      >
        <div
          className="animated-gradient-btn text-white py-2 px-3 rounded-r-lg shadow-lg hover:shadow-xl hover:shadow-[#41bfb8]/40 transition-all duration-300 hover:px-4 cursor-pointer"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className={`text-xs font-bold tracking-wider uppercase whitespace-nowrap ${fontClass}`}>
            {language === "bn" ? "সেমিনারে যোগদিন" : "Join our Seminar"}
          </span>
        </div>
      </Link>

      <style jsx>{`
        .animated-gradient-btn {
          background: linear-gradient(
            180deg,
            #41bfb8,
            #38a89d,
            #F79952,
            #e07832,
            #41bfb8
          );
          background-size: 100% 400%;
          animation: gradientFlow 12s ease infinite;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSeminarButton;
