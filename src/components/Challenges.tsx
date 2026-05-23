const challenges = [
    "Reduction in active fellows compared to admitted fellows.",
    "Difficulty maintaining strict accountability among fellows."
];

export default function Challenges() {
    return(
        <section id="challenges" className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-red-600">Challenges Encountered</h2>
                <div className="grid gap-6">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                            <p className="text-lg text-gray-700">{challenge}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}