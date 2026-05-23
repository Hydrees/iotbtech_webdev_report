const achievements = [
    "Strong foundational understanding of HTML, CSS and JavaScript.",
    "Successful completion of multiple hands-on projects.",
    "Improved collaboration using Git & GitHub workflows.",
    "Exposure to responsive design and modern UI practices."
];

export default function Achievements() {
    return (
        <section id="achievements" className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-green-700">Achievements & Milestones</h2>

                <div className="grid gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                            <p className="text-lg text-gray-700">{achievement}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};