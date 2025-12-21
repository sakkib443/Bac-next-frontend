"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const SingleMentor = () => {
  const { id } = useParams(); // <-- get dynamic id from URL
  const [mentor, setMentor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // wait until id is available

    fetch("/Data/Mentors.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load mentors file");
        return res.json();
      })
      .then((data) => {
        const foundMentor = data.find((m) => m.id.toString() === id);
        if (foundMentor) {
          setMentor(foundMentor);
          window.scrollTo(0, 0);
        } else {
          setError("Mentor not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching mentor:", err);
        setError("Failed to load mentor profile.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-6"></div>
          <h3 className="text-xl font-medium text-gray-800">
            Loading mentor profile...
          </h3>
          <p className="text-gray-600 mt-2">We're gathering all the details for you</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Mentor Not Found</h2>
          <p className="crd mb-6">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Back to Mentors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECFCFB] py-12">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 bg-[#E1FCF9] rounded-2xl shadow-xl p-6">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/3 outfit">
            <div className="relative w-full lg:h-[500px] overflow-hidden rounded-2xl lg:sticky lg:top-30">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                <h2 className="text-2xl font-bold text-white">{mentor?.name}</h2>
                <p className="csd outfit-semibold">
                  {mentor?.designation} {mentor?.subject && `• ${mentor.subject}`}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3 lg:p-6 pl-0">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="md:text-5xl text-4xl outfit font-bold text-gray-800">{mentor.name}</h3>
                  <p className="text-2xl cpr font-medium outfit-semibold">{mentor.designation}</p>
                  <div className="my-4">
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialized_area?.map((area, idx) => (
                        <span key={idx} className="bg-[#ECFCFB] crd border-gray-200 btn btn-sm text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="crd leading-relaxed work">{mentor.details}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#ECFCFB] border border-gray-200 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold csd">{mentor.training_experience.years}+</p>
                <p className="text-gray-600 work">Years Experience</p>
              </div>
              <div className="bg-[#ECFCFB] border border-gray-200 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold text-cyan-700">{mentor.training_experience.students}+</p>
                <p className="text-gray-600 work">Students Trained</p>
              </div>
              <div className="bg-[#ECFCFB] border border-gray-200 p-4 rounded-xl text-center">
                <p className="text-3xl font-bold csd">{mentor.specialized_area?.length || 0}</p>
                <p className="text-gray-600 work">Specializations</p>
              </div>
            </div>

            {/* Education & Work */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-8">
                <h3 className="text-xl outfit font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#41bfb8] rounded-full mr-2"></span>
                  Education
                </h3>
                <ul className="space-y-2 work">
                  {mentor.education_qualification?.map((edu, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-[#41bfb8] mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="crd">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl outfit font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#F79952] rounded-full mr-2"></span>
                  Work Experience
                </h3>
                <ul className="space-y-2 work">
                  {mentor.work_experience?.map((work, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-5 w-5 cpr mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="crd">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Life Journey */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                Life Journey
              </h3>
              <div className="bg-[#ECFCFB] shadow-xl work border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="crd leading-relaxed whitespace-pre-line">{mentor.lifeJourney}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMentor;
