import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StartQuiz() {
    const [quizCategory, setQuizCategory] = useState();
    const [quizLimit, setQuizLimit] = useState();
    const { category, limit } = useParams();

    useEffect(() => {
        setQuizCategory(category);
        setQuizLimit(limit);
    }, [category, limit]);

    return (
        <div>
            Hola, has elegido la categoria: {quizCategory} y el limite de
            preguntas: {quizLimit}
        </div>
    );
}
