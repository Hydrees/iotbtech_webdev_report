"use client";

import { useEffect, useState } from "react";

const sections = [
    "overview",
    "timeline",
    "archievements",
    "attendance",
    "challenges",
    "plans",
];

export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() =>{ const handleScroll = () => {
        let current = "overview";

        sections.forEach((section) => {
            const element = document.getElementById(section);

            if (element) {
                const top = element.offsetTop - 200;
                
                if (window.scrollY >= top) {
                    current = section;
                }
            }
        });

        setActiveSection(current);
    };
    window.addEventListener(
        "scroll",
        handleScroll
    );
    return () => {
        window.removeEventListener(
            "scroll",
            handleScroll
        );
    };
}, []);

return activeSection;
}