const progressData = [
    {
        title: "Frontend Fundamentals",
        value: 85,
    },
    {
        title: "JavaScript Understanding",
        value: 72,
    },
    {
        title: "Git & GitHub Workflow",
        value: 65,
    },
    {
        title: "Project Collaboration",
        value: 70,
    },
];

export default function ProgressSection() {
    return (
        <section className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Learning Progress</h2>

                <div className="space-y-6">
                    {progressData.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="flex justify-between mb-2">
                                <h3 className="font-semibold">{item.title}</h3>
                                <span className="font-bold text-green-700">{item.value}%</span>
                            </div>

                            <div className="w-full bg-gray-200 h-4 rounded-full">
                                <div className="bg-green-700 h-4 rounded-full" style={{width: `${item.value}%`,}}></div>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    )
};