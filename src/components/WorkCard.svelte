<script lang="ts">
    import type { Project } from "$lib/types";
    let { project }: { project: Project } = $props();
</script>

<article
    class="relative rounded-lg border border-zinc-700/80 group overflow-hidden hover:-translate-y-1 duration-300 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/40"
>
    {#if project.image}
        <img
            class="w-full aspect-video bg-zinc-800/80 rounded-lg object-cover rounded-b-none group-hover:scale-105 transition-transform duration-300"
            src={project.image}
            alt={`screenshot of ${project.name}`}
        />
    {:else}
        <div
            class="w-full aspect-video bg-zinc-800/80 grid place-items-center text-zinc-400"
        >
            Preview unavailable
        </div>
    {/if}
    <div class="p-2">
        <h4 class="my-2 mb-0 font-semibold">
            <a href="/projects/{project.slug}"
                ><span class="absolute inset-0"></span>{project.name}</a
            >
        </h4>
        <p class="text-zinc-300 mt-1">{project.description}</p>
        <p class="text-xs mt-1 text-end">{project.date}</p>
    </div>
</article>
