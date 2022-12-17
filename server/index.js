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
app.use('/api/', require('./routes/index'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../web/dist', 'index.html'))
})

// starting the server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`)
})

module.exports = { app, server }
