<script>
  import SectionTitle from './SectionTitle.svelte'
  import ProjectCard from './ProjectCard.svelte'
  import { experiences } from '../lib/data/experience.ts'
</script>

<SectionTitle title={"💼 Experiences"}/>

<dl class="list-none space-y-6 mt-8">
  {#each experiences as xp}
  <li>
    <dt class="mb-2">
      <p class="text-sm">({xp.date})</p>
      <p class="text-lg font-semibold">
        {xp.role}
      </p>
    </dt>
    <dd class="md:pl-4">
      <ul class="list-disc ml-8 md:ml-4">
        {#each xp.tasks as tsk}
          <li>{tsk}</li>
        {/each}
      </ul>
      <section class="mt-4">
        <h3 class="text-sm font-semibold mb-2">Works</h3>
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each xp.works as work}
            <li>
              <ProjectCard project={work}/>
            </li>
          {/each}
        </ul>
      </section>
    </dd>
  </li>
  {/each}
</dl>
