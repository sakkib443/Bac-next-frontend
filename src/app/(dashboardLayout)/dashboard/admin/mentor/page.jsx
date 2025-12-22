'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // লিঙ্ক করার জন্য এটি প্রয়োজন
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiSearch,
  FiMail,
  FiPhone,
} from 'react-icons/fi';

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  /* FETCH ALL MENTORS */
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5000/api/mentors');
        const data = await res.json();
        setMentors(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  /* DELETE MENTOR */
  const handleDelete = async (id) => {
    if (!confirm('Delete this mentor?')) return;
    try {
      await fetch(`http://localhost:5000/api/mentors/${id}`, {
        method: 'DELETE',
      });
      setMentors((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      alert("Failed to delete mentor");
    }
  };

  const filtered = mentors.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 font-poppins bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-outfit font-bold text-slate-900">
            Mentors
          </h1>
          <p className="text-slate-500 text-xs">
            Manage all instructors & trainers
          </p>
        </div>

        {/* ADD MENTOR LINK */}
        <Link href="/dashboard/admin/mentor/create">
          <button className="btn-gradient text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium text-xs transition-all hover:opacity-90 shadow-sm">
            <FiPlus size={16} />
            Add Mentor
          </button>
        </Link>
      </div>

      {/* SEARCH */}
      <div className="relative mb-6 max-w-sm">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
        <input
          placeholder="Search mentor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none text-xs transition-all bg-white"
        />
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
             <p className="text-xs font-medium text-slate-500 animate-pulse">Loading mentors...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((mentor) => (
            <div
              key={mentor._id}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* BODY */}
              <div className="p-3.5">
                <div className="mb-2">
                  <h3 className="text-sm font-outfit font-bold text-slate-900 truncate">
                    {mentor.name}
                  </h3>
                  <p className="text-[11px] font-medium text-indigo-600">
                    {mentor.designation}
                  </p>
                </div>

                {/* CONTACT */}
                <div className="space-y-1 mb-3 text-[12px] text-slate-600">
                  {mentor.email && (
                    <div className="flex items-center gap-2">
                      <FiMail size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate">{mentor.email}</span>
                    </div>
                  )}
                  {mentor.phone && (
                    <div className="flex items-center gap-2">
                      <FiPhone size={12} className="text-slate-400 shrink-0" />
                      <span>{mentor.phone}</span>
                    </div>
                  )}
                </div>

                <div className="text-[12px] text-slate-700 mb-3">
                  <span className="font-semibold text-slate-800 text-[11px]">Subject:</span>{' '}
                  {mentor.subject}
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {mentor.specialized_area?.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* EXPERIENCE */}
                <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-slate-100 text-[10px] font-semibold">
                  <div>
                    <p className="text-slate-400 text-[9px] uppercase tracking-tighter">Exp.</p>
                    <p className="text-slate-900">{mentor.training_experience?.years} Yrs</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-[9px] uppercase tracking-tighter">Students</p>
                    <p className="text-slate-900">{mentor.training_experience?.students}+</p>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50/80 border-t border-slate-100">
                {/* EDIT LINK - এখানে আপনার এডিট পেজ এর লিঙ্ক বসিয়ে দেওয়া হয়েছে */}
                <Link href={`/dashboard/admin/mentor/edit/${mentor._id}`}>
                  <button className="text-amber-600 hover:text-amber-700 text-[12px] font-bold flex items-center gap-1 transition-colors">
                    <FiEdit2 size={12} /> Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(mentor._id)}
                  className="text-rose-600 hover:text-rose-700 text-[12px] font-bold flex items-center gap-1 transition-colors"
                >
                  <FiTrash2 size={12} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}