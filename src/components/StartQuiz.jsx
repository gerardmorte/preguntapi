import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StartQuiz() {
    const [quizCategory, setQuizCategory] = useState();
    const { category } = useParams();

    useEffect(() => {
        setQuizCategory(category);
    }, [category]);

    return <div>Hola {quizCategory}</div>;
}
