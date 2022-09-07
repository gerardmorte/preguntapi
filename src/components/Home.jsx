import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="my-auto">
            <Container>
                <main className="mt-5 text-center mb-3">
                    <h1 className="mb-5">Bienvenido a QUIZPROGRAMMING!</h1>
                    <h2 className="mb-5">QUIZ & API</h2>
                    <h3 className="mb-5">
                        Aprende con nuestros quizzes de programación o usa
                        libremente la API
                    </h3>
                </main>

                <Container className="text-center">
                    <Row lg={1} className="justify-content-center">
                        <Col>
                            <Link to="quiz">
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="border border-dark mt-1 m-4 p-4 rounded-5 w-auto"
                                >
                                    <h2>Quieres hacer un Quiz?</h2>
                                    <span>
                                        <b>Clica aqui!</b>
                                    </span>
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="info-api">
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="border border-dark mt-1 m-4 p-4 rounded-5 w-auto"
                                >
                                    <h2>Quieres conocer la API?</h2>
                                    <span>
                                        <b>Clica aqui!</b>
                                    </span>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Home;
