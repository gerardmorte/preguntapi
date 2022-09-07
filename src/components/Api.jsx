import { Container } from "react-bootstrap";

function Api() {
    let texto = String.raw`
    [
        {
          "id": "1",
          "category": "html",
          "question": "¿Cuál de estos es un elemento de bloque?",
          "answers": {
            "answer_a": "<span>",
            "answer_b": "<table>",
            "answer_c": "<em>",
            "answer_d": "<img>",
            "answer_e": null,
            "answer_f": null
          },
          "correct_answer": "answer_b"
        },
        {
          "id": "2",
          "category": "html",
          "question": "¿Cuál es la sintaxis correcta para añadir un \"checkbox\"?",
          "answers": {
            "answer_a": "<checkbox>",
            "answer_b": "<check>",
            "answer_c": "<input tpye='checkbox'>",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
          },
          "correct_answer": "answer_c"
        },
        {
          "id": "3",
          "category": "html",
          "question": "¿Qué define el atributo \"action\" en el elemento <form>?",
          "answers": {
            "answer_a": "El método http para enviar los datos del formulario.",
            "answer_b": "Dónde enviar los datos del formulario cuando se envían",
            "answer_c": "El tipo mime utilizado para codificar el contenido.",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
          },
          "correct_answer": "answer_b"
        },
        {
          "id": "4",
          "category": "html",
          "question": "¿Cuál es la sinstaxis válida de los comentarios en html?",
          "answers": {
            "answer_a": "<!-- Comentario -->",
            "answer_b": "/* Comentario */",
            "answer_c": "// Comentario",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
          },
          "correct_answer": "answer_a"
        },
        {
          "id": "5",
          "category": "html",
          "question": "¿Qué significa html?",
          "answers": {
            "answer_a": "Hypertext Markdown Language",
            "answer_b": "Hypertext Machine Language",
            "answer_c": "Hypertext Markup Language",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
          },
          "correct_answer": "answer_c"
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
                <br /> No se requiere autenticación para acceder a esta API, y
                todos los recursos están completamente abiertos y disponibles.
            </p>
            <br />
            <h2>
                <b>URL base</b>
            </h2>
            <p className="fs-5 mx-auto">
                La URL base és la URL raíz para toda la API y contiene toda la
                información de la API disponible.
                <br /> <br />
                <b>La URL base es:</b>
            </p>
            <div className="p-2 overflow-scroll">
                <p className="fs-5 ">
                    https://quizprogramming.com/api/v1/questions
                </p>
            </div>
            <br />
            <p className="fs-5 mx-auto">
                El unico recurso disponible es "questions", se utiliza para
                obtener todas las preguntas. "questions" puede recibir dos
                parametros: "category" y "limit".
                <br />
                <br />
                Si solo se especifica "category" la API devolvera todas las
                preguntas de esa misma categoria. <br /> <br /> Todas las
                respuestas devolverán datos en formato json.
            </p>
            <p className="fs-5 mx-auto">
                <b>Ejemplo:</b>
            </p>
            <p className="fs-5 mx-auto">
                .../api/v1/questions?category=html&limit=5
            </p>
            <pre>{texto}</pre>
        </Container>
    );
}

export default Api;
