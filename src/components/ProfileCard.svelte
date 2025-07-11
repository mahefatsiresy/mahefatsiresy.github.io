<script>
  import { MapPin, Tag } from "@lucide/svelte";
  import avatar from "$lib/assets/avatar.png";
</script>

<div
  class="rounded-lg p-4 bg-gradient-to-br from-zinc-50/30 to-zinc-800/30 backdrop-blur-xl max-w-sm lg:max-w-md shadow-inner shadow-zinc-100 drop-shadow-md drop-shadow-zinc-100/50"
>
  <div class="flex">
    <img
      src={avatar}
      alt="abstract 3d avatar with rock texture"
      height={320}
      width={320}
      class="h-24 w-24 object-contain lg:h-[128px] lg:w-auto"
    />
    <div class="pt-2">
      <p class="text-xl font-semibold mb-4">Mahefatsiresy</p>
      <p class="flex items-center text-sm text-zinc-300 gap-2 mb-2">
        <span class="w-4 h-4"><MapPin size={14} /></span>Antananarivo -
        Madagascar
      </p>
      <p class="flex items-center text-sm text-zinc-300 gap-2">
        <Tag size={14} /> Student & Freelancer
      </p>
    </div>
  </div>
  <p class="text-xs my-4 text-zinc-300">
    Speaks: Malagasy • English • Français
  </p>
  <p class="text-zinc-300 text-sm max-w-md">
    My name is RANDRIANARIVELO
    <span class="font-semibold">Mahefatsiresy</span>
    Nantenaina Lucas.
    <br />I love developing software and solving problems.
  </p>
</div>
