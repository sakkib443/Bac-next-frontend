"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuSearch, LuDownload, LuEye, LuAward, LuUser, LuBookOpen, LuHash, LuArrowRight, LuX } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";

const API_URL = 'https://bacdb.vercel.app/api/certificate';

const CertificationPage = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValues, setSearchValues] = useState({
    phoneNumber: "",
    email: "",
    studentId: "",
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { t, language } = useLanguage();
  const bengaliClass = language === "bn" ? "hind-siliguri" : "";

  const handleSearch = async () => {
    setIsLoading(true);
    const { phoneNumber, email, studentId } = searchValues;

    try {
      if (!phoneNumber && !email && !studentId) {
        setFilteredUsers([]);
        setHasSearched(true);
        setIsLoading(false);
        return;
      }

      const params = new URLSearchParams();
      if (studentId) params.append('studentId', studentId);
      if (email) params.append('studentName', email);
      if (phoneNumber) params.append('courseName', phoneNumber);

      const res = await fetch(`${API_URL}/search?${params.toString()}`);
      const data = await res.json();

      if (data.success) {
        setFilteredUsers(data.data || []);
      } else {
        setFilteredUsers([]);
      }
      setHasSearched(true);
    } catch (err) {
      console.error('Search error:', err);
      setFilteredUsers([]);
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (cert) => {
    const issueDate = new Date(cert.issueDate || cert.createdAt);
    const formattedIssueDate = issueDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    const startDate = cert.startDate ? new Date(cert.startDate) : null;
    const endDate = cert.endDate ? new Date(cert.endDate) : null;
    const formatDate = (date) => date ? date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
    const courseDuration = startDate && endDate ? `Course held on ${formatDate(startDate)} to ${formatDate(endDate)} at Bdcalling Academy.` : '';

    const pdfContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Certificate - ${cert.studentName}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            @page { size: 833px 604px; margin: 0; }
            body { 
              font-family: 'Outfit', sans-serif;
              background: white;
              width: 833px;
              height: 604px;
              display: flex;
              align-items: center;
              justify-content: center;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .certificate-container {
              width: 833px;
              height: 604px;
              position: relative;
              background-image: url('/certificate.svg');
              background-size: cover;
              background-position: center;
            }
            /* Student Name - Lower position to avoid overlap */
            .student-name {
              position: absolute;
              top: 260px;
              left: 50%;
              transform: translateX(-50%);
              font-family: 'Playfair Display', serif;
              font-size: 26px;
              font-weight: 700;
              color: #1e3a5f;
              text-transform: uppercase;
              letter-spacing: 3px;
              text-align: center;
              width: 100%;
            }
            /* Course Name */
            .course-name {
              position: absolute;
              top: 318px;
              left: 50%;
              transform: translateX(-50%);
              font-size: 14px;
              font-weight: 700;
              color: #1e3a5f;
              text-align: center;
            }
            /* Course Duration */
            .course-duration {
              position: absolute;
              top: 340px;
              left: 50%;
              transform: translateX(-50%);
              font-size: 9px;
              color: #555;
              text-align: center;
            }
            /* Bottom row values - all same top, properly spaced */
            .date-value {
              position: absolute;
              top: 435px;
              left: 115px;
              font-size: 10px;
              color: #333;
              text-align: center;
              width: 130px;
            }
            .batch-value {
              position: absolute;
              top: 435px;
              left: 50%;
              transform: translateX(-50%);
              font-size: 10px;
              color: #333;
              text-align: center;
              width: 130px;
            }
            .id-value {
              position: absolute;
              top: 435px;
              right: 115px;
              font-size: 10px;
              color: #333;
              text-align: center;
              width: 130px;
            }
          </style>
        </head>
        <body>
          <div class="certificate-container">
            <div class="student-name">${cert.studentName}</div>
            <div class="course-name">${cert.courseName}</div>
            ${courseDuration ? `<div class="course-duration">${courseDuration}</div>` : ''}
            <div class="date-value">${formattedIssueDate}</div>
            <div class="batch-value">${cert.batchNumber || cert.batchId || '-'}</div>
            <div class="id-value">${cert.studentId}</div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(pdfContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 500);
  };

  const handleView = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSearchValues((prev) => ({ ...prev, [id]: value }));
    if (hasSearched) setHasSearched(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e8f9f9] via-white to-[#fff8f0] border-b border-gray-200 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <LuAward className="text-[#F79952] text-lg" />
              <span className={`text-sm font-medium text-gray-700 work ${bengaliClass}`}>{t("certificationPage.badge")}</span>
            </div>
            <h1 className={`text-3xl lg:text-4xl font-bold outfit text-gray-800 mb-4 ${bengaliClass}`}>
              {t("certificationPage.title1")}<span className="text-[#41bfb8]">{t("certificationPage.title2")}</span>
            </h1>
            <p className={`text-gray-500 work ${bengaliClass}`}>{t("certificationPage.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="studentId" className={`block text-sm font-medium text-gray-700 work mb-1.5 ${bengaliClass}`}>
                {t("certificationPage.studentId")}
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

            <div>
              <label htmlFor="email" className={`block text-sm font-medium text-gray-700 work mb-1.5 ${bengaliClass}`}>
                Student Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  placeholder="e.g. John Doe"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#41bfb8] focus:border-[#41bfb8] outline-none transition-all text-sm"
                  value={searchValues.email}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className={`block text-sm font-medium text-gray-700 work mb-1.5 ${bengaliClass}`}>
                Course Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="e.g. Web Development"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#41bfb8] focus:border-[#41bfb8] outline-none transition-all text-sm"
                  value={searchValues.phoneNumber}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <LuBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className={`flex items-center gap-2 px-6 py-3 bg-[#41bfb8] hover:bg-[#38a89d] text-white font-medium rounded-md transition-all hover:shadow-lg disabled:opacity-50 ${bengaliClass}`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <LuSearch className="text-lg" />
              )}
              <span>{t("certificationPage.searchCertificate")}</span>
            </button>
          </div>

          <p className={`text-center text-xs text-gray-400 mt-4 work ${bengaliClass}`}>
            {t("certificationPage.searchHint")}
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 lg:px-16 py-10">
        <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className={`text-xl font-bold text-gray-800 outfit flex items-center gap-2 ${bengaliClass}`}>
              <LuAward className="text-[#41bfb8]" />
              {t("certificationPage.certificateResults")}
              {hasSearched && (
                <span className={`text-sm font-normal text-gray-500 work ${bengaliClass}`}>
                  ({filteredUsers.length} {t("certificationPage.found")})
                </span>
              )}
            </h2>
          </div>

          <div className="p-6">
            {!hasSearched ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuSearch className="text-3xl text-gray-400" />
                </div>
                <h3 className={`text-lg font-medium text-gray-700 outfit mb-2 ${bengaliClass}`}>{t("certificationPage.searchForCertificates")}</h3>
                <p className={`text-gray-400 work text-sm ${bengaliClass}`}>{t("certificationPage.enterDetails")}</p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuAward className="text-3xl text-red-400" />
                </div>
                <h3 className={`text-lg font-medium text-gray-700 outfit mb-2 ${bengaliClass}`}>{t("certificationPage.noCertificatesFound")}</h3>
                <p className={`text-gray-400 work text-sm ${bengaliClass}`}>{t("certificationPage.noMatch")}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map((cert) => (
                  <div
                    key={cert.id || cert._id}
                    className="group bg-gray-50 border border-gray-200 rounded-md p-5 hover:shadow-lg hover:border-[#41bfb8]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#41bfb8] to-[#38a89d] flex items-center justify-center text-white text-xl font-bold">
                        {cert.studentName?.charAt(0) || 'S'}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 outfit">{cert.studentName}</h3>
                        <p className="text-xs text-gray-500 work">{cert.studentId}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className={`text-gray-500 work ${bengaliClass}`}>{t("certificationPage.course")}</span>
                        <span className="font-medium text-gray-700">{cert.courseName}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-gray-500 work ${bengaliClass}`}>{t("certificationPage.batch")}</span>
                        <span className="font-medium text-gray-700">{cert.batchNumber}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleView(cert)}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#41bfb8] hover:bg-[#38a89d] text-white text-sm font-medium rounded-md transition-colors ${bengaliClass}`}
                      >
                        <LuEye />
                        {t("certificationPage.view")}
                      </button>
                      <button
                        onClick={() => handleDownload(cert)}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F79952] hover:bg-[#e68a47] text-white text-sm font-medium rounded-md transition-colors ${bengaliClass}`}
                      >
                        <LuDownload />
                        {t("certificationPage.download")}
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
          <h2 className={`text-2xl font-bold text-orange-400 font-Inter sm:text-3xl ${bengaliClass}`}>
            {t("certificationPage.registerFreeSeminar")}
          </h2>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-full px-12 py-4 bg-white text-[#41bfb8] font-bold hover:shadow-lg transition-all ${bengaliClass}`}
          >
            {t("certificationPage.joinNow")}
            <LuArrowRight />
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 lg:px-16 pb-12">
        <div className="bg-gradient-to-r from-[#41bfb8] to-[#38a89d] rounded-md p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className={`text-xl font-bold outfit mb-2 ${bengaliClass}`}>{t("certificationPage.needHelp")}</h3>
              <p className={`text-white/80 work text-sm ${bengaliClass}`}>{t("certificationPage.helpDescription")}</p>
            </div>
            <a
              href="https://wa.me/8801321231802"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 bg-white text-[#41bfb8] font-medium rounded-md hover:shadow-lg transition-all shrink-0 ${bengaliClass}`}
            >
              {t("certificationPage.contactSupport")}
            </a>
          </div>
        </div>
      </section>

      {/* View Certificate Modal */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white">
              <h2 className="text-lg font-bold">Certificate Details</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-white/20 transition">
                <LuX size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#41bfb8] to-[#38a89d] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {selectedCert.studentName?.charAt(0) || 'S'}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedCert.studentName}</h3>
                <p className="text-gray-500">has successfully completed</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Certificate ID</span>
                  <code className="bg-gray-200 px-3 py-1 rounded font-mono text-sm">{selectedCert.id}</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Student ID</span>
                  <span className="font-medium text-gray-700">{selectedCert.studentId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Course</span>
                  <span className="font-medium text-gray-700">{selectedCert.courseName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Batch</span>
                  <span className="font-medium text-gray-700">{selectedCert.batchNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Issue Date</span>
                  <span className="font-medium text-gray-700">
                    {new Date(selectedCert.issueDate || selectedCert.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${selectedCert.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {selectedCert.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleDownload(selectedCert)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#F79952] hover:bg-[#e68a47] text-white font-medium rounded-lg transition"
                >
                  <LuDownload size={18} />
                  Download PDF
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationPage;
