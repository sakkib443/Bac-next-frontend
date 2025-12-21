"use client";

import React, { useState } from "react";
 
import Link from "next/link";
import SectionHeading from "../sheard/SectionHeading";
 
 

const videoData = [
  { id: "_6cBwuHNKgI", title: "Career Transformation - John's Success Story" },
  {
    id: "iqiNOsO7Yp8",
    title: "From Student to Professional - Sarah's Journey",
  },
  {
    id: "2GqZBsRqaf0",
    title: "From Student to Professional - Sarah's Journey",
  },
  { id: "zIyMHMoQN0w", title: "Student Feedback - Course Experience" },
];

const SuccesHistory = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="lg:bg-white bg-[#ecfcfb] md:py-12">
        <div className="bg-[#ecfcfb] py-8 md:pt-12 container mx-auto rounded-2xl">
          <div className="lg:px-12">
            <SectionHeading
              title={"Success Stories"}
              description={
                "At Bdcalling Academy, our students grow with confidence, help others, and build real careers. Their success inspires us to keep creating opportunities and changing lives through learning."
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-44 md:px-4 mt-8">
              {videoData.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedVideo(video)}
                  className="cursor-pointer w-full"
                >
                  <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/success-story">
            <div className="text-center mt-10">
              <button className="bg-[#0a98a0] hover:bg-[#088187] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform shadow-lg hover:shadow-xl cursor-pointer">
                View More
              </button>
            </div>
          </Link>
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

export default SuccesHistory;
