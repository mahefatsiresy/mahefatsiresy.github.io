<script lang="ts">
    import type { SvelteComponent } from "svelte";

  let {Icon, text}: {Icon: SvelteComponent, text: string} = $props();
</script>

<li class="relative flex flex-col items-center gap-1">
  {Icon}
  <a href="/#about"><span class="absolute inset-0"></span>{text}</a>
</li>
