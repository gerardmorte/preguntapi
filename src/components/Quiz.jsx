import { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Quiz() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("html");
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        fetch("/api/v1")
            .then((res) => res.json())
            .then((data) => setCategories(Object.keys(data.categories)))
            .catch((err) => console.log(err.message));
    }, []);

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
                {categories.map((item) => {
                    return <option value={item}>{item.toUpperCase()}</option>;
                })}
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
