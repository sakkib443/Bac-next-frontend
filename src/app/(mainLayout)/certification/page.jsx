"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LuSearch, LuDownload, LuEye, LuAward, LuUser, LuBookOpen, LuHash, LuArrowRight } from "react-icons/lu";

const CertificationPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValues, setSearchValues] = useState({
    phoneNumber: "",
    email: "",
    studentId: "",
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/Certification.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers([]);
      });
  }, []);

  const handleDownload = (studentId) => {
    console.log(`Downloading certificate ${studentId}`);
  };

  const handleView = (studentId) => {
    console.log(`Viewing certificate ${studentId}`);
  };

  const handleSearch = () => {
    setIsLoading(true);
    const { phoneNumber, email, studentId } = searchValues;

    setTimeout(() => {
      if (!phoneNumber && !email && !studentId) {
        setFilteredUsers([]);
        setHasSearched(true);
        setIsLoading(false);
        return;
      }

      const filtered = users.filter((user) => {
        if (phoneNumber && user.phoneNumber && user.phoneNumber.includes(phoneNumber)) {
          return true;
        }
        if (email && user.email && user.email.toLowerCase().includes(email.toLowerCase())) {
          return true;
        }
        if (studentId && user.studentId.toLowerCase().includes(studentId.toLowerCase())) {
          return true;
        }
        return false;
      });

      setFilteredUsers(filtered);
      setHasSearched(true);
      setIsLoading(false);
    }, 500);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSearchValues((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (hasSearched) {
      setHasSearched(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e8f9f9] via-white to-[#fff8f0] border-b border-gray-200 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <LuAward className="text-[#F79952] text-lg" />
              <span className="text-sm font-medium text-gray-700 work">Verify Credentials</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold outfit text-gray-800 mb-4">
              Certificate <span className="text-[#41bfb8]">Verification</span>
            </h1>
            <p className="text-gray-500 work">
              Verify the authenticity of certificates issued by BD Calling Academy. Enter your details below to search.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Phone */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 work mb-1.5">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="e.g. 01712345678"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#41bfb8] focus:border-[#41bfb8] outline-none transition-all text-sm"
                  value={searchValues.phoneNumber}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 work mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. student@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#41bfb8] focus:border-[#41bfb8] outline-none transition-all text-sm"
                  value={searchValues.email}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <LuBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Student ID */}
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 work mb-1.5">
                Student ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="studentId"
                  placeholder="e.g. BAC-2024-001"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#41bfb8] focus:border-[#41bfb8] outline-none transition-all text-sm"
                  value={searchValues.studentId}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <LuHash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-[#41bfb8] hover:bg-[#38a89d] text-white font-medium rounded-md transition-all hover:shadow-lg disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <LuSearch className="text-lg" />
              )}
              <span>Search Certificate</span>
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 work">
            You can search using any one of the fields above
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 lg:px-16 py-10">
        <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 outfit flex items-center gap-2">
              <LuAward className="text-[#41bfb8]" />
              Certificate Results
              {hasSearched && (
                <span className="text-sm font-normal text-gray-500 work">
                  ({filteredUsers.length} found)
                </span>
              )}
            </h2>
          </div>

          {/* Results */}
          <div className="p-6">
            {!hasSearched ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuSearch className="text-3xl text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 outfit mb-2">Search for Certificates</h3>
                <p className="text-gray-400 work text-sm">
                  Enter your phone number, email, or student ID to find your certificate.
                </p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuAward className="text-3xl text-red-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 outfit mb-2">No Certificates Found</h3>
                <p className="text-gray-400 work text-sm">
                  We couldn&apos;t find any certificates matching your search criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="group bg-gray-50 border border-gray-200 rounded-md p-5 hover:shadow-lg hover:border-[#41bfb8]/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#41bfb8]">
                        <Image
                          src={user.image || "/images/placeholder.png"}
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 outfit">{user.name}</h3>
                        <p className="text-xs text-gray-500 work">{user.studentId}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 work">Course</span>
                        <span className="font-medium text-gray-700">{user.courseName}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 work">Batch</span>
                        <span className="font-medium text-gray-700">{user.batchName}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleView(user.studentId)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#41bfb8] hover:bg-[#38a89d] text-white text-sm font-medium rounded-md transition-colors"
                      >
                        <LuEye />
                        View
                      </button>
                      <button
                        onClick={() => handleDownload(user.studentId)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F79952] hover:bg-[#e68a47] text-white text-sm font-medium rounded-md transition-colors"
                      >
                        <LuDownload />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="container mx-auto px-4 lg:px-16 pt-6 pb-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="text-2xl font-bold text-orange-400 font-Inter sm:text-3xl">
            Register for Today&apos;s Free Seminar
          </h2>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-full px-12 py-4 bg-white text-[#41bfb8] font-bold hover:shadow-lg transition-all"
          >
            Join Now
            <LuArrowRight />
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 lg:px-16 pb-12">
        <div className="bg-gradient-to-r from-[#41bfb8] to-[#38a89d] rounded-md p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold outfit mb-2">Need Help Finding Your Certificate?</h3>
              <p className="text-white/80 work text-sm">
                Contact our support team if you&apos;re having trouble locating your certificate.
              </p>
            </div>
            <a
              href="https://wa.me/8801321231802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#41bfb8] font-medium rounded-md hover:shadow-lg transition-all shrink-0"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationPage;
