 "use client";

import SectionHeading from "@/components/sheard/SectionHeading";
import React, { useEffect, useState } from "react";
 
 

const CertificationPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValues, setSearchValues] = useState({
    phoneNumber: "",
    email: "",
    studentId: "",
  });
  const [hasSearched, setHasSearched] = useState(false);

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
    const { phoneNumber, email, studentId } = searchValues;

    if (!phoneNumber && !email && !studentId) {
      setFilteredUsers([]);
      setHasSearched(true);
      return;
    }

    const filtered = users.filter((user) => {
      if (
        phoneNumber &&
        user.phoneNumber &&
        user.phoneNumber.includes(phoneNumber)
      ) {
        return true;
      }
      if (
        email &&
        user.email &&
        user.email.toLowerCase().includes(email.toLowerCase())
      ) {
        return true;
      }
      if (
        studentId &&
        user.studentId.toLowerCase().includes(studentId.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    setFilteredUsers(filtered);
    setHasSearched(true);
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
   

  // useEffect(() => {
  //   window.scrollTo(0, 0); // top-left corner
  // }, [pathname]);
  return (
    <div className="lg:bg-white bg-[#ecfcfb] py-16 md:py-24">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col gap-10">
          <SectionHeading title={"Certificate Lookup"} />

          <div className="flex flex-col items-center md:items-stretch gap-6 py-4 px-6 border border-gray-200 rounded-lg shadow-md bg-white">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="crd text-lg">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Provide Contact No please"
                  className="border border-gray-300 p-2 rounded-md w-full px-4 crd focus:border-[#F79952] focus:ring-2 focus:ring-[#F79952] focus:outline-none transition-all"
                  value={searchValues.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-center justify-center py-2 px-4 rounded-lg bg-[#41bfb8] md:translate-y-4">
                <span className="text-white text-base font-semibold">OR</span>
              </div>

              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <label htmlFor="email" className="crd text-lg">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Provide Email please"
                  className="border border-gray-300 p-2 rounded-md w-full px-4 crd focus:border-[#F79952] focus:ring-2 focus:ring-[#F79952] focus:outline-none transition-all"
                  value={searchValues.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-center justify-center py-2 px-4 rounded-lg bg-[#41bfb8] md:translate-y-4">
                <span className="text-white text-base font-semibold">OR</span>
              </div>

              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <label htmlFor="studentId" className="crd text-lg">
                  Student ID:
                </label>
                <input
                  type="text"
                  id="studentId"
                  placeholder="Provide Student ID Please"
                  className="border border-gray-300 p-2 rounded-md w-full px-4 crd focus:border-[#F79952] focus:ring-2 focus:ring-[#F79952] focus:outline-none transition-all"
                  value={searchValues.studentId}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex justify-end w-full">
              <button
                onClick={handleSearch}
                className="bg-[#F79952] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#e68a47] transition-all cursor-pointer w-full md:w-auto"
              >
                Search
              </button>
            </div>
          </div>

          <div className="py-4 px-6 border border-gray-200 rounded-lg shadow-md bg-white">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-center csd">
                Certificate List
              </h2>
              <div className="overflow-x-auto">
                {hasSearched && filteredUsers.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No certificates found matching your search criteria.
                  </div>
                ) : (
                  <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-[#41bfb8] text-white">
                        <th className="border border-gray-200 px-4 py-2">
                          Image
                        </th>
                        <th className="border border-gray-200 px-4 py-2">
                          Student Name
                        </th>
                        <th className="border border-gray-200 px-4 py-2">
                          Course Name
                        </th>
                        <th className="border border-gray-200 px-4 py-2">
                          Batch Name
                        </th>
                        <th className="border border-gray-200 px-4 py-2">
                          Student ID
                        </th>
                        <th className="border border-gray-200 px-4 py-2">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="crd work">
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            <img
                              src={
                                user.image || "https://via.placeholder.com/50"
                              }
                              alt="Student"
                              className="w-12 h-12 rounded-full object-cover mx-auto"
                            />
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            {user.name}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            {user.courseName}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            {user.batchName}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            {user.studentId}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => handleView(user.studentId)}
                                className="bg-[#41bfb8] text-white px-3 py-1 rounded hover:bg-[#67aaa6] transition cursor-pointer"
                              >
                                Visit
                              </button>
                              <button
                                onClick={() => handleDownload(user.studentId)}
                                className="bg-[#F79952] text-white px-3 py-1 rounded hover:bg-[#e68a47] transition cursor-pointer"
                              >
                                Download
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
