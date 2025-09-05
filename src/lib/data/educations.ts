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
			"Informatique de Gestion, Genie Logiciel et Intelligence Artificielle",
		college: {
			name: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
			logo: "",
			link: "",
		},
		date: "2025",
		diploma: "Master en informatique et télécommunication",
	},
	{
		formation: "English for business and entrepreneurship",
		college: {
			name: "MOOC",
		},
		date: "2023",
		diploma: "Certification for english for business and entrepreneurship",
	},
	{
		formation:
			"Informatique de Gestion, Genie Logiciel et Intelligence Artificielle",
		college: {
			name: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
			logo: "",
			link: "",
		},
		date: "2023",
		diploma: "License en informatique et télécommunication",
	},
	{
		formation: "MongoDB Basics",
		college: {
			name: "MongoDB University (Online)",
		},
		date: "2021",
		diploma: "MongoDB Basics Certification",
	},
];
