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
  FiChevronDown,
} from 'react-icons/fi';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + '/');

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    { title: 'Dashboard', href: '/dashboard/admin', icon: FiHome },

    {
      title: 'Courses',
      icon: FiBook,
      submenu: [
        { title: 'All Courses', href: '/dashboard/admin/course' },
        { title: 'Create Course', href: '/dashboard/admin/course/create' },
      ],
    },
    {
      title: 'Categories',
      icon: FiList,
      submenu: [
        { title: 'All Categories', href: '/dashboard/admin/category' },
        { title: 'Add Category', href: '/dashboard/admin/category/create' },
      ],
    },
    {
      title: 'Mentors',
      icon: FiUsers,
      submenu: [
        { title: 'All Mentors', href: '/dashboard/admin/mentor' },
        { title: 'Add Mentor', href: '/dashboard/admin/mentor/create' },
      ],
    },

    { title: 'Certifications', href: '/dashboard/admin/certification', icon: FiAward },
    { title: 'Users', href: '/dashboard/admin/user', icon: FiUsers },
    { title: 'Feedback', href: '/dashboard/admin/feedback', icon: FiMessageSquare },
    { title: 'Images', href: '/dashboard/admin/image', icon: FiImage },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-indigo-600 text-white shadow-lg"
      >
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen backdrop-blur-xl bg-gradient-to-b 
        from-[#0f172a]/95 via-[#020617]/95 to-[#020617]/95
        border-r border-white/5 transition-all duration-300 z-40
        ${isOpen ? 'w-72' : 'w-0 lg:w-72'} overflow-hidden`}
      >
        {/* Logo */}
        <div className="px-8 py-7 border-b border-white/5">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Admin<span className="text-indigo-400">Panel</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Management Dashboard</p>
        </div>

        {/* Menu */}
        <nav className="px-6 py-6 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            /* SUBMENU */
            if (item.submenu) {
              const activeSub = item.submenu.some((s) => isActive(s.href));

              return (
                <div key={item.title}>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all
                    ${
                      activeSub
                        ? 'bg-indigo-500/10 text-indigo-400'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </span>
                    <FiChevronDown
                      className={`transition-transform ${
                        openMenu === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  {openMenu === item.title && (
                    <div className="relative ml-6 mt-2 border-l border-white/10 pl-4 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                          ${
                            isActive(sub.href)
                              ? 'bg-indigo-600/20 text-white font-medium'
                              : 'text-slate-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            /* NORMAL MENU */
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${
                  isActive(item.href)
                    ? 'bg-indigo-600/20 text-white shadow-inner'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/5 space-y-2">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5">
            <FiSettings size={18} />
            Settings
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10">
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
