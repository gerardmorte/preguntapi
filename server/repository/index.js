const fs = require('fs')
const path = require('path')

const QUIZZES_PATH = path.join(__dirname, '..', 'database', 'quizzes')
const quizzesJsonFileNames = fs.readdirSync(QUIZZES_PATH)
const quizzes = {}
for (const quizJsonFileName of quizzesJsonFileNames) {
  const fileName = path.parse(quizJsonFileName).name
  quizzes[fileName] = require(path.join(QUIZZES_PATH, quizJsonFileName))
}

module.exports = { quizzes }
