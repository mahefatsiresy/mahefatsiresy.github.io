<script>
    import TechStack from "../components/TechStack.svelte";
    import Experiences from "../components/Experiences.svelte";
    import SectionTitle from "../components/SectionTitle.svelte";
    import ProfileCard from "../components/ProfileCard.svelte";
    import WorkCard from "../components/WorkCard.svelte";
    import { primaryHover, wrapper } from "$lib/styles";
    import { GITHUB_LINK } from "$lib/data/contact";
    import github from "$lib/assets/github.svg";
    import { collegeProjects, personalProjects } from "$lib/data/projects";
    import { educations } from "$lib/data/educations";
    import Button from "../components/Button.svelte";
</script>

<head>
    <title>Mahefatsiresy - Fullstack Developer</title>
</head>

<div class="relative">
    <div
        class="absolute top-0 left-0 -z-10 h-screen w-full bg-zinc-900 bg-radial-[at_50%_50%] from-zinc-500/10 to-zinc-900"
    ></div>
    <div
        class="absolute top-80 left-20 lg:left-80 -z-10 h-80 w-80 rounded-full bg-zinc-500/20 blur-3xl"
    ></div>
    <section id="about" aria-label="biography" class={`${wrapper} pt-16 mb-16`}>
        <div
            class={"grid md:grid-cols-2 align-items-center md:gap-x-8 lg:mt-40 max-w-4xl"}
        >
            <div class="md:col-start-2 md:w-fit md:ml-6">
                <h1
                    class="text-4xl font-semibold text-center md:text-start mt-8 md:mt-4 lg:text-4xl lg:text-start"
                >
                    Fullstack Developer
                </h1>
                <p class="text-center md:text-start text-zinc-300 mt-4 mb-8">
                    Specialized in web development.
                </p>
            </div>
            <div
                class="md:row-start-1 md:row-span-2 justify-self-center md:justify-self-start w-fit"
            >
                <ProfileCard />
            </div>
            <div class="md:col-start-2 mb-4 mt-8 md:mt-2 md:w-fit md:ml-6">
                <div class="flex gap-6 items-center mx-auto md:mx-0 w-fit">
                    <a
                        href={GITHUB_LINK}
                        class="opacity-30 hover:opacity-100 ${primaryHover}"
                    >
                        <span class="hidden">View github profile</span>
                        <img
                            src={github}
                            alt="logo of github"
                            height="40"
                            width="40"
                        />
                    </a>
                    <a href="mailto:mahefatsiresy.n.lucas@gmail.com">
                        <Button>Contact me</Button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<TechStack />

<section id="experiences" class="{wrapper} py-8 relative">
    <div
        class="absolute -inset-8 -z-10 w-full bg-zinc-900 bg-radial-[at_50%_50%] from-zinc-800/15 to-80% to-zinc-900"
    ></div>

    <div
        class="absolute top-80 left-20 lg:left-80 -z-10 h-80 w-80 rounded-full bg-zinc-600/20 blur-3xl"
    ></div>
    <Experiences />
</section>

<section id="projects" class={wrapper}>
    <SectionTitle title={"📁 Projects"} />
    <p>Collection of the project I've worked on</p>

    <section>
        <h3 class="text-xl mt-6 mb-4 font-semibold">Personal projects</h3>
        <ul class="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {#each personalProjects as project (project.name)}
                <li>
                    <WorkCard {project} />
                </li>
            {/each}
        </ul>
    </section>

    <section>
        <h3 class="text-xl mt-6 mb-4 font-semibold">College projects</h3>
        <ul class="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {#each collegeProjects as project (project.name)}
                <li>
                    <WorkCard {project} />
                </li>
            {/each}
        </ul>
    </section>
</section>

<section id="educations" class="{wrapper} mt-16">
    <SectionTitle title={"🎓 Educations and certificates"} />
    <ul class="space-y-2 mt-8">
        {#each educations as education}
            <li class="p-4 border border-zinc-700/80 rounded-lg">
                <article>
                    <h3 class="font-semibold mb-1 flex justify-between">
                        {education.diploma}
                        <span class="text-sm">{education.date} </span>
                    </h3>
                    <p class="text-zinc-300 text-sm">
                        {education.college.name}
                    </p>
                </article>
            </li>
        {/each}
    </ul>
</section>

<!--

<section id="contact"></section>
-->
<footer class="mt-8 p-2">
    <p class="text-center text-xs">
        &copy; Copyright {new Date().getFullYear()}
    </p>
</footer>
