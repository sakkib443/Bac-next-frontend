'use client';

import React, { useState, useEffect } from 'react';
import {
  FiSearch,
  FiPlus,
  FiTrash2,
  FiEye,
  FiX,
  FiCheck,
  FiFilter,
} from 'react-icons/fi';

const API_URL = 'https://bacdb.vercel.app/api/certificate';
const BATCH_API_URL = 'https://bacdb.vercel.app/api/batch';

export default function CertificationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [certifications, setCertifications] = useState([]);
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    batchId: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Filter states
  const [courseFilter, setCourseFilter] = useState('');
  const [batchFilter, setBatchFilter] = useState('');

  // Get unique courses and batches from batches
  const uniqueCourses = [...new Set(batches.map(b => b.courseName).filter(Boolean))];

  // Fetch all certificates
  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.success) {
        setCertifications(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching certificates:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all batches
  const fetchBatches = async () => {
    try {
      const res = await fetch(BATCH_API_URL);
      const data = await res.json();
      if (data.success) {
        setBatches(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching batches:', err);
    }
  };

  useEffect(() => {
    fetchCertificates();
    fetchBatches();
  }, []);

  // Get selected batch details
  const selectedBatch = batches.find(b => b.id === formData.batchId);

  // Create new certificate
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    if (!selectedBatch) {
      setError('Please select a batch');
      setSubmitting(false);
      return;
    }

    try {
      const certificateData = {
        studentId: formData.studentId,
        studentName: formData.studentName,
        batchId: selectedBatch.id,
        courseName: selectedBatch.courseName,
        batchNumber: selectedBatch.id,
        startDate: selectedBatch.startDate,
        endDate: selectedBatch.endDate,
      };

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(certificateData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('Certificate created successfully!');
        setFormData({ studentId: '', studentName: '', batchId: '' });
        fetchCertificates();
        setTimeout(() => {
          setShowModal(false);
          setSuccess('');
        }, 1500);
      } else {
        setError(data.message || 'Failed to create certificate');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Delete certificate
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchCertificates();
      }
    } catch (err) {
      console.error('Error deleting certificate:', err);
    }
  };

  // Filter certificates
  const filteredCerts = certifications.filter((cert) => {
    const matchesSearch =
      cert.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.studentId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.courseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.id?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse = !courseFilter || cert.courseName === courseFilter;
    const matchesBatch = !batchFilter || cert.batchNumber === batchFilter;

    return matchesSearch && matchesCourse && matchesBatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'revoked':
        return 'bg-red-50 text-red-700 border border-red-200';
      default:
        return 'bg-blue-50 text-blue-700 border border-blue-200';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCourseFilter('');
    setBatchFilter('');
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Certifications</h1>
        <p className="text-slate-600 mt-2">Create and manage student certificates</p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search by name, ID, course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white font-medium hover:shadow-lg transition"
          >
            <FiPlus size={20} />
            <span>New Certificate</span>
          </button>
        </div>
      </div>

      {/* Filter Row */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <FiFilter size={18} />
            <span className="font-medium">Filters:</span>
          </div>

          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 focus:border-[#41bfb8] outline-none transition text-sm"
          >
            <option value="">All Courses</option>
            {uniqueCourses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>

          <select
            value={batchFilter}
            onChange={(e) => setBatchFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 focus:border-[#41bfb8] outline-none transition text-sm"
          >
            <option value="">All Batches</option>
            {batches.map((batch) => (
              <option key={batch.id} value={batch.id}>{batch.id} - {batch.courseName}</option>
            ))}
          </select>

          {(courseFilter || batchFilter || searchTerm) && (
            <button onClick={clearFilters} className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition">
              Clear Filters
            </button>
          )}

          <span className="ml-auto text-sm text-slate-500">
            Showing {filteredCerts.length} of {certifications.length}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Total Certificates</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{certifications.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {certifications.filter((c) => c.status === 'active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Available Batches</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{batches.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Unique Courses</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{uniqueCourses.length}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Certificate ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Student ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Student Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Course</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Batch</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-slate-500">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-slate-300 border-t-[#41bfb8] rounded-full animate-spin"></div>
                      Loading certificates...
                    </div>
                  </td>
                </tr>
              ) : filteredCerts.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-slate-500">
                    {batches.length === 0
                      ? "Please create a batch first before creating certificates."
                      : certifications.length === 0
                        ? "No certificates found. Create your first certificate!"
                        : "No certificates match your filters."}
                  </td>
                </tr>
              ) : (
                filteredCerts.map((cert) => (
                  <tr key={cert.id || cert._id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-700">{cert.id}</code>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{cert.studentId}</td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">{cert.studentName}</p>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{cert.courseName}</td>
                    <td className="px-6 py-4">
                      <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">{cert.batchNumber}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition">
                          <FiEye size={18} />
                        </button>
                        <button onClick={() => handleDelete(cert.id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-600">Showing {filteredCerts.length} of {certifications.length} certificates</p>
        </div>
      </div>

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Create New Certificate</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-slate-100 transition">
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
              )}
              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm flex items-center gap-2">
                  <FiCheck size={18} />
                  {success}
                </div>
              )}

              {batches.length === 0 ? (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm">
                  Please create a batch first before creating certificates.
                  <a href="/dashboard/admin/batch" className="block mt-2 text-[#41bfb8] font-medium underline">
                    Go to Batch Management →
                  </a>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Select Batch *</label>
                    <select
                      required
                      value={formData.batchId}
                      onChange={(e) => setFormData({ ...formData, batchId: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                    >
                      <option value="">-- Select a Batch --</option>
                      {batches.map((batch) => (
                        <option key={batch.id} value={batch.id}>
                          {batch.id} - {batch.courseName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedBatch && (
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm space-y-1">
                      <p><strong>Course:</strong> {selectedBatch.courseName}</p>
                      <p><strong>Duration:</strong> {formatDate(selectedBatch.startDate)} - {formatDate(selectedBatch.endDate)}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Student ID *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BAC-2024-001"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name of student"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting || !formData.batchId}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white font-medium hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Creating...
                        </>
                      ) : (
                        <>
                          <FiPlus size={18} />
                          Create Certificate
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
