import React from 'react';
import AdminSidebar from '@/components/Admin/AdminSidebar';

const adminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default adminLayout;