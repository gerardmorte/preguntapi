import { Container } from "react-bootstrap";

function Api() {
    let texto = String.raw`
    {
        "id": "1",
        "category": "html",
        "question": "¿Cuál de estos es un elemento de bloque?",
        "answers": {
          "answer_a": "<span>",
          "answer_b": "<table>",
          "answer_c": "<em>",
          "answer_d": "<img>"
        },
    `;

    return (
        <Container className="my-auto">
            <h1 className="mb-5 ">
                <b>Documentación</b>
            </h1>
            <p className="fs-5 mx-auto">
                Esta documentación lo ayudará a familiarizarse con los recursos
                de la API le mostrará cómo realizar diferentes consultas, para
                que pueda aprovecharla al máximo.
            </p>

            <pre>{texto}</pre>
        </Container>
    );
}

export default Api;
