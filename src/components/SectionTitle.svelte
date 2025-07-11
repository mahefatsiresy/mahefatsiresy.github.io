<script lang="ts">
  type Props = { title: string };

  let { title }: Props = $props();
</script>

<div class="flex items-center gap-2 mt-8 mb-2 text-2xl">
  <h2 class="font-semibold">{title}</h2>
</div>
