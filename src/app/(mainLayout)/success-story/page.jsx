 "use client";

import SectionHeading from "@/components/sheard/SectionHeading";
import React, { useEffect, useState } from "react";
 

const SuccessHistoryPage = () => {
  const [activeFilter, setActiveFilter] = useState("journey");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoData = {
    journey: [
      {
        id: "iqiNOsO7Yp8",
        title: "From Student to Professional - Sarah's Journey",
      },

      {
        id: "_6cBwuHNKgI",
        title: "Career Transformation - John's Success Story",
      },
      {
        id: "2GqZBsRqaf0",
        title: "From Student to Professional - Sarah's Journey",
      },
      { id: "5RrnH4paPSg", title: "Learning to Earning - Maria's Experience" },
      {
        id: "0_FsHO7u5Pc",
        title: "Internship to Full-time - David's Progress",
      },
      {
        id: "MAesoykAUhc",
        title: "Internship to Full-time - David's Progress",
      },
    ],
    feedback: [
      { id: "ymFUAUDfHIo", title: "Student Feedback - Course Experience" },
      {
        id: "2GqZBsRqaf0",
        title: "From Student to Professional - Sarah's Journey",
      },
      { id: "5HQLWiQP5-E", title: "Student Feedback - Course Experience" },
    ],
  };

  const activeVideos = videoData[activeFilter];

  return (
    <>
      <div className="lg:bg-white bg-[#ecfcfb] md:py-6 ">
        <div className="bg-[#ecfcfb] py-8 md:pt-12 container mx-auto rounded-2xl">
          <div className="">
            <SectionHeading
              title={"Success Stories"}
              description={
                "At Bdcalling Academy, our students gain more than just skills — they gain opportunities. Through real client project-based training, they graduate fully prepared for real-world challenges. Many go on to secure roles within our company, supported by hands-on learning that sets them apart. Every success story begins with a single step, and we’re here to guide you every step of the way."
              }
            />

            {/* Filter Buttons */}
            <div className="flex justify-center my-8 gap-4">
              {["journey", "feedback"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`fieldset-label py-2 px-3 btn rounded-md dark:border-gray-300 dark:shadow-none  ${
                    activeFilter === type
                      ? "bg-[#41bfb8] text-white"
                      : "bg-[#ecfcfb] dark:text-gray-500"
                  }`}
                >
                  {type === "journey" ? "Student Story" : "Student Feedback"}
                </button>
              ))}
            </div>

            {/* Video Thumbnails */}
            <div className="my-8">
              <div className="flex justify-center flex-wrap gap-4">
                {activeVideos.map((video, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-full max-w-md"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <iframe
                      width="100%"
                      height="275"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-xl w-full pointer-events-none"
                    ></iframe>
                    {/* <p className="mt-2 text-center text-sm font-medium crd">{video.title}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4 transition-opacity duration-300 ease-in-out">
          <div className="relative w-full max-w-4xl transform fade-zoom-in">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute cursor-pointer -top-4 -right-4 bg-white rounded-full px-4 py-[10px] shadow hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-xl w-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style>{`
        @keyframes fadeZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-zoom-in {
          animation: fadeZoomIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default SuccessHistoryPage;
