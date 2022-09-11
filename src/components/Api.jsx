import { Container } from "react-bootstrap";

function Api() {
    let texto1 = String.raw`
    {
      "categories": {
        "html": "https://www.preguntapi.dev/api/v1/quizzes?category=html",
        "css": "https://www.preguntapi.dev/api/v1/quizzes?category=css",
        "javascript": "https://www.preguntapi.dev/api/v1/quizzes?category=javascript",
        "java": "https://www.preguntapi.dev/api/v1/quizzes?category=java",
        "sql": "https://www.preguntapi.dev/api/v1/quizzes?category=sql",
        "swift": "https://www.preguntapi.dev/api/v1/quizzes?category=swift",
        "kotlin": "https://www.preguntapi.dev/api/v1/quizzes?category=kotlin",
        "typescript": "https://www.preguntapi.dev/api/v1/quizzes?category=typescript"
      }
    }
    `;
    let texto2 = String.raw`
    [
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
    ]
    `;

    return (
        <Container className="my-auto">
            <h1 className="mt-5 mb-5">
                <b>Documentación</b>
            </h1>
            <h2>
                <b>Información</b>
            </h2>
            <p className="fs-5 mx-auto">
                Esta es una API solo de consumo: solo el método HTTP GET está
                disponible en los recursos. <br />
                No se requiere autenticación para acceder a esta API, y todos
                los recursos están completamente abiertos y disponibles.
            </p>
            <br />

            <h2>
                <b>¿Por qué?</b>
            </h2>
            <p className="fs-5 mx-auto">
                Porque quería construir un proyecto de código abierto y nunca
                había creado una API, después de investigar por un tiempo no
                encontré ninguna en español de esta temática y surgió la idea de
                preguntAPI.
            </p>
            <br />
            <h2>
                <b>Como contribuir en el proyecto</b>
            </h2>
            <p className="fs-5 mx-auto">
                Si encuentras algún error en las preguntas o el funcionamiento
                de la API puedes{" "}
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
                para añadir categorías, preguntas, mejorar el funcionamiento de
                la API o reportar errores.{" "}
            </p>

            <br />
            <h2>
                <b>URL base</b>
            </h2>
            <p className="fs-5 mx-auto">
                La URL base contiene información sobre todas las categorias
                disponibles.
                <br /> <br />
                <b>La URL base es:</b>
            </p>
            <div className="p-2 overflow-scroll">
                <p className="fs-5 ">
                    <a
                        className="text-decoration-none"
                        href=" https://www.preguntapi.dev/api/v1"
                        target={"_blank"}
                    >
                        https://www.preguntapi.dev/api/v1
                    </a>
                </p>
            </div>
            <pre>{texto1}</pre>
            <br />
            <p className="fs-5 mx-auto">
                El único recurso disponible es "quizzes", se utiliza para
                obtener todos los quiz/preguntas. "quizzes" puede recibir dos
                parámetros: "category" y "limit". <br />
                <br />
                Si solo se especifica "category" la API devolverá todas las
                preguntas de esa misma categoría. <br />
                <br />
                Todas las respuestas devolverán datos en formato json.
            </p>
            <p className="fs-5 mx-auto">
                <b>Ejemplo:</b>
            </p>
            <div className="p-2 overflow-scroll">
                <p className="fs-5 ">
                    <a
                        className="text-decoration-none"
                        href="https://www.preguntapi.dev/api/v1/quizzes?category=javascript&limit=5"
                        target={"_blank"}
                    >
                        https://www.preguntapi.dev/api/v1/quizzes?category=javascript&limit=5
                    </a>
                </p>
            </div>
            <pre>{texto2}</pre>
            <br />
        </Container>
    );
}

export default Api;
