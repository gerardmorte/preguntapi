import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

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
    <>
      <div className="hero min-h-[calc(100vh-121px)] container mx-auto justify-start">
        <div class="hero-content flex-col lg:flex-row">
          <div className="w-3/6">
            <Player
              src={
                "https://assets7.lottiefiles.com/packages/lf20_ayopewsc.json"
              }
              className="player w-full"
              loop
              autoplay
            />
          </div>
          <div className="w-3/6">
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">Preguntas de programación!</h1>
              <p className="py-6">
                Utiliza nuestra API en tus proyectos y dale una estrella en
                GitHub.
                <br />
                Aprende con mas de 3000 preguntas en 8 categorías.
                <br />
                Repite el test y aprende cada vez mas!
              </p>
              <div className="flex gap-2 mb-3 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="btn bg-sky-900 gap-2 border-none btn-category"
                    data-category={category}
                    onClick={(e) => {
                      // get attr key
                      const categorySelected =
                        e.target.getAttribute("data-category");
                      setCategory(categorySelected);

                      // change background to element current
                      const btns = document.querySelectorAll(".btn-category");
                      btns.forEach((btn) => btn.classList.remove("bg-sky-600"));
                      e.target.classList.add("bg-sky-600");
                    }}
                  >
                    {category.toUpperCase()}
                    <div className="badge bg-white text-black hidden">+99</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-2 mb-3 flex-wrap">
                {flagLevelsQuiz && (
                  <div className="btn bg-white border-2 border-sky-900 gap-2 cursor-default text-black hover:bg-transparent">
                    <p className="">Dificultad:</p>
                    <select
                      className="hover:bg-transparent"
                      onChange={handleLevel}
                    >
                      <option>ALEATORIO</option>
                      <option>FÁCIL</option>
                      <option>NORMAL</option>
                      <option>DIFÍCIL</option>
                    </select>
                  </div>
                )}
                <div className="btn bg-white border-2 border-sky-900 gap-2 cursor-default text-black hover:bg-transparent">
                  <p className="">Cantidad de preguntas:</p>
                  <select
                    className="hover:bg-transparent"
                    onChange={handleLevel}
                  >
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <Link to={link} className="btn bg-green-600 border-none">
                  Iniciar Quiz!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
