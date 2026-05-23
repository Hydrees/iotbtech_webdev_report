const curriculum = [
    {
        week: "Week 1",
        title: "HTML & Web Architecture",
    },
    {
        week: "Week 2",
        title: "CSS Core & Design System",
    },
    {
        week: "Week 3",
        title: "Tailwind CSS & Responsive Design",
    },
    {
        week: "Week 4",
        title: "JavaScript Engine & Functions",
    },
    {
        week: "Week 5",
        title: "Arrays, Objects & DOM",
    },
    {
        week: "Week 6",
        title: "Async JavaScript & APIs",
    },
];

export default function curriculumTimeline() {
    return(
        <section id="timeline" className="px-6 py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Curriculum Timeline</h2>
                <div className="grid gap-6">
                    {curriculum.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border-1-8 border-yellow-400">
                            <h3 className="text-xl font-bold text-green-700">{item.week}</h3>
                            <p className="mt-2 text-gray-700">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};