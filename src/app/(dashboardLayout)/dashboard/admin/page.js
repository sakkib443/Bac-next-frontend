/* eslint-disable react/no-unescaped-entities */
'use client';

import ProtectedRoute from '@/app/providers/protectedRoutes';
import React, { useEffect, useState } from 'react';
import { FiUsers, FiBook, FiAward, FiMessageSquare } from 'react-icons/fi';

export default function AdminDashboard() {
  
  const [counts, setCounts] = useState({ users: null, courses: null, mentors: null, categories: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchCount(urls) {
      const results = {};
      try {
        const tryFetch = async (base, name) => {
          const attempts = [`/api/${base}/count`, `/api/${base}?limit=0`, `/api/${base}`];
          for (const p of attempts) {
            try {
              const res = await fetch(`http://localhost:5000${p}`);
              if (!res.ok) continue;
              const data = await res.json();
              if (typeof data === 'number') return data;
              if (data && typeof data.count === 'number') return data.count;
              if (Array.isArray(data)) return data.length;
              if (data && Array.isArray(data.items)) return data.items.length;
            } catch (e) {
              continue;
            }
          }
          return null;
        };

        results.users = await tryFetch('user', 'users');
        results.courses = await tryFetch('courses', 'courses');
        results.mentors = await tryFetch('mentors', 'mentors');
        results.categories = await tryFetch('categories', 'categories');
        return results;
      } catch (err) {
        throw err;
      }
    }

    fetchCount().then((res) => {
      if (!mounted) return;
      setCounts({
        users: res.users,
        courses: res.courses,
        mentors: res.mentors,
        categories: res.categories,
      });
      setLoading(false);
    }).catch((err) => {
      if (!mounted) return;
      setError('Failed to fetch counts');
      setLoading(false);
    });

    return () => { mounted = false; };
  }, []);

  const stats = [
    {
      title: 'Total Users',
      count: loading ? '...' : (counts.users ?? 'N/A'),
      icon: FiUsers,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Courses',
      count: loading ? '...' : (counts.courses ?? 'N/A'),
      icon: FiBook,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Total Mentors',
      count: loading ? '...' : (counts.mentors ?? 'N/A'),
      icon: FiAward,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Total Categories',
      count: loading ? '...' : (counts.categories ?? 'N/A'),
      icon: FiMessageSquare,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <ProtectedRoute role="admin">
      <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-2">Welcome back! Here's an overview of your academy</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{stat.count}</p>
                </div>
                <div className={`${stat.bgColor} p-4 rounded-lg`}>
                  <Icon className={`bg-linear-to-r ${stat.color} bg-clip-text text-transparent text-2xl`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-3 pb-4 border-b border-slate-200 last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-teal-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">User activity item {item}</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full px-4 py-3 rounded-lg btn-gradient text-white font-medium hover:shadow-lg transition-shadow">
              Create Course
            </button>
            <button className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              Add Mentor
            </button>
            <button className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}
