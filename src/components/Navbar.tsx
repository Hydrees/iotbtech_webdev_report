"use client";

import useActiveSection from "@/hooks/useActiveSection";
import Image from "next/image";

const navItems = [
    {
        name: "Overview",
        id: "overview"
    },
    {
        name: "Timeline",
        id: "timeline"
    },
    {
        name: "Achievements",
        id: "achievements"
    },
    {
        name: "Attendance",
        id: "attendance"
    },
    {
        name: "Challenges",
        id: "challenges"
    },
    {
        name: "Plan",
        id: "plans"
    },
];

export default function Navbar() {
    const activeSection = useActiveSection();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* left side */}
                <div className="flex items-center gap-4">
                    <Image
                    src="/IOTBTECH_LOGO.png"
                    alt="IOTB TECH LOGO"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                     />

                     <div>
                        {/* <h1 className="text-xl font-extrabold tracking-tight text-green-800">IOTBTECH</h1> */}
                        <p className="text-sm text-gray-500 font-medium">Web Dev Report Dashboard</p>
                     </div>
                </div>

                {/* nav links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className={`relative text-{15px} font-semibold transition
                                 duration-300 hover:text-green-700 ${activeSection === item.id ? "text-green-700" : "text-gray-600" }`}> 
                                {item.name}
                                {activeSection === item.id && (
                                    <span className="absolute left-0 -button-2 w-full h-[3px] rounded-full bg-yellow-400"></span>
                                )}
                                </a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}