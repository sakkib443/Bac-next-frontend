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
  FiGrid,
  FiList,
} from 'react-icons/fi';

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewType, setViewType] = useState('table');

  // Sample data - replace with real data from your API
  const categories = [
    {
      id: 1,
      name: 'Technology',
      slug: 'technology',
      courses: 12,
      status: 'Active',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Business',
      slug: 'business',
      courses: 8,
      status: 'Active',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'Marketing',
      slug: 'marketing',
      courses: 6,
      status: 'Active',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 4,
      name: 'Design',
      slug: 'design',
      courses: 9,
      status: 'Active',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      name: 'Health & Fitness',
      slug: 'health-fitness',
      courses: 5,
      status: 'Draft',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 6,
      name: 'Language',
      slug: 'language',
      courses: 4,
      status: 'Active',
      color: 'from-teal-500 to-teal-600',
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
        <h1 className="text-3xl font-bold text-slate-900">Categories</h1>
        <p className="text-slate-600 mt-2">Organize courses by categories</p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
          />
        </div>

        {/* View Toggle & Add Button */}
        <div className="flex gap-3">
          <div className="flex rounded-lg border border-slate-300 bg-white">
            <button
              onClick={() => setViewType('table')}
              className={`p-2.5 ${
                viewType === 'table'
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-slate-600 hover:bg-slate-50'
              } transition`}
            >
              <FiList size={20} />
            </button>
            <div className="w-px bg-slate-300"></div>
            <button
              onClick={() => setViewType('grid')}
              className={`p-2.5 ${
                viewType === 'grid'
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-slate-600 hover:bg-slate-50'
              } transition`}
            >
              <FiGrid size={20} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg btn-gradient text-white font-medium hover:shadow-lg transition">
            <FiPlus size={20} />
            <span>New Category</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewType === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              {/* Color Header */}
              <div className={`h-24 bg-gradient-to-r ${category.color}`}></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{category.slug}</p>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-3xl font-bold text-slate-900">
                    {category.courses}
                  </p>
                  <p className="text-sm text-slate-600">Courses</p>
                </div>

                {/* Status */}
                <div className="mt-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      category.status
                    )}`}
                  >
                    {category.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2">
                    <FiEdit2 size={16} />
                    <span>Edit</span>
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewType === 'table' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Category Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Slug
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                    Courses
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
                {categories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color}`}
                        ></div>
                        <div>
                          <p className="font-medium text-slate-900">
                            {category.name}
                          </p>
                          <p className="text-xs text-slate-500">ID: #{category.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {category.slug}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-slate-900 font-semibold">
                        {category.courses}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          category.status
                        )}`}
                      >
                        {category.status}
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

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <p className="text-sm text-slate-600">Showing 1 to 6 of 6 results</p>
          </div>
        </div>
      )}
    </div>
  );
}
