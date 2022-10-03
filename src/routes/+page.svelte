<script lang="ts">
  export let data: any[] = [];
  const categories: string[] = Object.keys(data);

  let categorySelected;
  let countAnswered;
  let errorForm;

  const images = {
    html: "https://img.icons8.com/color/452/html-5--v1.png",
    css: "https://img.icons8.com/color/344/css3.png",
    javascript: "https://img.icons8.com/color/452/javascript--v1.png",
    java: "https://img.icons8.com/color/452/java-coffee-cup-logo--v1.png",
    sql: "https://cdn-icons-png.flaticon.com/512/2772/2772165.png",
    swift: "https://img.icons8.com/fluency/452/swift.png",
    kotlin: "https://img.icons8.com/color/452/kotlin.png",
    typescript: "https://img.icons8.com/fluency/452/typescript--v2.png",
    cobol:
      "https://devskiller.com/wp-content/plugins/devskiller-catalog/assets/images/skills/cobol.png?022172ea",
  };
</script>

<svelte:head>
  <title>Home - preguntAPI</title>
  <meta name="description" content="The project for news" />
</svelte:head>

<div class="container mx-auto">
  <div class="hero min-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)]">
    <div class="hero-content flex-row">
      <div>
        <h1
          class="
            font-extrabold
            text-transparent
            text-6xl
            bg-clip-text
            bg-gradient-to-r
            to-lime-400
            from-sky-900"
        >
          Preguntas y respuestas de programación
        </h1>
        <p class="py-6">
          Aprende con mas de 3000 preguntas en 8 categorías y diferentes
          lenguajes de programación. <br />
          Repite el test y aprende cada vez mas.
        </p>
        {#if errorForm}
          <div class="alert alert-error shadow-lg mb-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
              >
              <span>{errorForm}</span>
            </div>
          </div>
        {/if}

        <div class="flex flex-col gap-3">
          {#if categories.length > 0}
            <div class="flex flex-wrap gap-3">
              {#each categories as category}
                <button
                  on:click={() => (categorySelected = category)}
                  class="btn bg-lime-400 hover:bg-lime-600 border-0 text-black gap-2"
                >
                  <img
                    src={images[category]}
                    alt={category}
                    class="w-8 h-8 object-cover"
                  />
                  {category}
                </button>
              {/each}
            </div>

            {#if categorySelected}
              <div class="flex flex-row gap-3">
                <div class="form-control">
                  <select
                    class="select select-bordered"
                    bind:value={countAnswered}
                  >
                    <option value="0" disabled selected
                      >Cuantas preguntas de
                      {categorySelected}
                      ?</option
                    >
                    <option value="10"
                      >10 preguntas de {categorySelected}</option
                    >
                    <option value="15"
                      >15 preguntas de {categorySelected}</option
                    >
                    <option value="20"
                      >20 preguntas de {categorySelected}</option
                    >
                  </select>
                </div>
                <div class="form-control">
                  <a
                    href="/quiz?category={categorySelected}&limit={countAnswered}"
                    class="btn bg-sky-900 hover:bg-sky-800 border-0"
                  >
                    Empezar Quiz!
                  </a>
                </div>
              </div>
            {/if}
          {:else}
            <p class="text-2xl">Cargando...</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
