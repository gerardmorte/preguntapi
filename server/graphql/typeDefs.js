const { gql } = require('apollo-server-core')

const typeDefs = gql`
  type Answers {
    answer_a: String
    answer_b: String
    answer_c: String
    answer_d: String
  }
  type Quizz {
    id: ID
    category: String
    level: String
    question: String
    answers: Answers
    correct_answer: String
  }
  type Category {
    name: String
  }
  type Query {
    getCategories: [Category]
    getCategory(category: String!, limit: Int, level: String): [Quizz]
  }
`

module.exports = typeDefs
