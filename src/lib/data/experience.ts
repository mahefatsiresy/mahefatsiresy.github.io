import ficsPreview from "$lib/assets/works/fics/preview.png";
import type { Experience } from "$lib/types";

export const experiences: Experience[] = [
  // {
  // 	role: "Freelance Full-Stack Developer",
  // 	date: "2022",
  // 	tasks: [
  // 		"Design and development of web applications using Next.js.",
  // 		"Collaboration with clients to deliver scalable, maintainable solutions.",
  // 	],
  // 	works: [
  // 		{
  // 			name: "Trimeta Group Website",
  // 			date: "2022",
  // 			description:
  // 				"A corporate website for establishing Trimeta Group’s online presence.",
  // 			technologies: ["Next.js", "WordPress", "GraphQL"],
  // 			skills: [],
  // 		},
  // 	],
  // },
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
        technologies: ["Next.js", "MySQL"],
        skills: ["Web app development with Next.js"],
      },
    ],
  },
];
