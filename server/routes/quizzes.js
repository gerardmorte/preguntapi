const { Router } = require('express')
const router = Router()
const quizzes = require('../utils/languages')

router.get('/', (req, res) => {
  const { category, limit, level } = req.query

  if (!category) {
    return res.status(500).json({ message: 'Debe de ingresar una categoria' })
  }

  if (category === 'all') {
    return res.status(200).json(quizzes)
  }

  let filteredQuizzes = quizzes[category]

  if (level) {
    filteredQuizzes = filteredQuizzes
      .filter((quiz) => level === 'aleatorio' || quiz.level === level)

    if (filteredQuizzes.length <= 0) {
      return res.status(500).json({ message: 'Por favor ingrese un nivel valido' })
    }

    filteredQuizzes.sort(() => Math.random() - 0.5)
  }

  if (limit && !isNaN(limit)) {
    filteredQuizzes = filteredQuizzes.slice(0, limit)
  }

  return res.status(200).json(filteredQuizzes)
})

module.exports = router
