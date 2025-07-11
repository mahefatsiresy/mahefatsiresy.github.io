<script>
  import typescriptLogo from "$lib/assets/typescript.svg";
  import gitLogo from "$lib/assets/git.svg";
  import nextJsLogo from "$lib/assets/nextjs.svg";
  import figmaLogo from "$lib/assets/figma.svg";
  import tailwindCssLogo from "$lib/assets/tailwindcss.svg";
  import postgreSQLLogo from "$lib/assets/postgres.png";
  import SectionTitle from "./SectionTitle.svelte";
  import { wrapper } from "$lib/styles";

  const techs = [
    {
      name: "Next.js",
      description: "Fullstack JS framework",
      logo: {
        src: nextJsLogo,
        alt: "logo of Next.js",
        height: 32,
        width: 32,
      },
    },
    {
      name: "Typescript",
      description: "Programming language",
      logo: {
        src: typescriptLogo,
        alt: "logo of Typescript",
        height: 32,
        width: 32,
      },
    },
    {
      name: "Tailwind CSS",
      description: "CSS Utility",
      logo: {
        src: tailwindCssLogo,
        alt: "logo of Tailwind CSS",
        height: 32,
        width: 32,
      },
    },
    {
      name: "PostgreSQL",
      description: "Relational database",
      logo: {
        src: postgreSQLLogo,
        alt: "logo of PostgreSQL",
        height: 32,
        width: 32,
      },
    },
    {
      name: "Git",
      description: "Version control",
      logo: {
        src: gitLogo,
        alt: "logo of Git",
        height: 32,
        width: 32,
      },
    },
    {
      name: "Figma",
      description: "Design tool",
      logo: {
        src: figmaLogo,
        alt: "logo of Figma",
        height: 40,
        width: 32,
      },
    },
  ];
</script>

<section class={wrapper}>
  <SectionTitle title={"🧰 Tech Stack"} />
  <p class="text-zinc-300">My main crafting tools</p>
  <dl class="flex gap-3 flex-wrap mt-6">
    {#each techs as tech}
      <li
        class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit"
      >
        <img
          src={tech.logo.src}
          alt={tech.logo.alt}
          height={tech.logo.height}
          width={tech.logo.height}
          class="rounded-sm w-8 h-8 object-contain"
        />
        <div>
          <dt class="font-semibold mb-1">{tech.name}</dt>
          <dd class="text-zinc-400 w-28 truncate">{tech.description}</dd>
        </div>
      </li>
    {/each}
  </dl>
</section>
