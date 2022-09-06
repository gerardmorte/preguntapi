import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function StartQuiz() {
    const [actualQuestion, setActualQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const { category, limit } = useParams();
    const [btnColor, setBtnColor] = useState("warning");
    const [btnDisabled, setBtnDisabled] = useState();

    useEffect(() => {
        fetch(`/api/v1/questions?category=${category}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    return (
        <Container>
            <div>
                Pregunta {actualQuestion + 1} de {questions.length}
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
                                                } else {
                                                    setBtnColor("danger");
                                                    setBtnDisabled(true);
                                                }
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
            <Button
                onClick={() => {
                    if (actualQuestion < questions.length - 1) {
                        setActualQuestion(actualQuestion + 1);
                        setBtnDisabled(false);
                        setBtnColor("warning");
                    }
                }}
            >
                NEXT
            </Button>
        </Container>
    );
}
