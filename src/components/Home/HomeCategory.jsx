"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const categories = [
    { img: '/images/gdIcon.png', title: 'Art & Design', subtitle: 'Platform for Creativity', color: '#FF6B6B', bgColor: '#FFF5F5' },
    { img: '/images/webicon.png', title: 'Programming', subtitle: 'Code with Confidence', color: '#41bfb8', bgColor: '#F0FDFA' },
    { img: '/images/icon5.png', title: 'Digital Marketing', subtitle: 'The Art of Influence', color: '#F79952', bgColor: '#FFF7ED' },
    { img: '/images/icon6 (2).png', title: 'Media & Film', subtitle: 'Storytelling in Motion', color: '#8B5CF6', bgColor: '#F5F3FF' },
    { img: '/images/icon3.png', title: 'Networking & Server', subtitle: 'Protector of IT Industry', color: '#3B82F6', bgColor: '#EFF6FF' },
    { img: '/images/icon4.png', title: 'Management', subtitle: 'Leading with Strategy', color: '#10B981', bgColor: '#ECFDF5' },
    { img: '/images/icon3.png', title: 'Database', subtitle: 'Structure, Store, Strategize', color: '#EC4899', bgColor: '#FDF2F8' },
    { img: '/images/gdIcon.png', title: 'Diploma', subtitle: 'Skill Up, Stand Out', color: '#6366F1', bgColor: '#EEF2FF' }
];

const HomeCategory = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className='relative bg-white py-12 lg:py-16 overflow-hidden'>
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#41bfb8]/20 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#41bfb8]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F79952]/5 rounded-full blur-3xl"></div>

            <div className='container mx-auto px-4 lg:px-16'>
                {/* Section Header */}
                <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-[#41bfb8]/10 rounded-full">
                        <span className="w-2 h-2 bg-[#41bfb8] rounded-full"></span>
                        <span className="text-sm font-medium text-[#41bfb8] work">Browse Categories</span>
                    </div>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 outfit'>
                        Explore Our Course Categories
                    </h2>
                    <p className='mt-2 text-gray-500 work text-sm sm:text-base max-w-xl mx-auto'>
                        Choose from 8+ categories and start your learning journey today
                    </p>
                </div>

                {/* Categories Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5'>
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href={`/courses?category=${encodeURIComponent(cat.title)}`}
                            className={`group relative bg-white border border-gray-200 rounded-md p-4 lg:p-5 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 hover:border-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* Hover Gradient Border */}
                            <div
                                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: `linear-gradient(135deg, ${cat.color}15, transparent)`,
                                }}
                            ></div>

                            {/* Top Accent Line */}
                            <div
                                className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] rounded-t-md transition-all duration-500"
                                style={{ backgroundColor: cat.color }}
                            ></div>

                            <div className='relative flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4'>
                                {/* Icon Container */}
                                <div
                                    className='w-12 h-12 lg:w-14 lg:h-14 rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg shrink-0'
                                    style={{ backgroundColor: cat.bgColor }}
                                >
                                    <Image
                                        src={cat.img}
                                        alt={cat.title}
                                        width={32}
                                        height={32}
                                        className='w-7 h-7 lg:w-8 lg:h-8 object-contain transition-transform duration-300 group-hover:scale-110'
                                    />
                                </div>

                                {/* Text Content */}
                                <div className='flex-1 min-w-0'>
                                    <h3 className='font-semibold text-gray-800 outfit-semibold text-sm lg:text-base truncate group-hover:text-gray-900 transition-colors'>
                                        {cat.title}
                                    </h3>
                                    <p className='work text-xs lg:text-sm text-gray-500 truncate group-hover:text-gray-600 transition-colors'>
                                        {cat.subtitle}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div className='hidden sm:flex w-8 h-8 rounded-full items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-all duration-300 shrink-0'>
                                    <svg
                                        className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-0.5 transition-all duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Course Count Badge */}
                            <div className='mt-3 pt-3 border-t border-gray-50 flex items-center justify-between'>
                                <span className='text-xs text-gray-400 work'>Explore courses</span>
                                <span
                                    className='text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-300'
                                    style={{
                                        backgroundColor: `${cat.color}15`,
                                        color: cat.color
                                    }}
                                >
                                    View All
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#41bfb8] to-[#38a89d] text-white rounded-md font-medium work hover:shadow-lg hover:shadow-[#41bfb8]/30 transition-all duration-300"
                    >
                        <span>Browse All Courses</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeCategory;
