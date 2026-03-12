import ficsPreview from "$lib/assets/works/fics/preview.webp";
import type { Experience } from "$lib/types";

export const experiences: Experience[] = [
    {
        role: "Full-Stack Developer Intern",
        date: "3-month internship at Enduma (2022)",
        tasks: [
            "Developed a real-time internal communication web app for factory staff.",
            "Performed routine computer maintenance and troubleshooting.",
            "Assisted with the installation and configuration of networking hardware.",
        ],
        works: [
            {
                slug: "ganu",
                name: "GANU",
                date: "2022",
                image: ficsPreview,
                description:
                    "A real-time web-based communication tool for Enduma's factory operations.",
                technologies: ["typescript", "Next.js", "MySQL"],
                skills: ["Web app development with Next.js"],
            },
        ],
    },
];
