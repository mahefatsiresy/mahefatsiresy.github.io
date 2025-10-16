<script>
  import TechStack from "../components/TechStack.svelte";
  import Experiences from "../components/Experiences.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import { wrapper } from "$lib/styles";
  import { GITHUB_LINK } from "$lib/data/contact";
  import github from "$lib/assets/github.svg";
  // import linkedin from "$lib/assets/linkedin.png";
  import { collegeProjects, personalProjects } from "$lib/data/projects";
  import { educations } from '$lib/data/educations'
</script>

<head>
  <title>Mahefatsiresy - Fullstack Developer</title>
</head>

<div class="relative">
  <div class={"bg-radial-[at_0%_0%] from-zinc-100 to-50% to-zinc-900 absolute h-80 w-80 top-0 left-0 -z-10"}></div>
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
        Specialized in web development
      </p>
    </div>
    <div
      class="md:row-start-1 md:row-span-2 justify-self-center md:justify-self-start w-fit"
    >
      <ProfileCard />
    </div>
    <div class="md:col-start-2 mb-4 mt-8 md:mt-2 md:w-fit md:ml-6">
      <div class="flex gap-6 items-center mx-auto md:mx-0 w-fit">
        <a href={GITHUB_LINK} class="opacity-30 hover:opacity-100"
          ><span class="hidden">View github profile</span><img
            src={github}
            alt="logo
    of github"
            height="40"
            width="40"
          /></a
        >
        <!--
        <a
          href="https://github.com/mahefatsiresy"
          class="opacity-30 hover:opacity-100"
          ><span class="hidden">View linkedin profile</span><img
            src={linkedin}
            alt="logo
    of github"
            height="40"
            width="40"
          /></a
        >
        -->
        <a
          href="mailto:mahefatsiresy.n.lucas@gmail.com"
          class="p-2 px-4 bg-zinc-50 text-zinc-900 rounded-lg font-semibold"
          >Contact me</a
        >
      </div>
    </div>
  </div>
</section>
</div>

<TechStack />

<section id="experiences" class={wrapper}>
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
          <ProjectCard {project} />
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <h3 class="text-xl mt-6 mb-4 font-semibold">College projects</h3>
    <ul class="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
      {#each collegeProjects as project (project.name)}
        <li>
          <ProjectCard {project} />
        </li>
      {/each}
    </ul>
  </section>
</section>

<section id="educations" class={wrapper}>
  <SectionTitle title={"🎓 Educations and certificates"} />
  <ul class="space-y-6">
    {#each educations as education}
      <li>
        <article>
          <h3 class="font-semibold">{education.diploma} ({education.date})</h3>
          <p>{education.college.name}</p>
        </article>
      </li>
    {/each}
  </ul>
</section>

<!--

<section id="contact"></section>
-->
<footer class="mt-8 p-2">
  <p class="text-center text-xs">&copy; Copyright {new Date().getFullYear()}</p>
</footer>
