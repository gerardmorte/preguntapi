<script>
  import Iconnav from "../../utils/iconnav.svelte";
  const nav = [
    { name: "Inicio", icon: "home", link: "/" },
    { name: "Hacer un quiz!", icon: "info", link: "/quiz" },
    { name: "Documentación", icon: "mail", link: "/doc" },
  ];
</script>

<div class="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden text-white">
        <Iconnav />
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-900 rounded-box w-52"
      >
        {#each nav as { link, name }}
          <li>
            <a href={link} class="text-white hover:bg-sky-800">{name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl text-white">preguntAPI</a>
  </div>
  <div class="navbar-center hidden lg:flex ">
    <ul class="menu menu-horizontal p-0 text-white">
      {#each nav as { link, name }}
        <li><a href={link} class="hover:bg-sky-800">{name}</a></li>
      {/each}
    </ul>
  </div>
  <div class="navbar-end">
    <a
      href="https://github.com/gerardmorte/preguntapi"
      target="__blank"
      class="btn bg-lime-400 hover:bg-lime-600 border-0 gap-2 text-black"
    >
      <img src="/github.png" alt="Github" class="w-6 h-6" />
      GitHub
    </a>
  </div>
</div>
