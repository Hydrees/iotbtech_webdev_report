export default function Attendance() {
    return (
        <section id="attendance" className="px-6 py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Attendance & Participation</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold text-green-700">Attendance Rate</h3>
                        <p className="mt-4 text-5xl font-bold">48%</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold text-yellow-500">Engagement Rate</h3>
                        <p className="mt-4 text-5xl font-bold">80%</p>
                    </div>
                </div>
            </div>
        </section>
    )
};