import PreCode from '@/components/PreCode.jsx'

function Doc () {
  const texto1 = String.raw`
  {
    "categories": [
      {
        "name": "html",
        "count_questions": 35,
        "link": "http://www.preguntapi.dev/api/categories/html"
      },
      {
        "name": "css",
        "count_questions": 38,
        "link": "http://www.preguntapi.dev/api/categories/css"
      },
      {
        "name": "javascript",
        "count_questions": 40,
        "link": "http://www.preguntapi.dev/api/categories/javascript"
      },
      .
      .
      .
    ],
    "totalCategories": 13,
    "totalQuestions": 361
  }
    `

  const texto2 = String.raw`
  [
    {
      "id": "89",
      "category": "javascript",
      "level": "facil",
      "question": "const person = {name:\"John\", age:31, city:\"New York\"};... ¿cuál es la forma correcta de acceder a los valores?",
      "answers": {
        "answer_a": "person.name",
        "answer_b": "person[\"name\"]",
        "answer_c": "Ambas son correctas"
      },
      "correct_answer": "answer_c"
    },
    {
      "id": "325",
      "category": "javascript",
      "level": "facil",
      "question": "¿Qué sentencia puede tomar una sola expresión como entrada y luego buscar a través de un número de opciones hasta que se encuentre una que coincida con ese valor?",
      "answers": {
        "answer_a": "else",
        "answer_b": "when",
        "answer_c": "switch",
        "answer_d": "if"
      },
      "correct_answer": "answer_c"
    },
    {
      "id": "358",
      "category": "javascript",
      "level": "facil",
      "question": "¿Qué método de la API del navegador se utiliza para hacer una petición HTTP de forma nativa?",
      "answers": {
        "answer_a": "fetch(\"https://some-url-here.com\")",
        "answer_b": "axios.get(\"https://some-url-here.com\")",
        "answer_c": "makeRequest(\"https://some-url-here.com\")"
      },
      "correct_answer": "answer_a"
    },
    {
      "id": "66",
      "category": "javascript",
      "level": "facil",
      "question": "Cómo insertar un comentario que tiene más de una línea?",
      "answers": {
        "answer_a": "/*Este comentario tiene más de una línea.*/",
        "answer_b": "<!--Este comentario tiene más de una línea.-->",
        "answer_c": "//Este comentario tiene más de una línea.//"
      },
      "correct_answer": "answer_a",
      "feedback": " Los comentarios comienzan con /* y terminan con */ . Cualquier texto entre /* y */ serán ignorados por JavaScript."
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
      "correct_answer": "answer_a",
      "feedback": "La etiqueta HTML <script></script> solo puede utilizar el atributo 'src', 'href' es usado en enlaces con etiqueta <a></a>."
    }
  ]
    `

  return (
    <>
      <div className='min-h-[calc(100vh-121px)] container mx-auto justify-start p-4'>
        <div className='flex flex-col pt-12 gap-6'>
          <h1 className='mb-5 text-3xl'>
            <b>Documentación</b>
          </h1>

          <div className='' id='informacion'>
            <h2 className='text-2xl'>
              <b>Información</b>
            </h2>
            <p>
              ¡Bienvenido a preguntAPI! Una API de preguntas de programación.
            </p>
            <p>
              Esta es una API solo de consumo, solo el método GET está disponible en los recursos.
            </p>
            <p>No se requiere autenticación y todos los recursos están completamente abiertos y disponibles.</p>
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
              La URL base contiene información sobre todas las categorías
              disponibles, el número total de categorías, de preguntas por categoría y de preguntas de la API.
            </p>
            <br />

            <PreCode code='https://www.preguntapi.dev/api/categories' />
            <br />
            <PreCode code={texto1} copy={false} />

            <br />
            <p>
              Para obtener las preguntas concretas de una categoría, hay que añadir el nombre de la misma en la ruta y esta
              puede recibir los siguientes parámetros: "limit" y "level". <br />
              <br />
              Level puede recibir los valores: facil, normal o dificil. <br />
              <br />
              Si no se especifica un limite la API devolverá todas las
              preguntas de esa misma categoría.<br />
              <br />
              Todas las respuestas devolverán datos en formato json.
            </p>
            <p className='text-xl mb-4 mt-4'>
              <b>Ejemplo:</b>
            </p>

            <PreCode code='https://www.preguntapi.dev/api/categories/javascript?level=facil&limit=5' />
            <br />
            <PreCode code={texto2} copy={false} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Doc
