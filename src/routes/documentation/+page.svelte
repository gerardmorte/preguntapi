<script lang="ts">
</script>

<svelte:head>
  <title>Home - preguntAPI</title>
  <meta name="description" content="The project for news" />
</svelte:head>

<div class="container mx-auto">
  <div class="py-6">
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
          Documentación API
        </h1>

        <h3>Información</h3>
        <p>
          Esta es una API solo de consumo: solo el método HTTP GET está
          disponible en los recursos. No se requiere autenticación para acceder
          a esta API, y todos los recursos están completamente abiertos y
          disponibles.
        </p>

        <h3>¿Por qué?</h3>
        <p>
          Porque quería construir un proyecto de código abierto y nunca había
          creado una API, después de investigar por un tiempo no encontré
          ninguna en español de esta temática y surgió la idea de preguntAPI.
        </p>

        <h3>Como contribuir en el proyecto</h3>
        <p>
          Si encuentras algún error en las preguntas o el funcionamiento de la
          API puedes enviar una sugerencia o contribuir directamente en el
          proyecto mediante GitHub para añadir categorías, preguntas, mejorar el
          funcionamiento de la API o reportar errores.
        </p>

        <h3>EndPoints</h3>

        <p>
          La URL base contiene información sobre todas las categorías
          disponibles.
        </p>

        <div class="mockup-code">
          <pre data-prefix="$"><code>https://www.preguntapi.dev/api/v1</code
            ></pre>
        </div>

        Y el resultado es algo como:
        <div class="mockup-code">
          <pre data-prefix="$"><code
              >{`{
      "categories": {
        "html": "https://www.preguntapi.dev/api/v1/quizzes?category=html",
        "css": "https://www.preguntapi.dev/api/v1/quizzes?category=css",
        "javascript": "https://www.preguntapi.dev/api/v1/quizzes?category=javascript",
        "java": "https://www.preguntapi.dev/api/v1/quizzes?category=java",
        "sql": "https://www.preguntapi.dev/api/v1/quizzes?category=sql",
        "swift": "https://www.preguntapi.dev/api/v1/quizzes?category=swift",
        "kotlin": "https://www.preguntapi.dev/api/v1/quizzes?category=kotlin",
        "typescript": "https://www.preguntapi.dev/api/v1/quizzes?category=typescript",
        "cobol": "https://www.preguntapi.dev/api/v1/quizzes?category=cobol"
      }`}</code
            ></pre>
        </div>

        <p>
          El único recurso disponible es "quizzes", se utiliza para obtener
          todos los quiz/preguntas. "quizzes" puede recibir dos parámetros:
          "category" y "limit".
        </p>
        <p>
          Si solo se especifica "category" la API devolverá todas las preguntas
          de esa misma categoría.
        </p>
        <p>Todas las respuestas devolverán datos en formato json.</p>

        <div class="mockup-code">
          <pre data-prefix="$"><code
              >https://www.preguntapi.dev/api/v1/quizzes?category=javascript&limit=5</code
            ></pre>
        </div>

        <p>Y el resultado es algo como:</p>

        <div class="mockup-code">
          <pre data-prefix="$"><code
              >{`[
        {
          "id": "61",
          "category": "javascript",
          "question": "¿Javascript distingue entre mayúsculas y minúsculas?",
          "answers": {
            "answer_a": "Verdadero",
            "answer_b": "Falso"
          },
          "correct_answer": "answer_a"
        },
        {
          "id": "62",
          "category": "javascript",
          "question": "¿Qué palabra está relacionada con la herencia de clase?",
          "answers": {
            "answer_a": "expands",
            "answer_b": "exports",
            "answer_c": "extends"
          },
          "correct_answer": "answer_c"
        },
        {
          "id": "63",
          "category": "javascript",
          "question": "¿Qué controlador de eventos se utiliza para procesar el evento de clic?",
          "answers": {
            "answer_a": "onmouseclick",
            "answer_b": "onclick",
            "answer_c": "onkeydown"
          },
          "correct_answer": "answer_b"
        },
        {
          "id": "64",
          "category": "javascript",
          "question": "¿Cuál de estos métodos combina dos cadenas?",
          "answers": {
            "answer_a": "attach()",
            "answer_b": "append()",
            "answer_c": "concat()"
          },
          "correct_answer": "answer_c"
        },
        {
          "id": "65",
          "category": "javascript",
          "question": "Cómo insertar un comentario que tiene más de una línea?",
          "answers": {
            "answer_a": "/*Este comentario tiene más de una línea.*/",
            "answer_b": "<!--Este comentario tiene más de una línea.-->",
            "answer_c": "//Este comentario tiene más de una línea.//"
          },
          "correct_answer": "answer_a"
        }
    ]`}</code
            ></pre>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  h3 {
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 1.3rem;
  }
  .mockup-code {
    margin-bottom: 1.3rem;
  }
  p {
    margin-bottom: 10px;
  }
</style>
