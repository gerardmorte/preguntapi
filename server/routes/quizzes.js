const { Router } = require("express");
const router = Router();

const html = require("../database/quizzes/html.json");
const css = require("../database/quizzes/css.json");
const javascript = require("../database/quizzes/javascript.json");
const typescript = require("../database/quizzes/typescript.json");
const cobol = require("../database/quizzes/cobol.json");
const java = require("../database/quizzes/java.json");
const kotlin = require("../database/quizzes/kotlin.json");
const swift = require("../database/quizzes/swift.json");
const sql = require("../database/quizzes/sql.json");
const cpp = require("../database/quizzes/cpp.json");

router.get("/", (req, res) => {
  const category = req.query.category;
  const limit = req.query.limit;
  const level = req.query.level;

  const quizzes = {
    html: html,
    css: css,
    javascript: javascript,
    typescript: typescript,
    cobol: cobol,
    java: java,
    kotlin: kotlin,
    swift: swift,
    sql: sql,
    cpp: cpp,
  };

  if (!category) {
    res.status(500).json({ message: "Debe de ingresar una categoria" });
  }

  const filteredQuizzes = quizzes[category].filter(
    (quiz) => quiz.category === category
  );

  if (level && limit) {
    const filteredQuizzesLevel = filteredQuizzes.filter(
      (quiz) => quiz.level === level
    );

    const filteredQuizzesLength = limit <= filteredQuizzesLevel.length;

    if (filteredQuizzesLevel > 0 && filteredQuizzesLength) {
      res.status(200).json(filteredQuizzesLevel.slice(0, limit));
    } else {
      res
        .status(500)
        .json({ message: "Por favor ingrese un limite o nivel valido" });
    }
  }

  if (level) {
    const filteredQuizzesLevel = filteredQuizzes.filter(
      (quiz) => quiz.level === level
    );

    if (filteredQuizzesLevel.length > 0) {
      res.status(200).json(filteredQuizzesLevel);
    } else {
      res.status(500).json({ message: "Por favor ingrese un nivel valido" });
    }
  }

  if (limit) {
    const filteredQuizzesLength = limit <= filteredQuizzes.length;

    if (filteredQuizzesLength) {
      res.status(200).json(filteredQuizzes.slice(0, limit));
    } else {
      res.status(500).json({ message: "Por favor ingrese un limite valido" });
    }
  }

  if (category) {
    if (filteredQuizzes) {
      res.status(200).json(filteredQuizzes);
    }
  } else {
    res.status(500).json({ message: "Recurso no encontrado" });
  }
});

module.exports = router;
