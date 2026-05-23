"use client";

import { LayoutDashboard, Trophy, AlertTriangle, Calendar, ClipboardList, Target, } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";

const SidebarItems = [
    {
        name: "Overview",
        id: "overview",
        icon: LayoutDashboard,
    },
    {
        name: "Timeline",
        id: "timeline",
        icon: Calendar,
    },
    {
        name: "Achievements",
        id: "achievements",
        icon: Trophy,
    },
    {
        name: "Attendance",
        id: "attendance",
        icon: ClipboardList,
    },
    {
        name: "Challenges",
        id: "challenges",
        icon: AlertTriangle,
    },
    {
        name: "Plans",
        id: "plans",
        icon: Target,
    },
]

export default function Sidebar() {
    const activeSection = useActiveSection();

    return (
        <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-green-800 text-white p-6 fixed">
            <h1 className="text-2xl font-bold mb-10">IOTBTECH</h1>
            <nav className="flex flex-col gap-3">
                {SidebarItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-center gap-3 p-3 rounded-xl transition ${
                            activeSection === item.id
                            ? "bg-yellow-400 text-black" : "hover:bg-green-700"
                        }`}
                        > 
                        <Icon size={20} />
                        <span>{item.name}</span>
                        </a>
                    )
                })}
            </nav>
        </aside>
    )
};