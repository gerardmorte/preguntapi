const { GraphQLError } = require('graphql')
const quizzes = require('../utils/languages')
const categories = require('../database/categories.json')

const resolvers = {
  Query: {
    getCategories: () => categories.categories,
    getCategory: (parent, args) => {
      const category = args.category
      const limit = args.limit
      const level = args.level

      let filteredQuizzes = quizzes[category] ?? []

      if (level) {
        const filteredQuizzesLevel = filteredQuizzes
          .filter((quiz) => level === 'aleatorio' || quiz.level === level)

        if (filteredQuizzesLevel.length <= 0) {
          throw BadUserInputException('Invalid level')
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

function BadUserInputException (message = '') {
  return new GraphQLError(message, {
    extensions: {
      code: 'BAD_USER_INPUT'
    }
  })
}

module.exports = resolvers
