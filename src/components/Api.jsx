import { Container, Row, Col, Button } from "react-bootstrap";
import carbonSnipet from "../assets/carbon2.png";

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
        <Container className="my-auto mt-5">
            <Container>
                <h1>
                    <b>Documentación</b>
                </h1>
                <p className="w-75 fs-4">
                    Esta documentación lo ayudará a familiarizarse con los
                    recursos de la API le mostrará cómo realizar diferentes
                    consultas, para que pueda aprovecharla al máximo.
                </p>
            </Container>
            <Container>
                <pre>{texto}</pre>
            </Container>

            <Container className="mx-auto">
                <img
                    src={carbonSnipet}
                    alt="snippet json"
                    className="img-fluid"
                />
            </Container>
        </Container>
    );
}

export default Api;
