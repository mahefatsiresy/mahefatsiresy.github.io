<script lang="ts">
  import type {Project} from '$lib/types';
  let {project} : { project: Project} = $props();
</script>

<article class="relative rounded-lg">
  <div class="flex flex-col-reverse">
    <h4 class="my-2 mb-0 font-semibold"><a href="/projects/id" ><span class="absolute inset-0"></span>{project.name}</a></h4>
    <img class="w-full aspect-16/9 bg-red-500 rounded-lg object-cover" src={project.image} alt={`screenshot of ${project.name}`}/>
  </div>
  <p>{project.description}</p>
  <p class="text-xs mt-1 text-end">{project.date}</p>
</article>
