import PreCode from './PreCode.jsx'

function Doc () {

  const texto1 = String.raw`
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

  const texto2 = String.raw`
  [
    {
      "id": "75",
      "category": "javascript",
      "level": "facil",
      "question": "¿Cómo llamas a una función ya creada llamada 'ejemplo'?",
      "answers": {
        "answer_a": "ejemplo()",
        "answer_b": "function ejemplo()",
        "answer_c": "execute function ejemplo()"
      },
      "correct_answer": "answer_a"
    },
    {
      "id": "83",
      "category": "javascript",
      "level": "facil",
      "question": "¿Cuál es un carácter no válido para iniciar un nombre de variable?",
      "answers": {
        "answer_a": "$",
        "answer_b": "_",
        "answer_c": "Cualquier número"
      },
      "correct_answer": "answer_c"
    },
    {
      "id": "79",
      "category": "javascript",
      "level": "facil",
      "question": "<p id=\"demo\">My awesome text</p> ... ¿Cuál es la sintaxis JS correcta para cambiar el contenido?",
      "answers": {
        "answer_a": "#demo.innerHTML = \"Edited!\"",
        "answer_b": "document.getElementById(\"demo\").innerHTML = \"Edited!\".",
        "answer_c": "document.getElementByName(\"p\").innerHTML = \"Edited!\""
      },
      "correct_answer": "answer_b"
    },
    {
      "id": "71",
      "category": "javascript",
      "level": "facil",
      "question": "¿Cuáles de estos pares de declaraciones se usan comúnmente para el manejo de errores?",
      "answers": {
        "answer_a": "err/res",
        "answer_b": "try/catch",
        "answer_c": "check/return"
      },
      "correct_answer": "answer_b"
    },
    {
      "id": "78",
      "category": "javascript",
      "level": "facil",
      "question": "¿Cuál es la forma correcta de incluir un archivo JS externo en HTML?",
      "answers": {
        "answer_a": "<script src=\"main.js\">",
        "answer_b": "<script href=\"main.js\">",
        "answer_c": "<script name=\"main.js\">"
      },
      "correct_answer": "answer_a"
    }
  ]
    `

  return (
    <>
      <div className='min-h-[calc(100vh-121px)] container mx-auto justify-start p-4'>
        <div class='flex flex-col pt-12 gap-6'>
          <h1 className='mb-10 text-3xl'>
            <b>Documentación</b>
          </h1>

          <div className='' id='informacion'>
            <h2 className='text-2xl'>
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
              compconstamente abiertos y disponibles.
            </p>
            <br />
            <h2 className='text-2xl'>
              <b>¿Por qué?</b>
            </h2>
            <p>
              Porque quería construir un proyecto de código abierto y nunca
              había creado una API, después de investigar por un tiempo no
              encontré ninguna en español de esta temática y surgió la idea de
              preguntAPI.
            </p>
          </div>

          <div className='' id='como-contribuir'>
            <h2 className='text-2xl'>
              <b>Como contribuir en el proyecto</b>
            </h2>
            <p>
              Si encuentras algún error en las preguntas o el funcionamiento de
              la API puedes{' '}
              <a
                className='text-decoration-none'
                href='https://github.com/gmorte/preguntapi/issues/new'
                target='_blank' rel='noreferrer'
              >
                enviar una sugerencia
              </a>{' '}
              o contribuir directamente en el proyecto mediante{' '}
              <a
                className='text-decoration-none'
                href='https://github.com/gmorte/preguntapi'
                target='_blank' rel='noreferrer'
              >
                GitHub
              </a>{' '}
              para añadir categorías, preguntas, mejorar el funcionamiento de la
              API o reportar errores.{' '}
            </p>
          </div>

          <div className='' id='endpoints'>
            <h2 className='text-2xl'>
              <b>URL base</b>
            </h2>
            <p>
              La URL base contiene información sobre todas las categorias
              disponibles.
            </p>
            <br />

            <PreCode code="https://www.preguntapi.dev/api/v1/categories" />
            <br />
            <PreCode code={texto1} />

            <br />
            <p>
              El único recurso disponible es "quizzes", se utiliza para obtener
              todos los quiz/preguntas. "quizzes" puede recibir los siguientes
              parámetros: "category", "limit" y "level". <br />
              <br />
              Level puede recibir los valores: facil, normal o dificil. <br />
              <br />
              Si solo se especifica "category" la API devolverá todas las
              preguntas de esa misma categoría. <br />
              <br />
              Todas las respuestas devolverán datos en formato json.
            </p>
            <p className='text-xl mb-4 mt-4'>
              <b>Ejemplo:</b>
            </p>

            <PreCode code="https://www.preguntapi.dev/api/v1/quizzes?category=javascript&limit=5&level=facil" />
            <br />
            <PreCode code={texto2} />

            <br />
            <h2 className='text-2xl'>
              <b>GraphQL</b>
            </h2>
            <p>
              También contamos con un endpoint para hacer consultas con GraphQL,
              no dudes en probarlo.
            </p>
            <br />
            <PreCode code="https://www.preguntapi.dev/graphql" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Doc
