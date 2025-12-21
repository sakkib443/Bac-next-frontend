"use client";

import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import { motion } from "framer-motion";

const Count = () => {
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        fetch("/Data/Count.json")
            .then(res => res.json())
            .then(data => setCounters(data))
            .catch(err => console.error("Failed to load count.json", err));
    }, []);

    const getIconComponent = (iconName) => {
        return FaIcons[iconName] || HiIcons[iconName] || FaIcons.FaRegQuestionCircle;
    };

    const AnimatedCounter = ({ target, suffix = "" }) => {
        const [count, setCount] = useState(1);

        useEffect(() => {
            const parsedTarget = Number(target);
            if (isNaN(parsedTarget)) return;

            let start = 1;
            const duration = 1500;
            const increment = Math.ceil(parsedTarget / 50);
            const stepTime = Math.floor(duration / (parsedTarget / increment));

            const counter = setInterval(() => {
                start += increment;
                if (start >= parsedTarget) {
                    setCount(parsedTarget);
                    clearInterval(counter);
                } else {
                    setCount(start);
                }
            }, stepTime);

            return () => clearInterval(counter);
        }, [target]);

        return <span>{count.toLocaleString()}{suffix}</span>;
    };

    return (
        <div className="py-12 bg-[#ecfcfb]">
            <div className=" container mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    {counters.map((item, index) => {
                        const Icon = getIconComponent(item?.icon);
                        return (
                            <motion.div
                                key={index}
                                className=" border-1 border-gray-200 rounded-2xl p-4 hover:shadow-md transition duration-300 flex flex-col items-center gap-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Icon className="text-4xl text-[#41bfb8]" />
                                <h2 className="text-2xl font-bold text-gray-600">
                                    <AnimatedCounter target={item?.count} suffix={item?.suffix || ""} />
                                </h2>
                                <p className="text-lg text-gray-600">{item?.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Count;
