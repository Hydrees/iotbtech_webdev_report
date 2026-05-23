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
    const activeSection =useActiveSection();

    return (
        <nav className="sticky top-0 z-50 bg-green-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
                <Image
                src="/IOTBTECH_LOGO.png"
                alt="IOTBTECH Logo"
                width={50}
                height={0}
                className="rounded-full object-cover"
                />
                {/* <h1 className="text-xl font-bold">IOTB-TECH WEBDEV REPORT</h1> */}
            </div>

            <ul className="hidden md:flex gap-6 font-medium">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.id}`}
                        className={`transition ${activeSection === item.id ? "text-yellow-300" : "text-white"}`}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}