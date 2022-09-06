import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function StartQuiz() {
    // const [quizCategory, setQuizCategory] = useState();
    // const [quizLimit, setQuizLimit] = useState();
    const [questions, setQuestions] = useState([]);
    const { category, limit } = useParams();

    // useEffect(() => {
    //     setQuizCategory(category);
    //     setQuizLimit(limit);
    // }, [category, limit]);

    useEffect(() => {
        fetch(`/api/v1/questions?category=${category}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    console.log(questions);

    return (
        <Container>
            {questions.map((question) => (
                <h1>{question.question}</h1>
            ))}
        </Container>
    );
}
