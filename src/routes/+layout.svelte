<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";

    let { children } = $props();

    const links = [
        { href: "/#about", text: "About", icon: "😀", id: "about" },
        {
            href: "/#experiences",
            text: "Experiences",
            icon: "💼",
            id: "experiences",
        },
        { href: "/#projects", text: "Projects", icon: "📁", id: "projects" },
        {
            href: "/#educations",
            text: "Educations",
            icon: "🎓",
            id: "educations",
        },
    ];

    let activeHash = $state("");

    function updateHash() {
        activeHash = window.location.hash.replace("#", "");
    }

    onMount(() => {
        updateHash();
        window.addEventListener("hashchange", updateHash);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (visible) {
                    activeHash = visible.target.id;
                    history.replaceState(null, "", `#${activeHash}`);
                }
            },
            {
                threshold: [0.25, 0.5, 0.75],
            },
        );

        links.forEach((link) => {
            const section = document.getElementById(link.id);
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener("hashchange", updateHash);
            observer.disconnect();
        };
    });
</script>

<nav
    class="p-2 fixed bottom-6 left-4 right-4 bg-zinc-800/60 backdrop-blur-xl z-50 w-fit lg:top-6 lg:h-fit mx-auto rounded-full"
>
    <ul class="grid grid-cols-4 gap-2 w-full">
        {#each links as link}
            <li
                class="relative flex flex-col items-center text-xs p-1 px-3 rounded-full font-semibold transition-all duration-200
        hover:text-green-500 hover:rotate-12 {activeHash === link.id
                    ? 'text-green-400'
                    : 'text-zinc-300'}"
            >
                <div
                    class="text-lg px-1 flex items-center justify-center rounded-full bg-transparent mb-1 {activeHash ===
                    link.id
                        ? 'shadow-green-500 shadow-inner'
                        : 'bg-transparent'}"
                >
                    {link.icon}
                </div>

                <a href={link.href}>
                    <span class="absolute inset-0"></span>
                    {link.text}
                </a>
            </li>
        {/each}
    </ul>
</nav>

{@render children()}
