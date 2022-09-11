import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import Quiz from "./components/Quiz";
import Api from "./components/Api";
import Home from "./components/Home";
import StartQuiz from "./components/StartQuiz";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useTour } from "@reactour/tour";

function App() {
    const { setIsOpen, setCurrentStep, isOpen } = useTour();

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="text-warning ps-3 mt-2"
                    id="nav-brand"
                >
                    <h4>preguntAPI</h4>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="border-0 shadow-none me-2"
                />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={`justify-content-end pe-2 mt-2 ps-4 ${
                        isOpen ? "show" : "hide"
                    }`}
                >
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            <h4 className="fw-light ">Inicio</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to="quiz" id="nav-quiz">
                            <h4 className="fw-light">Quiz</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to="info-api" id="nav-api">
                            <h4 className="fw-light pe-2">API</h4>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/"
                            onClick={() => {
                                setCurrentStep(0);
                                setIsOpen(true);
                            }}
                            id="nav-tour"
                        >
                            <h4 className="fw-light text-warning">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-question-circle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                </svg>
                            </h4>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/info-api" element={<Api />} />
                <Route
                    path="/startQuiz/:category/:limit"
                    element={<StartQuiz />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <footer className="w-100 bg-dark mt-auto bottom-0 pt-2">
                <Link to="/" className="text-warning text-decoration-none">
                    <h4 className=" text-center">www.preguntapi.dev</h4>
                </Link>
            </footer>
        </div>
    );
}

export default App;
