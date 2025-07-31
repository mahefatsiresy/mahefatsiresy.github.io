<script lang="ts">
  import "../app.css";

  let { children } = $props();

  const links = [
    {
      href: "/#about",
      text: "About",
      icon: "😀",
    },
    {
      href: "/#experiences",
      text: "Experiences",
      icon: "💼",
    },
    {
      href: "/#projects",
      text: "Projects",
      icon: "📁",
    },
    {
      href: "/#educations",
      text: "Educations",
      icon: "🎓",
    },
  ];
</script>

<nav
  class="p-2 fixed bottom-6 left-4 right-4 bg-zinc-300/60 backdrop-blur-md text-zinc-300 z-50 w-fit lg:top-6 lg:h-fit mx-auto rounded-full"
>
  <ul class="grid grid-cols-4 gap-2 w-full">
    {#each links as link}
      <li
        class="relative flex flex-col items-center text-xs p-1 px-3 text-zinc-900 rounded-full font-semibold"
      >
        <div class="text-lg">{link.icon}</div>
        <a href={link.href}><span class="absolute inset-0"></span>{link.text}</a
        >
      </li>
    {/each}
  </ul>
</nav>

{@render children()}
