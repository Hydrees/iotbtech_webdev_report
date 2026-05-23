import {Stat, TimelineItem, Achievement, Challenge, Plan, } from "@/types/report";

export const stats: Stat[] = [
    {
        title: "Total Classes",
        value: "18",
    },
    {
        title: "Active Fellows",
        value: "48%",
    },
    {
        title: "Engagement Rate",
        value: "80%",
    },
    {
        title: "Project Completed",
        value: "12",
    },
];

export const timeline: TimelineItem[] = [
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
];

export const achievements: Achievement[] = [
    {
        text: "Strong understanding of HTML, CSS and JavaScript.",
    },
    {
        text: "Successful completion of hands-on projects.",
    },
    {
        text: "Git & Github collaboration workflow experience.",
    },
];

export const challenges: Challenge[] = [
    {
        text: "Reduction in active fellows.",
    },
    {
        text: "Difficulty maintaining strict accountability.",
    },
];

export const plans: Plan[] = [
    {
        text: "TypeScript Fundamentals",
    },
    {
        text: "Next.js Architecture",
    },
    {
        text: "Backend Engineering",
    },
];