export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-yellow-500 text-white px-6 py-15">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <p className="uppercase tracking-[6px] text-yellow-300 font-semibold mb-6">Web Dev Performance Report</p>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight">Web Development <br />  <span className="text-yellow-300">Dashboard Report</span></h1>
                    <p className="mt-8 text-lg md:text-2xl text-gray-200 leading-9 max-w-3xl">Comprehensive visual representation of fellows' participation, performance, achievements, challenges and future projections within the Web Development Stack</p>

                    {/* button */}
                    <div className="flex items-center gap-5 mt-10">
                        <a href="#overview" className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">View Report</a>
                        <a href="#timeline" className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300">View Curricullum</a>
                    </div>
                </div>
            </div>
        </section>
    )
};