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
import Api from "./components/Api";
import Home from "./components/Home";
import StartQuiz from "./components/StartQuiz";
import ScoreQuiz from "./components/ScoreQuiz";

import { Route, Routes, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-warning">
                        preguntAPI
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="quiz">
                                Quiz
                            </Nav.Link>
                            <Nav.Link as={Link} to="api">
                                API
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="api" element={<Api />} />
                <Route
                    path="startQuiz/:category/:limit"
                    element={<StartQuiz />}
                />
                <Route path="scoreQuiz/:score" element={<ScoreQuiz />}></Route>
            </Routes>
        </div>
    );
}

export default App;
