'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome,
  FiBook,
  FiUsers,
  FiAward,
  FiMessageSquare,
  FiImage,
  FiList,
  FiMenu,
  FiX,
  FiLogOut,
  FiSettings,
} from 'react-icons/fi';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Dashboard',
      href: '/dashboard/admin',
      icon: FiHome,
    },
    {
      title: 'Courses',
      href: '/dashboard/admin/course',
      icon: FiBook,
    },
    {
      title: 'Categories',
      href: '/dashboard/admin/category',
      icon: FiList,
    },
    {
      title: 'Mentors',
      href: '/dashboard/admin/mentor',
      icon: FiUsers,
    },
    {
      title: 'Certifications',
      href: '/dashboard/admin/certification',
      icon: FiAward,
    },
    {
      title: 'Users',
      href: '/dashboard/admin/user',
      icon: FiUsers,
    },
    {
      title: 'Feedback',
      href: '/dashboard/admin/feedback',
      icon: FiMessageSquare,
    },
    {
      title: 'Images',
      href: '/dashboard/admin/image',
      icon: FiImage,
    },
  ];

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg btn-gradient text-white"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 lg:relative lg:w-64 ${
          isOpen ? 'w-64' : 'w-0 lg:w-64'
        } overflow-hidden z-40 border-r border-slate-700`}
      >
        {/* Logo Section */}
        <div className="pt-8 px-6 pb-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold btn-gradient bg-clip-text text-transparent">
            Admin
          </h1>
          <p className="text-xs text-slate-400 mt-1">Dashboard</p>
        </div>

        {/* Navigation Menu */}
        <nav className="p-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  active
                    ? 'btn-gradient text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-6 border-t border-slate-700"></div>

        {/* Bottom Menu */}
        <div className="p-6 space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200">
            <FiSettings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200">
            <FiLogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
