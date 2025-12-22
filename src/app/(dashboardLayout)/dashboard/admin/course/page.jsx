'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiSearch,
  FiBookOpen,
  FiUser,
  FiClock,
  FiStar
} from 'react-icons/fi';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  /* ১. সব কোর্স ফেচ করা */
  const loadCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/courses');
      const data = await res.json();
      setCourses(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  /* ২. কোর্স ডিলিট করার ফাংশন (API Connect) */
  const handleDelete = async (id) => {
    // কনফার্মেশন ডায়ালগ
    if (!confirm('Are you sure you want to delete this course?')) return;

    try {
      const res = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: 'DELETE',
      });

      const result = await res.json();

      if (res.ok) {
        // UI থেকে সাথে সাথে রিমুভ করা
        setCourses((prev) => prev.filter((course) => course._id !== id));
        alert('Course deleted successfully! ✅');
      } else {
        alert(`Failed to delete: ${result.message}`);
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert('Network error! Could not connect to server.');
    }
  };

  /* ফিল্টারিং লজিক */
  const filtered = courses.filter((c) =>
    c.title?.toLowerCase().includes(search.toLowerCase()) ||
    c.instructorName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 font-poppins bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-outfit font-bold text-slate-900">Course Management</h1>
          <p className="text-slate-500 text-xs">Manage and monitor your academic courses</p>
        </div>

        <Link href="/dashboard/admin/course/create">
          <button style={{ backgroundColor: '#f79952' }} className="text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold text-xs shadow-lg shadow-orange-100 transition-all hover:scale-105">
            <FiPlus size={16} /> Create Course
          </button>
        </Link>
      </div>

      {/* SEARCH */}
      <div className="relative mb-8 max-w-sm">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
        <input
          placeholder="Search by title or mentor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#f79952]/20 outline-none text-xs bg-white"
        />
      </div>

      {/* GRID */}
      {loading ? (
        <div className="text-center py-20 font-medium text-slate-400 animate-pulse">Loading courses...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course) => (
            <div key={course._id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              
              {/* THUMBNAIL */}
              <div className="relative h-40 overflow-hidden">
                <img src={course.image} alt={course.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[9px] font-bold text-[#41bfb8] uppercase tracking-wider shadow-sm">
                  {course.type}
                </div>
              </div>

              {/* BODY */}
              <div className="p-4 flex-grow flex flex-col">
                <div className="mb-3">
                  <h3 className="text-sm font-outfit font-bold text-slate-900 line-clamp-2 h-10 mb-1 leading-snug">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#f79952]">
                    <FiStar size={10} fill="#f79952" />
                    <span className="text-[10px] font-bold">{course.rating} ({course.totalRating})</span>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <FiUser size={12} className="text-[#41bfb8]" />
                    <span className="truncate italic">{course.instructorName || course.mentor?.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <FiBookOpen size={12} className="text-[#41bfb8]" />
                    <span>{course.lectures} Lectures • {course.durationMonth} Months</span>
                  </div>
                </div>

                {/* STATS */}
                <div className="mt-auto grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                  <div>
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter">Course Fee</p>
                    <p className="text-slate-900 font-bold text-sm">{course.fee}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter">Enrolled</p>
                    <p className="text-slate-900 font-bold text-[12px]">{course.totalStudentsEnroll}</p>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-t border-slate-100">
                <Link href={`/dashboard/admin/course/edit/${course._id}`} className="text-amber-600 hover:text-amber-700 text-[12px] font-bold flex items-center gap-1">
                  <FiEdit2 size={13} /> Edit
                </Link>
                <button 
                  onClick={() => handleDelete(course._id)}
                  className="text-rose-600 hover:text-rose-700 text-[12px] font-bold flex items-center gap-1"
                >
                  <FiTrash2 size={13} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}