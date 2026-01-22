<script>
    import SectionTitle from "./SectionTitle.svelte";
    import WorkCard from "./WorkCard.svelte";
    import { experiences } from "../lib/data/experience";
</script>

<SectionTitle title={"💼 Experiences"} />

<dl class="list-none space-y-12 mt-8">
    {#each experiences as xp}
        <li>
            <dt class="mb-2">
                <p class="text-sm">({xp.date})</p>
                <p class="text-lg font-semibold text-green-500">
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
                    <h3 class="text-sm font-semibold mb-4">Works</h3>
                    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {#each xp.works as work}
                            <li>
                                <WorkCard project={work} />
                            </li>
                        {/each}
                    </ul>
                </section>
            </dd>
        </li>
    {/each}
</dl>
