const express = require('express')
const router = express.Router()

router.use('/categories', require('./categories'))

module.exports = router
