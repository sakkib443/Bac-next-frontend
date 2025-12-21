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
} from 'react-icons/fi';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data - replace with real data from your API
  const courses = [
    {
      id: 1,
      title: 'Web Development Mastery',
      category: 'Technology',
      students: 245,
      status: 'Active',
      price: '$99.99',
      instructor: 'John Doe',
    },
    {
      id: 2,
      title: 'Digital Marketing Pro',
      category: 'Marketing',
      students: 182,
      status: 'Active',
      price: '$79.99',
      instructor: 'Jane Smith',
    },
    {
      id: 3,
      title: 'UI/UX Design Advanced',
      category: 'Design',
      students: 156,
      status: 'Draft',
      price: '$89.99',
      instructor: 'Mike Johnson',
    },
    {
      id: 4,
      title: 'Python Data Science',
      category: 'Technology',
      students: 312,
      status: 'Active',
      price: '$119.99',
      instructor: 'Sarah Wilson',
    },
    {
      id: 5,
      title: 'Business Analytics',
      category: 'Business',
      students: 98,
      status: 'Active',
      price: '$74.99',
      instructor: 'Tom Brown',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Draft':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      case 'Archived':
        return 'bg-gray-50 text-gray-700 border border-gray-200';
      default:
        return 'bg-blue-50 text-blue-700 border border-blue-200';
    }
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Courses</h1>
        <p className="text-slate-600 mt-2">Manage and organize all your courses</p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search courses..."
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

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg btn-gradient text-white font-medium hover:shadow-lg transition">
            <FiPlus size={20} />
            <span>New Course</span>
          </button>
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
                  Course Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Instructor
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Students
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Price
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
              {courses.map((course, index) => (
                <tr
                  key={course.id}
                  className="border-b border-slate-200 hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">{course.title}</p>
                      <p className="text-xs text-slate-500 mt-1">ID: #{course.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{course.category}</td>
                  <td className="px-6 py-4 text-slate-600">{course.instructor}</td>
                  <td className="px-6 py-4">
                    <span className="text-slate-900 font-medium">{course.students}</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {course.price}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        course.status
                      )}`}
                    >
                      {course.status}
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
          <p className="text-sm text-slate-600">Showing 1 to 5 of 48 results</p>
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
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
