import "./App.css";
import { Container, Nav, Navbar, Figure, Row, Col } from "react-bootstrap";

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">preguntAPI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#api">API</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <main className="mt-4 text-center">
                    <h1>PREGUNTAPI</h1>
                    <h2>¡Quizzes de programación y API!</h2>
                    {/* <h3>
                PreguntAPI és la primera api de preguntas de programación en
                español, és completamente abierta y no requiere de
                autenticación para consultar y obtener los datos.
            </h3>
            <h3>Preguntas de ...</h3> */}
                    <h3>HTML, CSS, JAVASCRIPT...</h3>
                    <h3>Y pronto, muchas mas!</h3>
                </main>
                <h4>Elige una categoria: </h4>
                <Container>
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
                                    HTML
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                                />
                                <Figure.Caption className="text-center">
                                    HTML
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                                />
                                <Figure.Caption className="text-center">
                                    HTML
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                                />
                                <Figure.Caption className="text-center">
                                    HTML
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    className="fluid"
                                    width={80}
                                    height={"auto"}
                                    src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
                                />
                                <Figure.Caption className="text-center">
                                    HTML
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default App;
