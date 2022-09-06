import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ScoreQuiz() {
    const { score } = useParams();

    return (
        <Container>
            <h1>{score}</h1>
        </Container>
    );
}
