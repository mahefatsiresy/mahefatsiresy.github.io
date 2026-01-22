<script lang="ts">
    import { MapPin } from "@lucide/svelte";
    import profile from "$lib/assets/profile.png";
    import { onMount } from "svelte";

    let card: HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { top, left, width, height } = card.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const rotateX = (y / height - 0.5) * -20;
        const rotateY = (x / width - 0.5) * 20;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.setProperty("--rotateX", `${rotateX}deg`);
        card.style.setProperty("--rotateY", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
        card.style.setProperty("--rotateX", "0deg");
        card.style.setProperty("--rotateY", "0deg");
    };

    onMount(() => {
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    });
</script>

<div class="relative group" style="perspective: 1000px;">
    <div
        bind:this={card}
        style="
		--x:50%;
		--y:50%;
		--rotateX:0deg;
		--rotateY:0deg;
	"
        class="rounded-lg max-w-sm min-w-xs lg:max-w-md p-0.5 h-fit mx-auto transition-transform duration-300 ease-out"
    >
        <div
            class="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style="background: radial-gradient(400px circle at var(--x) var(--y), rgba(255, 255, 255, 0.2), transparent);"
        ></div>
        <div
            class="rounded-lg p-6 md:p-3 lg:p-6 bg-zinc-800/80 backdrop-blur-xl max-w-sm lg:max-w-md border border-zinc-700/80"
        >
            <div class="flex gap-4">
                <img
                    src={profile}
                    alt="abstract 3d avatar with rock texture"
                    height={320}
                    width={320}
                    class="h-32 w-32 object-cover lg:object-contain lg:h-[128px] lg:w-auto rounded-full"
                />
                <div class="pt-2">
                    <p class="text-xl font-semibold mb-4">Mahefatsiresy</p>
                    <p class="flex items-center text-sm text-zinc-300 gap-2">
                        <span class="w-4 h-4"><MapPin size={14} /></span
                        >Antananarivo - Madagascar
                    </p>
                </div>
            </div>
            <p class="text-zinc-300 text-sm max-w-md ml-4 mt-4">
                Speaks Malagasy, English and French.
            </p>
        </div>
    </div>
</div>

<style>
    .group:hover .rounded-lg {
        transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
    }
</style>
