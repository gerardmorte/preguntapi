import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
export default function StartQuiz() {
    const { category, limit } = useParams();
    const [actualQuestion, setActualQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    // const [btnColor, setBtnColor] = useState("warning");
    const [btnDisabled, setBtnDisabled] = useState();
    const [btnNextDisabled, setBtnNextDisabled] = useState(true);
    const [quizEnd, setQuizEnd] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch(`/api/v1/questions?category=${category}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    return (
        <Container className="text-center my-auto">
            <div>
                {quizEnd ?
                    <>
                        <h1 className="mt-4 mb-4">{category.toUpperCase()}</h1>
                        <h1 className="mb-4">Puntuación: {score} de {questions.length} </h1>
                    </> : (
                        <div>
                            <h1 className="mt-4 mb-4">{category.toUpperCase()}</h1>
                            <h2>Pregunta {actualQuestion + 1} de {questions.length} </h2>
                            <h2 className="mb-4"> Puntuación: {score} de {questions.length}</h2>
                            <div className="mb-3">
                                {questions.map((question, index) => {
                                    if (index == actualQuestion) {
                                        return (<>
                                            <h2 className="text-center text-break mb-4">{question.question}</h2>
                                            {Object.keys(question.answers).map((key) => {
                                                const value = question.answers[key]
                                                return (
                                                    <div className="d-grid mb-2">
                                                        <Button
                                                            //variant={btnColor}
                                                            disabled={btnDisabled}
                                                            className="mt-2 fs-5 fw-semibold bg-warning text-dark border-0"
                                                            size="lg"
                                                            onClick={(e) => {
                                                                if (key === question.correct_answer) {
                                                                    e.target.classList.remove("bg-warning");
                                                                    e.target.classList.add("bg-success");
                                                                    //setBtnColor("success")
                                                                    setBtnDisabled(true);
                                                                    setScore(score + 1);
                                                                } else {
                                                                    e.target.classList.remove("bg-warning");
                                                                    e.target.classList.add("bg-danger");
                                                                    //setBtnColor("danger");
                                                                    setBtnDisabled(true);
                                                                }
                                                                setBtnNextDisabled(false);
                                                                if (actualQuestion == questions.length - 1) {
                                                                    setBtnNextDisabled(true);
                                                                    setTimeout(() => {
                                                                        setQuizEnd(true);
                                                                    }, 2000)
                                                                }
                                                            }}>
                                                            {value}
                                                        </Button>
                                                    </div>
                                                );
                                            })} </>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    )}
            </div>
            <div className="d-grid">
                {quizEnd ? (
                    <>
                        <Button variant="primary" size="lg" className="fs-5 fw-bold mb-4 mt-2" onClick={() => {
                            location.reload()
                        }}>
                            REPETIR QUIZ
                        </Button>
                        <Link to="/quiz">
                            <Button className="w-100 fs-5 fw-bold" variant="primary">
                                SALIR
                            </Button>
                        </Link>
                    </>
                ) : (
                    <Button
                        variant="primary"
                        className="fs-5 fw-bold"
                        size="lg"
                        disabled={btnNextDisabled}
                        onClick={() => {
                            setActualQuestion(actualQuestion + 1);
                            setBtnDisabled(false);
                           // setBtnColor("warning");
                            setBtnNextDisabled(true);
                        }}
                    >
                        SIGUIENTE
                    </Button>
                )}
            </div>
        </Container>
    );
}
