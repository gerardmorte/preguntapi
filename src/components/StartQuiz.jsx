import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function StartQuiz() {
    const [actualQuestion, setActualQuestion] = useState(5);
    const [questions, setQuestions] = useState([]);
    const { category, limit } = useParams();
    const [qu, setQu] = useState();

    useEffect(() => {
        fetch(`/api/v1/questions?category=${category}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    useEffect(() => {
        questions.map((question, index) => {
            if (index == 0) {
                setQu(question);
            }
        });
    });

    console.log(qu);

    console.log(questions);

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
                            </>
                        );
                    }
                })}
            </div>
        </main>
    );
}
