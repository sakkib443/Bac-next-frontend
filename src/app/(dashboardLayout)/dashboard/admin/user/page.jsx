'use client';

import React, { useState } from 'react';
import {
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiFilter,
  FiChevronDown,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  // Sample data - replace with real data from your API
  const users = [
    {
      id: 1,
      name: 'Ahmed Khan',
      email: 'ahmed@example.com',
      role: 'Student',
      enrolledCourses: 3,
      joinDate: 'Jan 10, 2024',
      status: 'Active',
      location: 'Dhaka',
      phone: '+880 1712345678',
    },
    {
      id: 2,
      name: 'Fatima Begum',
      email: 'fatima@example.com',
      role: 'Student',
      enrolledCourses: 2,
      joinDate: 'Feb 15, 2024',
      status: 'Active',
      location: 'Chittagong',
      phone: '+880 1812345679',
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Mentor',
      enrolledCourses: 3,
      joinDate: 'Jan 05, 2024',
      status: 'Active',
      location: 'Dhaka',
      phone: '+880 1912345680',
    },
    {
      id: 4,
      name: 'Rajon Roy',
      email: 'rajon@example.com',
      role: 'Student',
      enrolledCourses: 1,
      joinDate: 'Mar 20, 2024',
      status: 'Inactive',
      location: 'Sylhet',
      phone: '+880 1612345681',
    },
    {
      id: 5,
      name: 'Maria Garcia',
      email: 'maria@example.com',
      role: 'Student',
      enrolledCourses: 5,
      joinDate: 'Dec 01, 2023',
      status: 'Active',
      location: 'Dhaka',
      phone: '+880 1512345682',
    },
    {
      id: 6,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'Admin',
      enrolledCourses: 0,
      joinDate: 'Oct 15, 2023',
      status: 'Active',
      location: 'Dhaka',
      phone: '+880 1412345683',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Inactive':
        return 'bg-gray-50 text-gray-700 border border-gray-200';
      case 'Suspended':
        return 'bg-red-50 text-red-700 border border-red-200';
      default:
        return 'bg-blue-50 text-blue-700 border border-blue-200';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-red-100 text-red-700';
      case 'Mentor':
        return 'bg-blue-100 text-blue-700';
      case 'Student':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Users</h1>
        <p className="text-slate-600 mt-2">Manage platform users and accounts</p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
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
              <span>Role</span>
              <FiChevronDown size={16} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg btn-gradient text-white font-medium hover:shadow-lg transition">
            <FiPlus size={20} />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Total Users</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">156</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Active Students</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">128</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Mentors</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">12</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <p className="text-slate-600 text-sm">Inactive</p>
          <p className="text-2xl font-bold text-gray-600 mt-1">16</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  User Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Role
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                  Courses
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Location
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
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-200 hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Joined: {user.joinDate}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FiMail size={14} />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span>{user.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-slate-900 font-semibold">
                      {user.enrolledCourses}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <FiMapPin size={16} />
                      {user.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition">
                        <FiEye size={18} />
                      </button>
                      <button className="p-2 rounded-lg text-orange-600 hover:bg-orange-50 transition">
                        <FiEdit2 size={18} />
                      </button>
                      <button className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition">
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
          <p className="text-sm text-slate-600">Showing 1 to 6 of 156 results</p>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-white transition">
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg btn-gradient text-white">
              1
            </button>
            <button className="px-3 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-white transition">
              2
            </button>
            <button className="px-3 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-white transition">
              3
            </button>
            <button className="px-3 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-white transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
