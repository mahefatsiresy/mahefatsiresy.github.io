<script lang="ts">
  type Props = { title: string };

  let { title }: Props = $props();
</script>

<h2 class="flex items-center gap-2 mt-8 mb-2 text-2xl font-semibold">
  {title}
</h2>
