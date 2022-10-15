const html = require('../database/quizzes/html.json')
const css = require('../database/quizzes/css.json')
const javascript = require('../database/quizzes/javascript.json')
const typescript = require('../database/quizzes/typescript.json')
const cobol = require('../database/quizzes/cobol.json')
const java = require('../database/quizzes/java.json')
const kotlin = require('../database/quizzes/kotlin.json')
const swift = require('../database/quizzes/swift.json')
const sql = require('../database/quizzes/sql.json')
const cpp = require('../database/quizzes/cpp.json')
const python = require('../database/quizzes/python.json')
const csharp = require('../database/quizzes/csharp.json')
const php = require('../database/quizzes/php.json')

const categories = require('../database/categories.json')

const quizzes = {
  html,
  css,
  javascript,
  typescript,
  cobol,
  java,
  kotlin,
  swift,
  sql,
  cpp,
  python,
  csharp,
  php
}

const resolvers = {
  Query: {
    getCategories: () => categories.categories,
    getCategory: (parent, args) => {
      const category = args.category
      const limit = args.limit
      const level = args.level

      if (!category) {
        return { message: 'Debe de ingresar una categoria' }
      }

      const filteredQuizzes = quizzes[category].filter(
        (quiz) => quiz.category === category
      )

      if (level && limit) {
        const filteredQuizzesLevel = filteredQuizzes.filter((quiz) => {
          if (level === 'aleatorio') {
            return quiz
          } else {
            return quiz.level === level
          }
        })

        filteredQuizzesLevel.sort(() => Math.random() - 0.5)

        const filteredQuizzesLength = limit <= filteredQuizzesLevel.length

        if (filteredQuizzesLevel.length > 0 && filteredQuizzesLength) {
          return filteredQuizzesLevel.slice(0, limit)
        } else {
          return { message: 'Por favor ingrese un limite o nivel valido' }
        }
      }

      if (level) {
        const filteredQuizzesLevel = filteredQuizzes.filter((quiz) => {
          if (level === 'aleatorio') {
            return quiz
          } else {
            return quiz.level === level
          }
        })

        if (filteredQuizzesLevel.length > 0) {
          return filteredQuizzesLevel
        } else {
          return { message: 'Por favor ingrese un nivel valido' }
        }
      }

      if (limit) {
        const filteredQuizzesLength = limit <= filteredQuizzes.length

        if (filteredQuizzesLength) {
          return filteredQuizzes.slice(0, limit)
        } else {
          return { message: 'Por favor ingrese un limite valido' }
        }
      }

      if (category) {
        if (filteredQuizzes) {
          return filteredQuizzes
        }
      } else {
        return { message: 'Recurso no encontrado' }
      }
    }
  }
}

module.exports = resolvers
