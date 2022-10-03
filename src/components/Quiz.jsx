import { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { flagLevelsQuizz } from "../featureFlags/featureFlags";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const levels = ["facil", "normal", "dificil"];

export default function Quiz() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("html");
  const [limit, setLimit] = useState(10);
  const [level, setLevel] = useState(levels[random(0, 2)]);
  const [link, setLink] = useState(
    `/startQuiz?category=${category}&limit=${limit}`
  );

  useEffect(() => {
    fetch("/api/v1")
      .then((res) => res.json())
      .then((data) => setCategories(Object.keys(data.categories)))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    setLink(`/startQuiz?category=${category}&level=${level}`);
  }, [level]);

  useEffect(() => {
    setLink(`/startQuiz?category=${category}&limit=${limit}`);
  }, [limit]);

  const handleLevel = (e) => {
    if (e.target.value === "FÁCIL") {
      setLevel(levels[0]);
    }

    if (e.target.value === "NORMAL") {
      setLevel(levels[1]);
    }

    if (e.target.value === "DIFÍCIL") {
      setLevel(levels[2]);
    }

    if (e.target.value === "ALEATORIO") {
      setLevel(levels[random(0, 2)]);
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

      {flagLevelsQuizz && (
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
        <option>10</option>
        <option>15</option>
        <option>20</option>
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
