<script>
  import { MapPin, Tag } from "@lucide/svelte";
  import avatar from "$lib/assets/avatar.png";
  import github from "$lib/assets/github.svg";
  import linkedin from "$lib/assets/linkedin.png";
  import typescriptLogo from "$lib/assets/typescript.svg";
  import gitLogo from "$lib/assets/git.svg";
  import nextJsLogo from "$lib/assets/nextjs.svg";
  import figmaLogo from "$lib/assets/figma.svg";
  import tailwindCssLogo from "$lib/assets/tailwindcss.svg";
  import postgreSQLLogo from "$lib/assets/postgres.png"
</script>

<section id="about" aria-label="biography">
  <h1 class="text-2xl font-semibold text-center my-8">Full-Stack Developer</h1>
  <div
    class="rounded-lg p-4 bg-gradient-to-br from-zinc-50/30 to-zinc-800/30 backdrop-blur-xl"
  >
    <div class="flex">
      <img
        src={avatar}
        alt="abstract 3d avatar with rock texture"
        height={320}
        width={320}
        class="w-1/2 h-auto"
      />
      <div class="pt-2">
        <p class="text-xl font-semibold mb-4">Mahefatsiresy</p>
        <p class="flex items-center text-sm text-zinc-300 gap-2 mb-2">
          <span class="w-4 h-4"><MapPin size={16} /></span>Antananarivo -
          Madagascar
        </p>
        <p class="flex items-center text-sm text-zinc-300 gap-2">
          <Tag size={16} /> Student & Freelancer
        </p>
      </div>
    </div>
    <p class="text-xs my-4 text-zinc-300">
      Speaks: Malagasy • English • Français
    </p>
    <p class="text-zinc-300 text-sm">
      Hello, I am RANDRIANARIVELO <span class="font-semibold"
        >Mahefatsiresy</span
      > Nantenaina Lucas. I love developping software and solving problems.
    </p>
  </div>
  <div class="flex gap-6 items-center my-12 mx-auto w-fit">
    <a
      href="https://github.com/mahefatsiresy"
      class="opacity-30 hover:opacity-100"
      ><span class="hidden">View github profile</span><img
        src={github}
        alt="logo
    of github"
        height="40"
        width="40"
      /></a
    >
    <a
      href="https://github.com/mahefatsiresy"
      class="opacity-30 hover:opacity-100"
      ><span class="hidden">View linkedin profile</span><img
        src={linkedin}
        alt="logo
    of github"
        height="40"
        width="40"
      /></a
    >
    <a
      href="#contact"
      class="p-2 px-4 bg-zinc-50 text-zinc-900 rounded-lg font-semibold"
      >Contact me</a
    >
  </div>
</section>
<section>
  <h2 class="text-xl font-semibold pb-2">Tech Stack</h2>
  <p class="text-zinc-300">My main crafting tools</p>
  <dl class="flex gap-3 flex-wrap mt-6">
    <li class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit">
      <img src={typescriptLogo} alt="logo of typescript" height="32" width="32" class="rounded-sm"/>
      <div>
        <dt class="font-semibold mb-1">Typescript</dt>
        <dd class="text-zinc-400 w-28 truncate">Programming language</dd>
      </div>
    </li>
    <li class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit">
      <img src={gitLogo} alt="logo of git" height="32" width="32" class="rounded-sm"/>
      <div>
        <dt class="font-semibold mb-1">Git</dt>
        <dd class="text-zinc-400">Version control</dd>
      </div>
    </li>
    <li class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit">
      <img src={nextJsLogo} alt="logo of next.js" height="32" width="32" class="rounded-sm"/>
      <div>
        <dt class="font-semibold mb-1">Next.js</dt>
        <dd class="text-zinc-400  w-32 truncate">Fullstack JS framework</dd>
      </div>
    </li>
    <li class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit">
      <img src={figmaLogo} alt="logo of figma" height="40" width="32" class="rounded-sm h-[32px]"/>
      <div>
        <dt class="font-semibold mb-1">Figma</dt>
        <dd class="text-zinc-400">Design tool</dd>
      </div>
    </li>
    <li class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit">
      <img src={tailwindCssLogo} alt="logo of tailwindcss" width="32" class="rounded-sm w-[32px] h-auto"/>
      <div>
        <dt class="font-semibold mb-1">Tailwindcss</dt>
        <dd class="text-zinc-400">CSS Utility</dd>
      </div>
    </li>
    <li class="flex items-center gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-zinc-50/30 to-zinc-900/30 w-fit">
      <img src={postgreSQLLogo} alt="logo of tailwindcss" width="32" height="32" class="rounded-sm"/>
      <div>
        <dt class="font-semibold mb-1">PostgreSQL</dt>
        <dd class="text-zinc-400">Relational database</dd>
      </div>
    </li>
  </dl>
</section>
<section class="h-80">
</section>
<section id="contact">
</section>
