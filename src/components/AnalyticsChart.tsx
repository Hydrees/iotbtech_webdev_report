"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";

const data = [
    {
        name: "Attendance",
        value: 48,
    },
    {
        name: "Engagement",
        value: 80,
    },
    {
        name: "Projects",
        value: 70,
    },
];

export default function AnalyticsChart() {
    return (
        <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Analytics Overview</h2>

                <div className="bg-white rounded-2xl shadow-md p-6 h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Bar dataKey="value" fill="#15803d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    )
}