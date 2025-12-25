import Footer from '@/components/sheard/Footer';
import Navbar from '@/components/sheard/Navbar';
import TopHeader from '@/components/sheard/TopHeader';
import WhatsAppButton from '@/components/sheard/WhatsAppButton';
import React from 'react';

const mainLayout = ({ children }) => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            <WhatsAppButton />
        </div>
    );
};

export default mainLayout;