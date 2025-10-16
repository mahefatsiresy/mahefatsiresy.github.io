<script>
  import { MapPin, Info } from "@lucide/svelte";
  import avatar from "$lib/assets/avatar.png";
</script>

<div
  class="rounded-lg bg-radial-[at_0%_0%] from-zinc-50 to-50% to-zinc-800/90 backdrop-blur-xl max-w-sm min-w-xs lg:max-w-md p-0.5 h-fit mx-auto"
>
  <div
    class="rounded-lg p-6 md:p-3 lg:p-6 bg-radial-[at_0%-10%] from-zinc-300 to-45% to-zinc-800/90 backdrop-blur-xl max-w-sm lg:max-w-md"
  >
    <div class="flex gap-4">
      <img
        src={avatar}
        alt="abstract 3d avatar with rock texture"
        height={320}
        width={320}
        class="h-32 w-32 object-contain lg:h-[128px] lg:w-auto"
      />
      <div class="pt-2">
        <p class="text-xl font-semibold mb-4">Mahefatsiresy</p>
        <p class="flex items-center text-sm text-zinc-300 gap-2 mb-2">
          <Info size={14} /> Student & Freelancer
        </p>
        <p class="flex items-center text-sm text-zinc-300 gap-2">
          <span class="w-4 h-4"><MapPin size={14} /></span>Antananarivo -
          Madagascar
        </p>
      </div>
    </div>
    <p class="text-zinc-300 text-sm max-w-md ml-4 mt-4">
      Speaks Malagasy, English and French.
    </p>
  </div>
</div>
