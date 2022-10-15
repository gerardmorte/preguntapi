function Doc() {
  let texto1 = String.raw`
  {
    "categories": [
      {
        "name": "html",
        "link": "https://www.preguntapi.dev/api/v1/quizzes?category=html"
      },
      {
        "name": "css",
        "link": "https://www.preguntapi.dev/api/v1/quizzes?category=css"
      },
      {
        "name": "javascript",
        "link": "https://www.preguntapi.dev/api/v1/quizzes?category=javascript"
      }
    ]
  }
    `;
  let texto2 = String.raw`
    [
      {
        "id": "61",
        "category": "javascript",
        "level": "facil",
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
        "level": "dificil",
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
        "level": "normal",
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
        "level": "dificil",
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
        "level": "normal",
        "question": "¿Cuál es el método para agregar elementos al comienzo de un array?",
        "answers": {
          "answer_a": "push()",
          "answer_b": "unshift()",
          "answer_c": "pop()"
        },
        "correct_answer": "answer_b"
      }
    ]
    `;

  return (
    <>
      <div className="min-h-[calc(100vh-121px)] container mx-auto justify-start p-4">
        <div class="flex flex-col pt-12 gap-6">
          <h1 className="mb-10 text-3xl">
            <b>Documentación</b>
          </h1>

          <div className="" id="informacion">
            <h2 className="text-2xl">
              <b>Información</b>
            </h2>
            <p>
              Actualmente nuestra API solo cuenta con un método para consultar
              datos por el método GET, Pero tenemos las puertas abiertas para
              que puedas contribuir a nuestro proyecto y agregar más perguntas y
              respuestas.
            </p>
            <p>
              No requiere autenticación, y todos los recursos están
              completamente abiertos y disponibles.
            </p>
            <br />
            <h2 className="text-2xl">
              <b>¿Por qué?</b>
            </h2>
            <p>
              Porque quería construir un proyecto de código abierto y nunca
              había creado una API, después de investigar por un tiempo no
              encontré ninguna en español de esta temática y surgió la idea de
              preguntAPI.
            </p>
          </div>

          <div className="" id="como-contribuir">
            <h2 className="text-2xl">
              <b>Como contribuir en el proyecto</b>
            </h2>
            <p>
              Si encuentras algún error en las preguntas o el funcionamiento de
              la API puedes{" "}
              <a
                className="text-decoration-none"
                href="https://github.com/gmorte/preguntapi/issues/new"
                target="_blank"
              >
                enviar una sugerencia
              </a>{" "}
              o contribuir directamente en el proyecto mediante{" "}
              <a
                className="text-decoration-none"
                href="https://github.com/gmorte/preguntapi"
                target="_blank"
              >
                GitHub
              </a>{" "}
              para añadir categorías, preguntas, mejorar el funcionamiento de la
              API o reportar errores.{" "}
            </p>
          </div>

          <div className="" id="endpoints">
            <h2 className="text-2xl">
              <b>URL base</b>
            </h2>
            <p>
              La URL base contiene información sobre todas las categorias
              disponibles.
            </p>
            <br />
            <div class="mockup-code">
              <pre data-prefix="$">
                <code>{"https://www.preguntapi.dev/api/v1/categories"}</code>
              </pre>
            </div>
            <br />
            <div class="mockup-code">
              <pre data-prefix="$">
                <code>{texto1}</code>
              </pre>
            </div>

            <br />
            <p>
              El único recurso disponible es "quizzes", se utiliza para obtener
              todos los quiz/preguntas. "quizzes" puede recibir dos parámetros:
              "category" y "limit". <br />
              <br />
              Si solo se especifica "category" la API devolverá todas las
              preguntas de esa misma categoría. <br />
              <br />
              Todas las respuestas devolverán datos en formato json.
            </p>
            <p className="text-xl mb-4 mt-4">
              <b>Ejemplo:</b>
            </p>
            <div class="mockup-code">
              <pre data-prefix="$">
                <code>
                  {
                    "https://www.preguntapi.dev/api/v1/quizzes?category=javascript&limit=5"
                  }
                </code>
              </pre>
            </div>
            <br />
            <div class="mockup-code">
              <pre data-prefix="$">
                <code>{texto2}</code>
              </pre>
            </div>
            <br />
            <h2 className="text-2xl">
              <b>GraphQL</b>
            </h2>
            <p>
              También contamos con un endpoint para hacer consultas con GraphQL, no dudes en probarlo.
            </p>
            <br />
            <div class="mockup-code">
              <pre data-prefix="$">
                <code>{"https://www.preguntapi.dev/graphql"}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doc;
