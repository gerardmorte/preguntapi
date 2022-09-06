import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function StartQuiz() {
    const [actualQuestion, setActualQuestion] = useState(5);
    const [questions, setQuestions] = useState([]);
    const { category, limit } = useParams();

    useEffect(() => {
        fetch(`/api/v1/questions?category=${category}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    return (
        <main>
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
                                {console.log(Object.values(question.answers))}
                                {Object.values(question.answers).map(
                                    (answer) => (
                                        <button>{answer}</button>
                                    )
                                )}
                            </>
                        );
                    }
                })}
            </div>
        </main>
    );
}
