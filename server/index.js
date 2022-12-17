const express = require('express')
const app = express()
const path = require('path')

require('dotenv').config()

// settings
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())

// routes
const buildPath = path.join(__dirname, '../web', 'dist')
app.use(express.static(buildPath))
app.use('/api/v1', require('./routes/v1/index'))
app.use('/api/v2', require('./routes/v2/index'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../web/dist', 'index.html'))
})

// starting the server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`)
})

module.exports = { app, server }
