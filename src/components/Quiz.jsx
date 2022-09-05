import { useState } from "react";
import {
    Container,
    Nav,
    Navbar,
    Figure,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Api from "./Api";

function Quiz() {
    const [category, setCategory] = useState("");

    return (
        <>
            <Container>
                <h4 className="p-4">Elige una categoria: </h4>
                <Container className="text-center">
                    <Row>
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
                                            setCategory(e.target.textContent);
                                            console.log(category);
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
                                    <Button variant="warning">CSS</Button>
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
                                    <Button variant="warning">
                                        JAVASCRIPT
                                    </Button>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Button
                        onClick={() => {
                            return "sdasdasd";
                        }}
                    >
                        Click!
                    </Button>
                </Container>
            </Container>
        </>
    );
}

export default Quiz;
