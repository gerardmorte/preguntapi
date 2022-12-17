const { Router } = require('express')
const router = Router()
const { quizzes: data } = require('../repository')

router.get('/:category?', (req, res) => {
  const category = req.params.category

  if (!category) {
    const link = getUrl(req)
    let countQuestions = 0
    const categories = Object.entries(data).map(([language, _data]) => {
      countQuestions += _data.length
      return { name: language, count_questions: _data.length, link: link + language }
    })

    return res.status(200).json({ categories, totalCategories: categories.length, totalQuestions: countQuestions })
  }

  if (!data[category]) {
    return res.status(404).json({ message: `Category {${category}} not found` })
  }

  const { status = 200, response = {} } = quizzes(category, req.query)
  return res.status(status).json(response)
})

module.exports = router

/**
 * Response quizzes API path
 *
 * @param category Category filter
 * @param {limit, level} - Query string from URL
 * @returns
 */
const quizzes = (category, { limit, level }) => {
  let quizzes = data[category]

  /** Query `level` from URL */
  if (level) {
    const levels = ['facil', 'dificil', 'normal', 'aleatorio']
    if (levels.includes(level)) {
      quizzes = quizzes
        .filter((quiz) => level === 'aleatorio' || quiz.level === level)
        .sort(() => Math.random() - 0.5)
    } else {
      return { status: 401, response: { message: `Query level {${level}} is incorrect, fields permitted: [${levels}]` } }
    }
  }

  /** Query `limit` from URL */
  if (limit) {
    if (!isNaN(limit)) {
      quizzes = quizzes.slice(0, limit)
    } else {
      return { status: 401, response: { message: `Query limit {${limit}} is incorrect, changed it and try again` } }
    }
  }

  return { status: 200, response: quizzes }
}

const getUrl = (req) => {
  const protocol = req.protocol
  const host = req.hostname
  const url = req.originalUrl
  const port = host === 'localhost' ? ':' + (process.env.PORT || 5000) : ''

  return `${protocol}://${host}${port}${url}/`
}
