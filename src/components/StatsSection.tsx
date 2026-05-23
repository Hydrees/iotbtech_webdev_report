import StatCard from "./StatCard";

export default function StatsSection() {
    return(
        <section className="px-6 py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Stact Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatCard 
                    title="Total Classes"
                    value="18"
                    />

                    <StatCard 
                    title="Active Fellows"
                    value="48%"
                    />

                    <StatCard 
                    title="Engagement Rate"
                    value="80%"
                    />

                    <StatCard 
                    title="Projects Completed"
                    value="12"
                    />
                </div>
            </div>
        </section>
    )
}