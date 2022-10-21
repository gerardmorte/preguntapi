const { ApolloServer } = require('apollo-server-express')
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core')
const express = require('express')
const http = require('http')
const path = require('path')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const app = express()
require('dotenv').config()

// settings
const PORT = process.env.PORT || 5000

async function startApolloServer (typeDefs, resolvers) {
  // middlewares
  app.use(express.json())

  // routes
  const buildPath = path.join(__dirname, '../web', 'dist')
  app.use(express.static(buildPath))
  app.use('/api/v1', require('./routes/v1/index'))

  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
  })

  await server.start()
  server.applyMiddleware({ app })
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../web/dist', 'index.html'))
  })

  console.log(`🚀 Server started on port ${PORT}`)
}

startApolloServer(typeDefs, resolvers)
module.exports = { app }
