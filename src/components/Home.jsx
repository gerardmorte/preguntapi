import {
    Container,
    // Nav,
    // Navbar,
    Figure,
    Row,
    Col,
    Button,
} from "react-bootstrap";

function Home() {
    return (
        <>
            <Container>
                <main className="mt-4 text-center">
                    <h1>PREGUNTAPI</h1>
                    <h2>¡Quizzes de programación y API!</h2>
                    <h3>HTML, CSS, JAVASCRIPT...</h3>
                    <h3>Y pronto, muchas mas!</h3>
                </main>
                <Container className="text-center">
                    <Row lg={1}>
                        <Col className="border border-dark m-4 p-4 bg-warning rounded">
                            <h1>Hacer un Quiz</h1>
                        </Col>
                        <Col className="border border-dark m-4 p-4 bg-warning rounded">
                            <h1>Conocer la API</h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;
