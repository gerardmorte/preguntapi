import { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const levels = ["facil", "normal", "dificil", "aleatorio"];

export default function Quiz() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("html");
  const [limit, setLimit] = useState(10);
  const [level, setLevel] = useState("aleatorio");
  const [link, setLink] = useState(
    `/startQuiz?category=${category}&limit=${limit}`
  );
  const [totalLevelQuestions, setTotalLevelQuestions] = useState();
  const [randomQuiz, setRandomQuiz] = useState(true);
  const [flagLevelsQuiz, setFlagLevelsQuiz] = useState(false);

  useEffect(() => {
    fetch("/api/v1")
      .then((res) => res.json())
      .then((data) => setCategories(Object.keys(data.categories)))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    setLink(`/startQuiz?category=${category}&level=${level}&limit=${limit}`);
  }, [category, level, limit]);

  useEffect(() => {
    fetch(`/api/v1/quizzes?category=${category}&level=${level}`)
      .then(res => res.json())
      .then(data => {
        setFlagLevelsQuiz(data.map(quiz => Object.keys(quiz).includes("level")).every(level => level == true));
        console.log(data.map(quiz => Object.keys(quiz).includes("level")).every(level => level == true))
        setTotalLevelQuestions(data.length);
        if(level != "aleatorio" && data.length < 10){
          setLimit(data.length);
        }
      })
  },[category, level])

  const handleLevel = (e) => {
    if (e.target.value === "FÁCIL") {
      setLevel(levels[0]);
      setRandomQuiz(false);
    }

    if (e.target.value === "NORMAL") {
      setLevel(levels[1]);
      setRandomQuiz(false);
    }

    if (e.target.value === "DIFÍCIL") {
      setLevel(levels[2]);
      setRandomQuiz(false);
    }

    if (e.target.value === "ALEATORIO") {
      setLevel(levels[3]);
      setRandomQuiz(true);
    }
  };

  return (
    <Container className="my-auto">
      <Form.Label>
        <h1>Elige una categoria:</h1>
      </Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categories.map((item) => {
          return <option value={item}>{item.toUpperCase()}</option>;
        })}
      </Form.Select>

      {flagLevelsQuiz && (
        <>
          <Form.Label className="mt-5">
            <h1>Dificultad:</h1>
          </Form.Label>
          <Form.Select size="lg" onChange={handleLevel}>
            <option>ALEATORIO</option>
            <option>FÁCIL</option>
            <option>NORMAL</option>
            <option>DIFÍCIL</option>
          </Form.Select>
        </>
      )}

      <Form.Label className="mt-5">
        <h1>Total preguntas:</h1>
      </Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      >
        {randomQuiz && 
        <>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        </>}

        {!randomQuiz && totalLevelQuestions <= 10 &&
        <>
        <option>{totalLevelQuestions}</option>
        </>}

        {!randomQuiz && totalLevelQuestions > 10 && totalLevelQuestions < 15 &&
        <>
        <option>10</option>
        <option>{totalLevelQuestions}</option>
        </>}

        {!randomQuiz && totalLevelQuestions >= 15 && totalLevelQuestions < 20 &&
        <>
        <option>10</option>
        <option>15</option>
        <option>{totalLevelQuestions}</option>
        </>}

        {!randomQuiz && totalLevelQuestions >= 20 &&
        <>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        </>}
      </Form.Select>

      <Link to={link}>
        <Button
          variant="primary"
          type="submit"
          className="mt-5 w-100 fs-5 fw-bold shadow"
          size="lg"
        >
          Empezar Quiz!
        </Button>
      </Link>
    </Container>
  );
}
