<script lang="ts">
  import "../app.css";
  import {
    BriefcaseBusiness,
    Folder,
    GraduationCap,
    Home,
  } from "@lucide/svelte";

  let { children } = $props();
</script>

<nav class="p-2 fixed bottom-6 left-4 right-4 rounded-lg bg-zinc-400/30 backdrop-blur-md text-zinc-300 z-50">
  <ul class="grid grid-cols-4 gap-4 w-full">
    <li class="relative flex flex-col items-center gap-1 text-xs p-1 bg-zinc-100 text-zinc-900 rounded-lg">
      <Home size={24} />
      <a href="/#about"><span class="absolute inset-0"></span>About</a>
    </li>
    <li class="relative flex flex-col items-center gap-1 text-xs w-full p-1 rounded-lg">
      <BriefcaseBusiness />
      <a href="/#about" class="block w-full truncate"
        ><span class="absolute inset-0"></span>Experiences</a
      >
    </li>
    <li class="relative flex flex-col items-center gap-1 text-xs w-full p-1 rounded-lg">
      <Folder size={24} />
      <a href="/#about"><span class="absolute inset-0"></span>Projects</a>
    </li>

    <li class="relative flex flex-col items-center gap-1 text-xs w-full p-1 rounded-lg">
      <GraduationCap size={24} />
      <a href="/#about" class="block w-full truncate"
        ><span class="absolute inset-0"></span>Educations</a
      >
    </li>
  </ul>
</nav>

{@render children()}
