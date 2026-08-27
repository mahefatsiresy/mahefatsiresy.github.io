import ficsPreview from "$lib/assets/works/fics/preview.webp";
import type { Experience } from "$lib/types";

export const experiences: Experience[] = [
    {
        role: "Full-Stack Developer & Tech Support",
        date: "6-month internship at Zebutech (2026)",
        tasks: [
            "Develop extension mobile/desktop app for Zebutech's platform",
            "Install Zebutech's softwares on client devices",
            "Performed routine computer and software maintenance and troubleshooting.",
            "Hosting websites for clients",
        ],
        works: [
            {
                slug: "gestion-nettoyage",
                name: "Systeme de gestion de nettoyage",
                date: "2026",
                image: "",
                description: "",
                technologies: [
                    "typescript",
                    "Angular",
                    "NestJS",
                    "PostgreSQL",
                    "Claude Code",
                ],
                skills: [],
            },
            {
                slug: "kesykely-lite",
                name: "KesyKely Lite",
                date: "2026",
                image: "",
                description: "",
                technologies: [
                    "typescript",
                    "React Native",
                    "Angular",
                    "SQLite",
                    "Claude Code",
                ],
                skills: [],
            },
            {
                slug: "kesykely-backup-utility",
                name: "KesyKely Backup Utility",
                date: "2026",
                image: "",
                description:
                    "A java gui app to help user backup KesyKely database and automate backups.",
                technologies: ["java"],
                skills: [],
            },
            {
                slug: "kesykely-data-analytics",
                name: "KesyKely Data Analytics App",
                date: "2026",
                image: "",
                description:
                    "An app that help KesyKely users see how their business is performing. It works online so the user can access the app from anywhere.",
                technologies: [
                    "ETL",
                    "typescript",
                    "python",
                    "Angular",
                    "FastAPI",
                    "Claude Code",
                ],
                skills: ["Create an ETL"],
            },
        ],
    },
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
