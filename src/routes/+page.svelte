<script>
  // import ProjectCard from "../components/ProjectCard.svelte";
  import TechStack from "../components/TechStack.svelte";
  // import Experiences from "../components/Experiences.svelte";
  // import SectionTitle from "../components/SectionTitle.svelte";
  import ProfileCard from "../components/ProfileCard.svelte";
  import { wrapper } from "$lib/styles";
  import { GITHUB_LINK } from "$lib/data/contact";
  import github from "$lib/assets/github.svg";
  import linkedin from "$lib/assets/linkedin.png";
  // import { collegeProjects, personalProjects } from "$lib/data/projects";
</script>

<head>
  <title>Mahefatsiresy - Fullstack Developer</title>
</head>

<section id="about" aria-label="biography" class={`${wrapper} lg:mt-32`}>
  <div class="md:flex md:gap-16">
    <ProfileCard />
    <div>
      <h1
        class="text-2xl font-semibold text-center mt-8 lg:text-5xl lg:text-start"
      >
        Fullstack Developer
      </h1>
      <p class="text-center lg:text-start text-zinc-300 mt-2 mb-8">
        Specialized in web development
      </p>
      <div class="flex gap-6 items-center my-12 mx-auto lg:ml-32 w-fit">
        <a href={GITHUB_LINK} class="opacity-30 hover:opacity-100"
          ><span class="hidden">View github profile</span><img
            src={github}
            alt="logo
    of github"
            height="40"
            width="40"
          /></a
        >
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
        <a
          href="#contact"
          class="p-2 px-4 bg-zinc-50 text-zinc-900 rounded-lg font-semibold"
          >Contact me</a
        >
      </div>
    </div>
  </div>
</section>

<TechStack />
<!--<Experiences />

<section id="projects" class={wrapper}>
  <SectionTitle title={"📁 Projects"} />
  <p>Collection of the project I've worked on</p>

  <section>
    <h3 class="text-xl mt-6 mb-4 font-semibold">Personal projects</h3>
    <ul class="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
      {#each personalProjects as project (project.name)}
        <li>
          <ProjectCard {...project} />
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h3 class="text-xl mt-6 mb-4 font-semibold">College projects</h3>
    <ul class="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
      {#each collegeProjects as project (project.name)}
        <li>
          <ProjectCard {...project} />
        </li>
      {/each}
    </ul>
  </section>
</section>

<section id="contact"></section>
-->
