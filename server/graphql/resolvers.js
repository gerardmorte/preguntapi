const quizzes = require('../utils/languages')
const categories = require('../database/categories.json')

const resolvers = {
  Query: {
    getCategories: () => categories.categories,
    getCategory: (parent, args) => {
      const category = args.category
      const limit = args.limit
      const level = args.level

      let filteredQuizzes = quizzes[category]

      if (level) {
        const filteredQuizzesLevel = filteredQuizzes
          .filter((quiz) => level === 'aleatorio' || quiz.level === level)

        if (filteredQuizzesLevel.length <= 0) {
          return { message: 'Por favor ingrese un nivel valido' }
        }

        filteredQuizzes = filteredQuizzesLevel.sort(() => Math.random() - 0.5)
      }

      if (limit && !isNaN(limit)) {
        filteredQuizzes = filteredQuizzes.slice(0, limit)
      }

      return filteredQuizzes
    }
  }
}

module.exports = resolvers
