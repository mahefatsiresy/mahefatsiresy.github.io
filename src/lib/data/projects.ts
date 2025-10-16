type Project = {
	name: string;
	date: string;
	description: string;
	technologies: string[];
	skills: string[];
};

export const collegeProjects: Project[] = [
	{
		name: "Easy Tatitra",
		date: "2025",
		description:
			"A smart, centralized platform that connects suppliers, customers, and delivery personnel.",
		technologies: [
			"Django + Django REST Framework",
			"ImageAI (YOLOv3 model)",
			"React Native",
			"SQLite",
		],
		skills: ["React Native", "AI Integration"],
	},
	{
		name: "Hay Nahandro",
		date: "2024",
		description:
			"An AI-powered recipe app that helps users find meals based on available ingredients.",
		technologies: [
			"Django + Django REST Framework",
			"ImageAI (YOLOv3 model)",
			"React Native",
			"SQLite",
		],
		skills: ["React Native", "AI Integration"],
	},
	{
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
		name: "E-fiara",
		date: "2023",
		description: "A web application for car rental services.",
		technologies: ["React", "Express.js", "MySQL + Prisma"],
		skills: ["State Management with React Context"],
	},
	{
		name: "Hotel Room Management System",
		date: "2022",
		description: "A web-based system for managing hotel bookings and room availability.",
		technologies: ["React", "Express.js", "MySQL + Prisma"],
		skills: [
			"Frontend Development with React.js",
			"API Development with Express.js",
		],
	},
	{
		name: "ISPMeet",
		date: "2022",
		description: "A social networking and e-learning platform for ISPM students and staff.",
		technologies: ["React", "Express.js", "MySQL + Prisma"],
		skills: [],
	},
	{
		name: "Bika",
		date: "2020",
		description: "An Android workout app focused on basic fitness routines.",
		technologies: ["Java + Android Studio", "SQLite"],
		skills: ["Android App Development"],
	},
];

export const personalProjects: Project[] = [
	{
		name: "Restonaka",
		date: "2024 – Present",
		description:
			"An application designed to help restaurant owners streamline daily operations.",
		technologies: ["Egui"],
		skills: [],
	},
	{
		name: "E-tsangatsangana",
		date: "2025",
		description: "A family travel planning app tailored for trips around Madagascar.",
		technologies: ["Next.js"],
		skills: [],
	},
	{
		name: "Diariko",
		date: "2025",
		description: "A personal journaling app for daily reflections and notes.",
		technologies: ["Flutter"],
		skills: [],
	},
];

