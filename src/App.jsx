import "./App.css";
import {
    Container,
    Nav,
    Navbar,
    Figure,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import Quiz from "./components/Quiz";

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-warning">
                        preguntAPI
                    </Navbar.Brand>
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
                    <h3>HTML, CSS, JAVASCRIPT...</h3>
                    <h3>Y pronto, muchas mas!</h3>
                </main>
                <Container className="text-center">
                    <Row>
                        <Col className="border border-dark m-4 p-4 bg-warning rounded">
                            <h1>Quizzes</h1>
                        </Col>
                        <Col className="border border-dark m-4 p-4 bg-warning rounded">
                            <h1>API</h1>
                        </Col>
                    </Row>
                </Container>
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
                                        variant="warning"
                                        onClick={(e) =>
                                            console.log(e.target.textContent)
                                        }
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
            </Container>
            <Container>
                <Button onClick={() => {
                    return <Quiz/>
                }}>Click!</Button>
            </Container>
        </>
    );
}

export default App;
