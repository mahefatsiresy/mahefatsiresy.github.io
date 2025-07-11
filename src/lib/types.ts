export type Project = {
	name: string;
	date: string;
	description: string;
	technologies: string[];
	skills: string[];
};

export type Experience = {
	role: string;
	tasks: string[];
	date: string;
	works: Project[];
};
