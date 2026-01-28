import fikaAssoPreview from "$lib/assets/works/fika_asso/preview.png";
import easyTatitraPreview from "$lib/assets/works/easy-tatitra/preview.png";
import hayNahandroPreview from "$lib/assets/works/hay-nahandro/preview.png";
import type { Project } from "$lib/types";

export const collegeProjects: Project[] = [
    {
        slug: "easy-tatitra",
        name: "Easy Tatitra",
        date: "2025",
        image: easyTatitraPreview,
        description:
            "A smart, centralized platform that connects suppliers, customers, and delivery personnel.",
        technologies: [
            "Next.js",
            "Drizzle ORM",
            "React Native",
            "Google Map",
            "PostgreSQL",
        ],
        skills: ["Google Map Integration", "Optimization"],
    },
    {
        slug: "hay-nahandro",
        name: "Hay Nahandro",
        date: "2024",
        image: hayNahandroPreview,
        description:
            "An AI-powered recipe app that helps users find meals based on available ingredients.",
        technologies: [
            "Django REST Framework",
            "ImageAI (YOLOv3 model)",
            "React Native",
            "SQLite",
        ],
        skills: ["React Native", "AI Integration"],
    },
    {
        slug: "advanced-personal-management-system",
        name: "Advanced Personal Management System",
        date: "2023",
        description:
            "A desktop application integrated with biometric technology to help institutions manage employees efficiently.",
        technologies: [
            "React",
            "Socket.IO",
            "Express.js",
            "MySQL + TypeORM",
            "Arduino",
        ],
        skills: [
            "State Management with React Context",
            "WebSocket Integration in React",
        ],
    },
    {
        slug: "e-fiara",
        name: "E-fiara",
        date: "2023",
        description: "A web application for car rental services.",
        technologies: ["React", "Express.js", "MySQL + Prisma"],
        skills: ["State Management with React Context"],
    },
    {
        slug: "hotel-room-management-system",
        name: "Hotel Room Management System",
        date: "2022",
        description:
            "A web-based system for managing hotel bookings and room availability.",
        technologies: ["React", "Express.js", "MySQL + Prisma"],
        skills: [
            "Frontend Development with React.js",
            "API Development with Express.js",
        ],
    },
    {
        slug: "ispmeet",
        name: "ISPMeet",
        date: "2022",
        description:
            "A social networking and e-learning platform for ISPM students and staff.",
        technologies: ["React", "Express.js", "MySQL + Prisma"],
        skills: [],
    },
    {
        slug: "bika",
        name: "Bika",
        date: "2020",
        description:
            "An Android workout app focused on basic fitness routines.",
        technologies: ["Java + Android Studio", "SQLite"],
        skills: ["Android App Development"],
    },
];

export const personalProjects: Project[] = [
    {
        slug: "fika-asso",
        name: "FIKA.ASSO",
        image: fikaAssoPreview,
        date: "2025",
        description: "A platform and management portal for associations.",
        technologies: ["Next.js", "PostgreSQL"],
        skills: [],
    },
    {
        slug: "restonaka",
        name: "Restonaka",
        date: "2024 – Present",
        description:
            "An application designed to help restaurant owners streamline daily operations.",
        technologies: ["Egui"],
        skills: [],
    },
    {
        slug: "e-tsangatsangana",
        name: "E-tsangatsangana",
        date: "2025",
        description:
            "A family travel planning app tailored for trips around Madagascar.",
        technologies: ["Next.js"],
        skills: [],
    },
    {
        slug: "diariko",
        name: "Diariko",
        date: "2025",
        description:
            "A personal journaling app for daily reflections and notes.",
        technologies: ["Flutter"],
        skills: [],
    },
];
