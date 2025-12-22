'use client';

import React, { useEffect, useState } from 'react';
import { FiPlus, FiEdit3, FiTrash2, FiLoader, FiCheck, FiX } from 'react-icons/fi';
import Link from 'next/link';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null); // এডিট করার ডাটা রাখার জন্য

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/categories');
      const result = await res.json();
      setCategories(result.data || result);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  // ডিলিট হ্যান্ডলার
  const handleDelete = async (mongoId) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/categories/${mongoId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setCategories(prev => prev.filter(c => c._id !== mongoId));
      }
    } catch (err) { alert("Delete failed"); }
  };

  // আপডেট হ্যান্ডলার
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/categories/${editData._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: Number(editData.id), name: editData.name }),
      });
      if (res.ok) {
        setEditData(null);
        fetchCategories();
      }
    } catch (err) { alert("Update failed"); }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-poppins">
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-8">
        <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Categories</h2>
        <Link href="/dashboard/admin/category/create">
          <button className="bg-[#f79952] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all">
            <FiPlus size={16} /> Add New Category
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center p-20"><FiLoader className="animate-spin text-[#41bfb8]" size={35} /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div key={cat._id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-[#41bfb8] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#41bfb8]/10 flex items-center justify-center text-[#41bfb8] font-black text-sm">
                  {cat.id}
                </div>
                <span className="text-sm font-bold text-slate-700">{cat.name}</span>
              </div>
              
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                <button 
                  onClick={() => setEditData(cat)}
                  className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg"
                >
                  <FiEdit3 size={15} />
                </button>
                <button 
                  onClick={() => handleDelete(cat._id)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <FiTrash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* এডিট মডাল (Update Section) */}
      {editData && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Edit Category</h3>
              <button onClick={() => setEditData(null)}><FiX /></button>
            </div>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input 
                type="number" 
                value={editData.id} 
                onChange={(e) => setEditData({...editData, id: e.target.value})}
                className="w-full p-2.5 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#f79952]/20"
                placeholder="Category ID"
              />
              <input 
                type="text" 
                value={editData.name} 
                onChange={(e) => setEditData({...editData, name: e.target.value})}
                className="w-full p-2.5 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#f79952]/20"
                placeholder="Category Name"
              />
              <button type="submit" className="w-full bg-[#41bfb8] text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                <FiCheck /> Update Category
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;