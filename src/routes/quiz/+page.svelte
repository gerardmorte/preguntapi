<script lang="ts">
  export let data = {};
  const { category, quantity, questions } = data;

  let quiz = {
    category,
    quantity,
    index: 0,
    porcentage: 0,
    corrects: 0,
    incorrects: 0,
    anwsers: [],
    questions,
    status: "active",
  };

  let question = quiz.questions[quiz.index];
  $: {
    question = quiz.questions[quiz.index];
    question.awsers = [];
    if (question) {
      question.awsers = Object.keys(question.answers).map((key) => {
        return {
          id: key,
          text: question.answers[key],
        };
      });
    }
  }

  const handleNext = () => {
    if (quiz.questions.length === quiz.anwsers.length + 1) {
      quiz.status = "finished";
      quiz.porcentage = 100;
      return false;
    }
    quiz.index++;
    quiz.porcentage = quiz.index * 10;
    quiz.anwsers.push({
      selected: question.awsersSelected,
      correct: question.correct,
    });
    question.correct ? quiz.corrects++ : quiz.incorrects++;
  };

  const handleShare = () => {
    const url = "https://www.facebook.com/sharer/sharer.php?u=";
    const title = "Quiz";
    const text = `Acertei ${quiz.corrects} de ${quiz.quantity} perguntas no quiz ${quiz.category} do QuizApp`;
    const shareUrl = `${url}${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(text)}&hashtag=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank");
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
          Quiz de {category}!
        </h1>
        <p class="py-3">
          Aprende con mas de 3000 preguntas en 8 categorías y diferentes
          lenguajes de programación. <br />
          Repite el test y aprende cada vez mas.
        </p>

        <div>
          <p>
            Pregunta {quiz.index} de {quantity}
          </p>
          <p>
            <span class="p-2 py-3 badge">{quiz.corrects} 👍</span>
            <span class="p-2 py-3 badge">{quiz.incorrects} 👎</span>
          </p>
          <progress
            class="progress progress-info my-3"
            value={quiz.porcentage}
            max="100"
          />
        </div>

        {#if quiz.status === "active"}
          {#if question.awsers}
            <div>
              <h2 class="text-2xl font-bold mt-3 mb-3">{question.question}</h2>

              {#each question.awsers as { id, text }}
                <div
                  class={question.awsersSelected === id
                    ? "mockup-code mb-3 cursor-pointer bg-sky-900"
                    : "mockup-code mb-3 cursor-pointer"}
                  on:click={() => {
                    question.awsersSelected = id;
                    question.correct = id === question.correct_answer;
                  }}
                >
                  <pre><code>{text}</code></pre>
                </div>
              {/each}
              <button
                on:click={handleNext}
                class="btn bg-lime-400 hover:bg-lime-600 border-0 text-black mx-auto"
              >
                Siguiente
              </button>
            </div>
          {/if}
        {:else}
          <h2 class="text-2xl font-bold mt-3 mb-3">
            Puntuación: {quiz.corrects} de {quiz.quantity}
          </h2>
          {#each quiz.anwsers as { selected, correct }}
            <div
              class={correct
                ? "mockup-code mb-3 cursor-pointer bg-sky-900"
                : "mockup-code mb-3 cursor-pointer bg-red-400"}
            >
              <pre><code>{selected}</code></pre>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
