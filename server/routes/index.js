const express = require('express')
const router = express.Router()

router.use('/categories', require('./categories'))
router.use('/quizzes', require('./quizzes'))

module.exports = router
