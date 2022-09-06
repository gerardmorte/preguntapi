import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
export default function StartQuiz() {
    const { category, limit } = useParams();
    const [actualQuestion, setActualQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [btnColor, setBtnColor] = useState("warning");
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
        <Container>
            <div>
                <h1>
                    Pregunta {actualQuestion + 1} de {questions.length}
                </h1>
                <h1>
                    Puntuación: {score} de {questions.length}
                </h1>
            </div>
            <div>
                {questions.map((question, index) => {
                    if (index == actualQuestion) {
                        return (
                            <>
                                <h1>{question.question}</h1>
                                <h1>{question.category}</h1>

                                {Object.keys(question.answers).map((key) => {
                                    const value = question.answers[key];

                                    return (
                                        <Button
                                            variant={btnColor}
                                            disabled={btnDisabled}
                                            className="m-4"
                                            onClick={(e) => {
                                                if (
                                                    key ===
                                                    question.correct_answer
                                                ) {
                                                    setBtnColor("success");
                                                    setBtnDisabled(true);
                                                    setScore(score + 1);
                                                } else {
                                                    setBtnColor("danger");
                                                    setBtnDisabled(true);
                                                }
                                                setBtnNextDisabled(false);
                                            }}
                                        >
                                            {value}
                                        </Button>
                                    );
                                })}
                            </>
                        );
                    }
                })}
            </div>
            <div>
                {quizEnd ? (
                    <Link to={`/scoreQuiz/${score}`}>
                        <Button disabled={btnNextDisabled}>
                            Ver puntuación
                        </Button>
                    </Link>
                ) : (
                    <Button
                        disabled={btnNextDisabled}
                        onClick={() => {
                            setActualQuestion(actualQuestion + 1);
                            setBtnDisabled(false);
                            setBtnColor("warning");
                            setBtnNextDisabled(true);
                            if (actualQuestion == questions.length - 2) {
                                setQuizEnd(true);
                            }
                        }}
                    >
                        NEXT
                    </Button>
                )}
            </div>
        </Container>
    );
}
