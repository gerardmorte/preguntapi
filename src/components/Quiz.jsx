import { useState } from "react";
import {
    Container,
    Nav,
    Navbar,
    Figure,
    Row,
    Col,
    Button,
    Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Api from "./Api";

function Quiz() {
    const [category, setCategory] = useState("javascript");
    const [limit, setLimit] = useState("10");

    return (
        <>
            <Container>
                <Container className="text-center">
                    <h4 className="p-5">Elige una categoria:</h4>
                    <Row className="p-5">
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                                />
                                <Figure.Caption className="text-center">
                                    <Button
                                        id="btn-html"
                                        variant="warning"
                                        onClick={(e) => {
                                            setCategory(
                                                e.target.textContent.toLowerCase()
                                            );
                                        }}
                                    >
                                        HTML
                                    </Button>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                                />
                                <Figure.Caption className="text-center">
                                    <Button
                                        id="btn-html"
                                        variant="warning"
                                        onClick={(e) => {
                                            setCategory(
                                                e.target.textContent.toLowerCase()
                                            );
                                        }}
                                    >
                                        CSS
                                    </Button>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                                />
                                <Figure.Caption className="text-center">
                                    <Button
                                        id="btn-html"
                                        variant="warning"
                                        onClick={(e) => {
                                            setCategory(
                                                e.target.textContent.toLowerCase()
                                            );
                                        }}
                                    >
                                        JAVASCRIPT
                                    </Button>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Container>

                <Container className="text-center">
                    <Form.Label>
                        <h4 className="p-5">Limite preguntas: {limit}</h4>
                    </Form.Label>
                    <br />
                    <Form.Range
                        className="w-25"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        step={10}
                        min={10}
                        max={30}
                    />
                </Container>

                <Container className="text-center p-5">
                    <Link to={`/startQuiz/${category}/${limit}`}>
                        <Button>Empezar Quiz</Button>
                    </Link>
                </Container>
            </Container>
        </>
    );
}

export default Quiz;
