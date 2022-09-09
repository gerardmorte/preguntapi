import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Quiz() {
    const [category, setCategory] = useState("html");
    const [limit, setLimit] = useState(10);

    return (
        <Container className="my-auto">
            <Form.Label>
                <h1>Elige una categoria:</h1>
            </Form.Label>
            <Form.Select
                size="lg"
                onChange={(e) => {
                    setCategory(e.target.value);
                }}
            >
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JAVASCRIPT</option>
                <option value="java">JAVA</option>
                <option value="sql">SQL</option>
                <option value="swift">SWIFT</option>
                <option value="kotlin">KOTLIN</option>
            </Form.Select>
            <Form.Label className="mt-5">
                <h1>Total preguntas:</h1>
            </Form.Label>
            <Form.Select
                size="lg"
                onChange={(e) => {
                    setLimit(e.target.value);
                }}
            >
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
            </Form.Select>
            <Link to={`/startQuiz/${category}/${limit}`}>
                <Button
                    variant="primary"
                    type="submit"
                    className="mt-5 w-100 fs-5 fw-bold shadow"
                    size="lg"
                >
                    Empezar Quiz!
                </Button>
            </Link>
        </Container>
    );
}

export default Quiz;
