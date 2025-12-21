'use client';

import React, { useState, useEffect } from 'react';
import {
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiFilter,
  FiChevronDown,
  FiMail,
  FiPhone,
} from 'react-icons/fi';

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: '',
    designation: '',
    subject: '',
    specialized_area_str: '',
    education_qualification_str: '',
    work_experience_str: '',
    training_years: '',
    training_students: '',
    image: '',
    details: '',
    lifeJourney: '',
    email: '',
    phone: '',
    expertise: '',
    status: 'Active',
  });

  // Fetch mentors
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:5000/api/mentors');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();

        const normalizeMentors = (d) => {
          if (!d) return [];
          if (Array.isArray(d)) return d;
          if (Array.isArray(d.data)) return d.data;
          if (Array.isArray(d.mentors)) return d.mentors;
          if (Array.isArray(d.items)) return d.items;
          if (Array.isArray(d.docs)) return d.docs;
          if (Array.isArray(d.result)) return d.result;
          if (Array.isArray(d.payload)) return d.payload;
          if (d.data && (Array.isArray(d.data.mentors) || Array.isArray(d.data.items)))
            return d.data.mentors || d.data.items;
          return [];
        };

        const list = normalizeMentors(data);
        console.log('Fetched mentors response:', data);
        if (mounted) setMentors(list);
      } catch (err) {
        if (mounted) setError('Could not fetch mentors');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      case 'Inactive':
        return 'bg-gray-50 text-gray-700 border border-gray-200';
      default:
        return 'bg-blue-50 text-blue-700 border border-blue-200';
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.8) return 'text-amber-500';
    if (rating >= 4.5) return 'text-yellow-500';
    return 'text-gray-400';
  };

  const openCreate = () => {
    setEditing(null);
    setForm({
      name: '',
      designation: '',
      subject: '',
      specialized_area_str: '',
      education_qualification_str: '',
      work_experience_str: '',
      training_years: '',
      training_students: '',
      image: '',
      details: '',
      lifeJourney: '',
      email: '',
      phone: '',
      expertise: '',
      status: 'Active',
    });
    setModalOpen(true);
  };

  const openEdit = (m) => {
    setEditing(m);
    setForm({
      name: m.name || '',
      designation: m.designation || '',
      subject: m.subject || '',
      specialized_area_str: Array.isArray(m.specialized_area)
        ? m.specialized_area.join(', ')
        : m.specialized_area || '',
      education_qualification_str: Array.isArray(m.education_qualification)
        ? m.education_qualification.join(', ')
        : m.education_qualification || '',
      work_experience_str: Array.isArray(m.work_experience)
        ? m.work_experience.join(', ')
        : m.work_experience || '',
      training_years: (m.training_experience && m.training_experience.years) || '',
      training_students: (m.training_experience && m.training_experience.students) || '',
      image: m.image || '',
      details: m.details || '',
      lifeJourney: m.lifeJourney || '',
      email: m.email || '',
      phone: m.phone || '',
      expertise: m.expertise || '',
      status: m.status || 'Active',
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form };
      let res;
      if (editing) {
        res = await fetch(`http://localhost:5000/api/mentors/${editing._id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch('http://localhost:5000/api/mentors/create-mentor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      if (!res.ok) throw new Error('Save failed');

      // refresh list
      const fresh = await fetch('http://localhost:5000/api/mentors');
      const data = await fresh.json();
      const normalizeMentors = (d) => {
        if (!d) return [];
        if (Array.isArray(d)) return d;
        if (Array.isArray(d.items)) return d.items;
        return [];
      };
      setMentors(normalizeMentors(data));
      closeModal();
    } catch (err) {
      alert('Failed to save mentor');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this mentor?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/mentors/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setMentors((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      alert('Failed to delete');
    }
  };

  // Filtered mentors
  const filteredMentors = mentors.filter((m) => {
    const name = (m.name || '').toLowerCase();
    const matchesName = name.includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || m.status === filterStatus;
    return matchesName && matchesStatus;
  });

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Mentors</h1>
        <p className="text-slate-600 mt-2">Manage and organize your mentor team</p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
          />
        </div>

        {/* Filter & Add Button */}
        <div className="flex gap-3">
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
              <FiFilter size={18} />
              <span>Filter</span>
              <FiChevronDown size={16} />
            </button>
          </div>

          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg btn-gradient text-white font-medium hover:shadow-lg transition"
          >
            <FiPlus size={20} />
            <span>Add Mentor</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {loading && <div className="p-6">Loading mentors...</div>}
        {error && <div className="p-6 text-red-600">{error}</div>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Mentor Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Expertise</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Students</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMentors.map((mentor) => (
                  <tr key={mentor._id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-900">{mentor.name}</p>
                        <p className="text-xs text-slate-500 mt-1">Joined: {mentor.joinDate || '-'}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <FiMail size={14} />
                          <span>{mentor.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <FiPhone size={14} />
                          <span>{mentor.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-900">{mentor.expertise}</p>
                        <p className="text-xs text-slate-500 mt-1">{mentor.courses ?? 0} courses</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-slate-900 font-semibold">{mentor.students ?? 0}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <span className={`font-semibold ${getRatingColor(mentor.rating ?? 0)}`}>★</span>
                        <span className="text-slate-900 font-medium">{mentor.rating ?? 0}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(mentor.status)}`}>
                        {mentor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button title="View" className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition">
                          <FiEye size={18} />
                        </button>
                        <button title="Edit" onClick={() => openEdit(mentor)} className="p-2 rounded-lg text-orange-600 hover:bg-orange-50 transition">
                          <FiEdit2 size={18} />
                        </button>
                        <button title="Delete" onClick={() => handleDelete(mentor._id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{editing ? 'Edit Mentor' : 'Create Mentor'}</h3>
              <button onClick={closeModal} className="text-slate-500 hover:text-slate-700">Close</button>
            </div>
            <form onSubmit={submitForm} className="space-y-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input
                    required
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-600">Expertise</label>
                <input
                  value={form.expertise}
                  onChange={(e) => setForm((s) => ({ ...s, expertise: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))}
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-300"
                >
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg border border-slate-300">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-lg btn-gradient text-white">{editing ? 'Save Changes' : 'Create Mentor'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
