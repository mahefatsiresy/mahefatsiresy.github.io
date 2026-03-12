<script>
    import typescriptLogo from "$lib/assets/typescript.svg";
    import gitLogo from "$lib/assets/git.svg";
    import nextJsLogo from "$lib/assets/nextjs.svg";
    import figmaLogo from "$lib/assets/figma.svg";
    import tailwindCssLogo from "$lib/assets/tailwindcss.svg";
    import postgreSQLLogo from "$lib/assets/postgres.png";
    import flutterLogo from "$lib/assets/flutter.svg";
    import reactLogo from "$lib/assets/react.svg";
    import pythonLogo from "$lib/assets/python.svg";
    import SectionTitle from "./SectionTitle.svelte";
    import { wrapper } from "$lib/styles";

    const mainTechs = [
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
    const sideTechs = [
        {
            name: "Flutter",
            description: "Framework for building mutli-platform applications",
            logo: {
                src: flutterLogo,
                alt: "logo of flutter",
                height: 32,
                width: 32,
            },
        },
        {
            name: "React Native",
            description:
                "React framework for building iOS and Android applications",
            logo: {
                src: reactLogo,
                alt: "logo of react native",
                height: 32,
                width: 32,
            },
        },
        {
            name: "Python",
            description: "General purpose programming language",
            logo: {
                src: pythonLogo,
                alt: "logo of Figma",
                height: 32,
                width: 32,
            },
        },
    ];
</script>

<section class={wrapper}>
    <SectionTitle title={"🧰 Tech Stack"} />
    <dl class="flex gap-3 flex-wrap mt-6">
        {#each mainTechs as tech}
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
                    <dd class="text-zinc-400 w-28 truncate">
                        {tech.description}
                    </dd>
                </div>
            </li>
        {/each}
    </dl>
    <div class="border-t border-t-zinc-600 my-6 w-1/2 mx-auto"></div>
    <dl class="flex gap-3 flex-wrap opacity-60">
        {#each sideTechs as tech}
            <li
                class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/10 to-zinc-900/30 w-fit"
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
                    <dd class="text-zinc-400 w-28 truncate">
                        {tech.description}
                    </dd>
                </div>
            </li>
        {/each}
    </dl>
</section>
