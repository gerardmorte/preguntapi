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

/** Api version 2 */
test('Return an JSON with key categories (api v2)', async () => {
  await api
    .get('/api/v2/categories')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect((res) => {
      expect(res.body).toHaveProperty('categories')
    })
})

test('Return an array and the first element should have an id (api v2)', async () => {
  await api
    .get('/api/v2/categories/javascript?limit=5')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect((res) => {
      expect(res.body[0]).toHaveProperty('id')
    })
})

test('Return a error message if category not exists (api v2)', async () => {
  const categoryNotFound = 'test-category'
  await api
    .get(`/api/v2/categories/${categoryNotFound}`)
    .expect(404)
    .expect('Content-Type', /application\/json/)
    .expect((res) => {
      expect(res.body).toEqual({ message: `Category {${categoryNotFound}} not found` })
    })
})

test('Return a error message if level (query-string) not match (api v2)', async () => {
  const levelNotFound = 'notlevel'
  await api
    .get(`/api/v2/categories/javascript?level=${levelNotFound}`)
    .expect(401)
    .expect('Content-Type', /application\/json/)
    .expect((res) => {
      expect(res.body).toHaveProperty('message', expect.stringMatching(`Query level {${levelNotFound}} is incorrect, fields permitted:`))
    })
})
