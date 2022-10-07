import { useState, useEffect } from "react";
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
      .then((res) => res.json())
      .then((data) => {
        setFlagLevelsQuiz(
          data
            .map((quiz) => Object.keys(quiz).includes("level"))
            .every((level) => level == true)
        );
        setTotalLevelQuestions(data.length);
        if (level != "aleatorio" && data.length < 10) {
          setLimit(data.length);
        }
      });
  }, [category, level]);

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
    <div className="container m-auto w-8/12 ">
      <h1 className="text-4xl">Elige una categoria:</h1>
      <select
        className="select w-full max-w-full mt-4 text-xl font-normal"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categories.map((item) => {
          return <option value={item}>{item.toUpperCase()}</option>;
        })}
      </select>

      {flagLevelsQuiz && (
        <>
          <h1 className="text-4xl mt-9">Dificultad:</h1>

          <select className="select w-full max-w-full mt-4 text-xl font-normal" onChange={handleLevel}>
            <option>ALEATORIO</option>
            <option>FÁCIL</option>
            <option>NORMAL</option>
            <option>DIFÍCIL</option>
          </select>
        </>
      )}

      <h1 className="text-4xl mt-9">Total preguntas:</h1>
      <select
        className="select w-full max-w-full mt-4 text-xl font-normal"
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      >
        {randomQuiz && (
          <>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </>
        )}

        {!randomQuiz && totalLevelQuestions <= 10 && (
          <>
            <option>{totalLevelQuestions}</option>
          </>
        )}

        {!randomQuiz && totalLevelQuestions > 10 && totalLevelQuestions < 15 && (
          <>
            <option>10</option>
            <option>{totalLevelQuestions}</option>
          </>
        )}

        {!randomQuiz && totalLevelQuestions >= 15 && totalLevelQuestions < 20 && (
          <>
            <option>10</option>
            <option>15</option>
            <option>{totalLevelQuestions}</option>
          </>
        )}

        {!randomQuiz && totalLevelQuestions >= 20 && (
          <>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </>
        )}
      </select>

      <Link to={link}>
        <button
          type="submit"
          className="btn btn-block btn-primary mt-12 text-xl"
        >
          Empezar Quiz!
        </button>
      </Link>
    </div>
  );
}
