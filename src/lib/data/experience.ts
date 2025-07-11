import type { Experience } from "$lib/types";

export const experiences: Experience[] = [
	{
		role: "Freelancer / Full-stack Developer",
		tasks: ["Development of web apps/sites with Next.js."],
		date: "2022 - now",
		works: [
			{
				name: "FIKA.ASSO",
				date: "2025",
				description: "A portal and management tool for associations.",
				technologies: ["Next.js", "PostgreSQL"],
				skills: [],
			},
			{
				name: "Trimeta Group Website",
				date: "2022",
				description: "A website to represent the group on the web.",
				technologies: ["Next.js", "Wordpress", "GraphQL"],
				skills: [],
			},
		],
	},
	{
		role: "Intern / Full-stack developer",
		date: "3 months intership at Enduma (2022)",
		tasks: [
			"Development of a web app for the communication in Enduma's factory.",
			"Computer maintenance.",
			"Assistance in networking material installation.",
		],
		works: [
			{
				name: "GANU",
				date: "2022",
				description:
					"A web app for real-time communication in Enduma's factory.",
				technologies: ["Next.js", "MySQL"],
				skills: ["Development of a website with Next.js."],
			},
		],
	},
];
