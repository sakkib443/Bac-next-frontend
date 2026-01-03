'use client';

import React, { useState, useEffect } from 'react';
import {
    FiSearch,
    FiPlus,
    FiTrash2,
    FiEdit2,
    FiX,
    FiCheck,
    FiCalendar,
    FiBook,
} from 'react-icons/fi';

const API_URL = 'https://bacdb.vercel.app/api/batch';

export default function BatchManagementPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingBatch, setEditingBatch] = useState(null);
    const [formData, setFormData] = useState({
        courseName: '',
        startDate: '',
        endDate: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch all batches
    const fetchBatches = async () => {
        try {
            setLoading(true);
            const res = await fetch(API_URL);
            const data = await res.json();
            if (data.success) {
                setBatches(data.data || []);
            }
        } catch (err) {
            console.error('Error fetching batches:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBatches();
    }, []);

    // Create new batch
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        setSuccess('');

        try {
            const url = editingBatch ? `${API_URL}/${editingBatch.id}` : API_URL;
            const method = editingBatch ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(editingBatch ? 'Batch updated successfully!' : 'Batch created successfully!');
                setFormData({ courseName: '', startDate: '', endDate: '' });
                setEditingBatch(null);
                fetchBatches();
                setTimeout(() => {
                    setShowModal(false);
                    setSuccess('');
                }, 1500);
            } else {
                setError(data.message || 'Failed to save batch');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // Delete batch
    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this batch?')) return;

        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) {
                fetchBatches();
            }
        } catch (err) {
            console.error('Error deleting batch:', err);
        }
    };

    // Edit batch
    const handleEdit = (batch) => {
        setEditingBatch(batch);
        setFormData({
            courseName: batch.courseName,
            startDate: batch.startDate?.split('T')[0] || '',
            endDate: batch.endDate?.split('T')[0] || '',
        });
        setShowModal(true);
    };

    // Open create modal
    const openCreateModal = () => {
        setEditingBatch(null);
        setFormData({ courseName: '', startDate: '', endDate: '' });
        setShowModal(true);
    };

    // Filter batches
    const filteredBatches = batches.filter((batch) =>
        batch.courseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        batch.id?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status) {
            case 'active':
                return 'bg-green-50 text-green-700 border border-green-200';
            case 'completed':
                return 'bg-gray-50 text-gray-700 border border-gray-200';
            case 'upcoming':
                return 'bg-blue-50 text-blue-700 border border-blue-200';
            default:
                return 'bg-gray-50 text-gray-700 border border-gray-200';
        }
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
                <h1 className="text-3xl font-bold text-slate-900">Batch Management</h1>
                <p className="text-slate-600 mt-2">Create and manage course batches</p>
            </div>

            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                {/* Search */}
                <div className="flex-1 relative">
                    <FiSearch className="absolute left-3 top-3.5 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search batches..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={openCreateModal}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white font-medium hover:shadow-lg transition"
                    >
                        <FiPlus size={20} />
                        <span>New Batch</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <p className="text-slate-600 text-sm">Total Batches</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{batches.length}</p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <p className="text-slate-600 text-sm">Active</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">
                        {batches.filter((b) => b.status === 'active').length}
                    </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <p className="text-slate-600 text-sm">Upcoming</p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">
                        {batches.filter((b) => b.status === 'upcoming').length}
                    </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <p className="text-slate-600 text-sm">Completed</p>
                    <p className="text-2xl font-bold text-gray-600 mt-1">
                        {batches.filter((b) => b.status === 'completed').length}
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                                    Batch ID
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                                    Course Name
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                                    Start Date
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                                    End Date
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-slate-300 border-t-[#41bfb8] rounded-full animate-spin"></div>
                                            Loading batches...
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredBatches.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                                        No batches found. Create your first batch!
                                    </td>
                                </tr>
                            ) : (
                                filteredBatches.map((batch) => (
                                    <tr
                                        key={batch.id || batch._id}
                                        className="border-b border-slate-200 hover:bg-slate-50 transition"
                                    >
                                        <td className="px-6 py-4">
                                            <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm font-medium">
                                                {batch.id}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <FiBook className="text-[#41bfb8]" />
                                                <span className="font-medium text-slate-900">{batch.courseName}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar className="text-slate-400" size={14} />
                                                {formatDate(batch.startDate)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <FiCalendar className="text-slate-400" size={14} />
                                                {formatDate(batch.endDate)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                                                    batch.status
                                                )}`}
                                            >
                                                {batch.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleEdit(batch)}
                                                    className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition"
                                                >
                                                    <FiEdit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(batch.id)}
                                                    className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition"
                                                >
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

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                    <p className="text-sm text-slate-600">
                        Showing {filteredBatches.length} of {batches.length} batches
                    </p>
                </div>
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900">
                                {editingBatch ? 'Edit Batch' : 'Create New Batch'}
                            </h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 rounded-lg hover:bg-slate-100 transition"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm flex items-center gap-2">
                                    <FiCheck size={18} />
                                    {success}
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Course Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Web Development Mastery"
                                    value={formData.courseName}
                                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                                />
                                <p className="text-xs text-slate-400 mt-1">Batch ID will auto-generate from course name</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Start Date *
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    End Date *
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={formData.endDate}
                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#41bfb8] focus:ring-1 focus:ring-[#41bfb8] outline-none transition"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white font-medium hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            {editingBatch ? 'Updating...' : 'Creating...'}
                                        </>
                                    ) : (
                                        <>
                                            <FiPlus size={18} />
                                            {editingBatch ? 'Update Batch' : 'Create Batch'}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
