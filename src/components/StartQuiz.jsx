import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function StartQuiz() {
    const { category, limit } = useParams();
    const [quizzes, setQuizzes] = useState([]);
    const [actualQuizIndex, setActualQuestionIndex] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState();
    const [btnNextDisabled, setBtnNextDisabled] = useState(true);
   

    useEffect(() => {
        fetch(`/api/v1/quizzes?category=${category}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setQuizzes(data))
            .catch((err) => console.log(err.message));
    }, []);
 
    return (
        <Container className="text-center my-auto">
            <div>
                {quizEnd ? (
                    <>
                        <h1 className="mt-4 mb-4">{category.toUpperCase()}</h1>
                        <h1 className="mb-4">
                            Puntuación: {quizScore} de {quizzes.length}{" "}
                        </h1>
                    </>
                ) : (
                    <>
                        <h1 className="mt-4 mb-4">{category.toUpperCase()}</h1>
                        <h2>
                            Pregunta {actualQuizIndex + 1} de{" "}
                            {quizzes.length}{" "}
                        </h2>
                        <h2 className="mb-4">
                            {" "}
                            Puntuación: {quizScore} de {quizzes.length}
                        </h2>
                        {quizzes.map((quiz,index) => {
                            if(index == actualQuizIndex){
                                return (<h2 className="mb-4">{quiz.question}</h2>)
                            }
                        })}
                        <div>
                            {quizzes.map((quiz, index) => {
                                if (index == actualQuizIndex) {
                                    return (
                                        <div className="d-grid mb-2">
                                            {Object.keys(quiz.answers).map(((key) => {
                                                const value = quiz.answers[key];
                                                return (
                                                    <Button
                                                        className="mt-2 fs-5 fw-semibold bg-warning text-dark border-0 text-break shadow"
                                                        disabled={btnDisabled}
                                                        size="lg"
                                                        onClick={(e) => {
                                                            if (key === quiz.correct_answer) {
                                                                e.target.classList.replace("bg-warning", "bg-success");
                                                                setBtnDisabled(true);
                                                                setQuizScore(quizScore + 1);
                                                            } else {
                                                                e.target.classList.replace("bg-warning", "bg-danger");
                                                                setBtnDisabled(true);
                                                            }
                                                            setBtnNextDisabled(false);
                                                            if (actualQuizIndex == quizzes.length - 1) {
                                                                setBtnNextDisabled(true);
                                                                setTimeout(() => {
                                                                    setQuizEnd(true)
                                                                }, 2000);
                                                            }
                                                        }}>
                                                        {value}
                                                    </Button>
                                                );
                                            }))}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </>
                )}
            </div>
            <div className="d-grid">
                {quizEnd ? (
                    <>
                        <Link to={`/startQuiz/${category}/${limit}`}>
                            <Button
                                className="w-100 fs-5 fw-bold shadow mb-4 mt-2"
                                variant="primary"
                                onClick={() => {
                                    setActualQuestionIndex(0);
                                    setQuizEnd(false);
                                    setQuizScore(0);
                                    setBtnDisabled(false);
                                }}
                            >
                                REPETIR QUIZ
                            </Button>
                        </Link>
                        <Link to="/quiz">
                            <Button
                                className="w-100 fs-5 fw-bold shadow"
                                variant="primary"
                            >
                                SALIR
                            </Button>
                        </Link>
                    </>
                ) : (
                    <Button
                        variant="primary"
                        className="fs-5 fw-bold mb-2 shadow"
                        size="lg"
                        disabled={btnNextDisabled}
                        onClick={() => {
                            setActualQuestionIndex(actualQuizIndex + 1);
                            setBtnDisabled(false);
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
