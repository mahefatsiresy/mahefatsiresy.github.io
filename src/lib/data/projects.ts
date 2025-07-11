import type { Project } from "./types.ts";

export const collegeProjects: Project[] = [
	{
		name: "Hay Nahandro",
		date: "2024",
		description:
			"A cooking recipes app that help users share and discover recipes. With an AI that allows the users to scan the ingredients at hand then search the possible recipes that can be made with them.",
		technologies: [
			"Django + Django Rest Framework",
			"imageai yolov3 model",
			"React Native",
			"SQLite",
		],
		skills: ["React Native", " AI integration"],
	},
	{
		name: "Advanced Personal Management System",
		date: "2022",
		description:
			"An desktop app combined with biometric technology that help institution manage their employees.",
		technologies: [
			"React",
			"Socket.IO",
			"Express.js",
			"MySQL + TypeORM",
			"Arduino",
		],
		skills: [
			"state management with react contexts",
			"web socket integration in react",
		],
	},
	{
		name: "E-fiara",
		date: "2022",
		description: "A car rental web app.",
		technologies: ["React", "Express.js", "MySQL + Prisma"],
		skills: ["state management with react contexts"],
	},
	{
		name: "Hotel Room Management System",
		date: "2021",
		description: "A web application for managing hotel reservations.",
		technologies: ["React", "Express.js", "MySQL + Prisma"],
		skills: [
			"frontend development app with react.js",
			"API development with express.js",
		],
	},
	{
		name: "ISPMeet",
		date: "2021",
		description: "A social network and online learning plateform for ISPM.",
		technologies: ["React", "Express.js", "MySQL + Prisma"],
		skills: [],
	},
	{
		name: "Bika",
		date: "2020",
		description: "A workout app for android.",
		technologies: ["Java + Android Studio", "SQLite"],
		skills: ["basic android app development"],
	},
];

export const personalProjects: Project[] = [
	{
		name: "Restonaka",
		date: "2024 - now",
		description:
			"An app that help restaurant owners manage their day-to-day operations",
		technologies: ["Egui"],
		skills: [],
	},
	{
		name: "E-tsangatsangana",
		date: "2025",
		description: "A travel app for family trips in Madagascar",
		technologies: ["Next.js"],
		skills: [],
	},
	{
		name: "Diariko",
		date: "2025",
		description: "A journaling app for myself",
		technologies: ["Flutter"],
		skills: [],
	},
];
