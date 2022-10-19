const supertest = require('supertest')
const { app } = require('../index')
const api = supertest(app)

test('return an json with key categories', async () => {
  await api
    .get('/api/v1/categories')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect((res) => {
      expect(res.body).toHaveProperty('categories')
    })
})

test('return an array and the first element should have an id', async () => {
  await api
    .get('/api/v1/quizzes?category=javascript&limit=5')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect((res) => {
      expect(res.body[0]).toHaveProperty('id')
    })
})
