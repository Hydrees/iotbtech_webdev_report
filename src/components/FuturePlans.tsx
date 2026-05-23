const plans = [
    "Typescript Fundamentals",
    "Next.js Architecture",
    "React Hooks & State Management",
    "Backend Development with Node.js",
    "Database Integration with PostgreSQL",
    "Authentication & Security",
];

export default function FuturePlans() {
    return(
        <section id="plans" className="px-6 py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Plans & Projections</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-green-700">
                            <p className="font-semibold text-lg">{plan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};