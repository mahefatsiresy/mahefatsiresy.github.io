type College = {
	name: string;
	address?: string;
	logo?: string;
	link?: string;
};

type Education = {
	formation: string;
	college: College;
	date: string;
	diploma: string;
};

export const educations: Education[] = [
	{
		formation:
			"Information Systems, Software Engineering, and Artificial Intelligence",
		college: {
			name: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
			logo: "",
			link: "",
		},
		date: "Ongoing",
		diploma: "Master's in Computer Science and Telecommunications",
	},
	{
		formation: "English for Business and Entrepreneurship",
		college: {
			name: "MOOC",
		},
		date: "2023",
		diploma: "Certificate in English for Business and Entrepreneurship",
	},
	{
		formation:
			"Information Systems, Software Engineering, and Artificial Intelligence",
		college: {
			name: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
			logo: "",
			link: "",
		},
		date: "2023",
		diploma: "Bachelor's in Computer Science and Telecommunications",
	},
	{
		formation: "MongoDB Basics",
		college: {
			name: "MongoDB University (Online)",
		},
		date: "2021",
		diploma: "Certificate in MongoDB Basics",
	},
];

