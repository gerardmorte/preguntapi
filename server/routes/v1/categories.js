const { Router } = require('express')
const router = Router()
const { categories } = require('../../repository')

router.get('/', (req, res) => {
  res.json(categories)
})

module.exports = router
