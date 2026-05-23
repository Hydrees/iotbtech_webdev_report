import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import CurriculumTimeline from "@/components/CurriculumTimeline";
import Achievements from "@/components/Achievements";
import Attendance from "@/components/Attendance";
import Challenges from "@/components/Challenges";
import FuturePlans from "@/components/FuturePlans";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Sidebar from "@/components/Sidebar";
import AnalyticsChart from "@/components/AnalyticsChart";
import ProgressSection from "@/components/ProgressSection";


export default function Home() {
    return (
       <div className="flex">
        <Sidebar />
        <div className="lg:ml-64 w-full">
        <Navbar />
        
        <FadeIn>
            <Hero />
        </FadeIn>

        <section className="p-10">
            <h1 className="txt-4xl font-bold">Web Development Statutory Report</h1>
            <p className="mt-4 text-lg">Bi-Monthly Performance & Progress Report</p>

        </section>

        <FadeIn>
            <StatsSection />
        </FadeIn>

        <FadeIn>
            <ExecutiveSummary />
        </FadeIn>

        <FadeIn>
            <CurriculumTimeline />
        </FadeIn>

        <FadeIn>
            <Achievements />
        </FadeIn>

        <FadeIn>
            <Attendance />
            <ProgressSection />
        </FadeIn>

        <FadeIn>
            <AnalyticsChart />
        </FadeIn>

        <FadeIn>
            <Challenges />
        </FadeIn>

        <FadeIn>
            <FuturePlans />
        </FadeIn>
        
        <Footer />

       </div>
       </div>
    )
};