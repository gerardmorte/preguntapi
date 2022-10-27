// @ts-check
import { test, expect } from '@playwright/test'
import { categories } from './utils/constans.js'

test.describe('Quiz flow', async () => {
  test('displayed categories should be the same as those obtained from the API', async ({ page }) => {
    // Goes to the home page and waits for the item that takes the longest to load
    await page.goto('/')
    await page.waitForSelector('.lf-player-container svg')

    // Gets the list of categories and checks that it exists
    const categoryUl = page.locator('ul').nth(2)
    expect(categoryUl).toHaveCount(1)

    // Compare the list of categories has the same amount as the one obtained from the API.
    const categoriesLi = categoryUl.locator('li')
    expect(await categoriesLi.count()).toEqual(categories.length)

    // Compare the list of categories displayed with those obtained from the API.
    const categoriesButtons = categoriesLi.locator('button')
    const categoriesList = await categoriesButtons.allTextContents()
    categories.forEach((category, index) => {
      expect(categoriesList[index]).toContain(category.toUpperCase())
    })
  })

  test('should generate the correct link to quiz', async ({ page }) => {
    const category = 'javascript'
    const level = 'normal'
    const limit = 10

    // Goes to the home page and waits for the item that takes the longest to load
    await page.goto('/')
    await page.waitForSelector('.lf-player-container svg')

    // Click on the selected category button
    const categoryBtn = page.locator(`[data-category=${category}]`)
    await categoryBtn.click()

    // Select the level and number of questions configured
    await page.locator('select').first().selectOption({ label: level.toUpperCase() })
    await page.locator('select').nth(1).selectOption({ label: limit.toString() })

    // Check that the link generated to start the quiz is correct
    const startQuizBtn = page.getByRole('link', { name: '¡Iniciar Quiz!' }).first()
    expect(startQuizBtn).toHaveCount(1)
    const startQuizPath = await startQuizBtn.getAttribute('href')
    expect(startQuizPath).toEqual(`/startQuiz?category=${category}&level=${level}&limit=${limit}`)
  })

  categories.forEach(async (category) => {
    test(`should redirect to the correct quiz for ${category} category`, async ({ page }) => {
      // Goes to the home page and waits for the item that takes the longest to load
      await page.goto('/')
      await page.waitForSelector('.lf-player-container svg')

      // Click on the selected category button
      const categoryBtn = page.locator(`[data-category=${category}]`)
      await categoryBtn.click()

      // Select the random level
      await page.locator('select').first().selectOption({ label: 'ALEATORIO' })

      // Click and wait for redirection
      const startQuizBtn = page.getByRole('link', { name: '¡Iniciar Quiz!' })
      await startQuizBtn.click()

      // Check that it has been redirected to the correct path
      const { pathname, search } = new globalThis.URL(page.url())
      expect(pathname + search).toEqual(`/startQuiz?category=${category}&level=aleatorio&limit=10`)

      // Check that the title is correct
      const titleElement = page.getByText(category.toUpperCase()).first()
      const titleText = await titleElement.textContent()
      expect(titleText).toEqual(category.toUpperCase())
    })
  })

  test('should complete the quiz', async ({ page }) => {
    const category = 'javascript'
    const limit = 10
    let score = 0

    // Goes to the quiz page
    await page.goto(`/startQuiz?category=${category}&level=aleatorio&limit=10`)

    // TODO: investigate if there is a better way to do it
    score = await testOneQuestion(page, { quizNum: 1, score, limit })
    score = await testOneQuestion(page, { quizNum: 2, score, limit })
    score = await testOneQuestion(page, { quizNum: 3, score, limit })
    score = await testOneQuestion(page, { quizNum: 4, score, limit })
    score = await testOneQuestion(page, { quizNum: 5, score, limit })
    score = await testOneQuestion(page, { quizNum: 6, score, limit })
    score = await testOneQuestion(page, { quizNum: 7, score, limit })
    score = await testOneQuestion(page, { quizNum: 8, score, limit })
    score = await testOneQuestion(page, { quizNum: 9, score, limit })
    score = await testOneQuestion(page, { quizNum: 10, score, limit })

    // Wait for the quiz to finish
    await page.waitForTimeout(5500)

    // Compares the obtained score with the calculated score
    const finalScore = await page.getByText(`Puntuación: ${score} de ${limit}`).textContent()
    expect(finalScore?.trim()).toEqual(`Puntuación: ${score} de ${limit}`)

    // Check that the buttons to repeat the quiz and to return to home page are present
    const quizAgainBtn = page.getByRole('button', { name: 'REPETIR QUIZ' })
    expect(quizAgainBtn).toHaveCount(1)
    const goToHomeBtn = page.getByRole('link', { name: 'SALIR' })
    expect(goToHomeBtn).toHaveCount(1)

    // Back to home page
    await goToHomeBtn.click()

    // Check that you are on the home page
    const { pathname } = new globalThis.URL(page.url())
    expect(pathname).toEqual('/')
  })
})

/**
 * @param {import('@playwright/test').Page} page
 * @param {object} opts
 * @param {number} opts.quizNum
 * @param {number} opts.score
 * @param {number} opts.limit
 * @returns {Promise<number>}
*/
async function testOneQuestion (page, { quizNum, score, limit }) {
  // Waits for the item that takes the longest to load
  await page.waitForSelector('button')

  // Check that the question number is correct
  const questionCountText = await page.getByText(`Pregunta ${quizNum} de ${limit}`).textContent()
  expect(questionCountText?.trim()).toEqual(`Pregunta ${quizNum} de ${limit}`)

  // Check that the score is correct
  const scoreCountText = await page.getByText(`Puntuación: ${score} de ${limit}`).textContent()
  expect(scoreCountText?.trim()).toEqual(`Puntuación: ${score} de ${limit}`)

  // Check that the question is present on the page
  const questionLocator = page.locator('p').nth(2)
  expect(questionLocator).toHaveCount(1)

  // Check that there are at least 2 options to choose from
  const questionsBtn = page.locator('button:not(:disabled)')
  const questionsBtnCount = await questionsBtn.count()
  const thereAreOptions = (questionsBtnCount >= 2) && (questionsBtnCount <= 6)
  expect(thereAreOptions).toBe(true)

  // Check that the button is disabled at startup
  const nextBtn = page.locator('button').last()
  const isDisabled = await nextBtn.isDisabled()
  expect(isDisabled).toBe(true)

  // Choose the first option and wait a moment
  await questionsBtn.first().click()
  await page.waitForTimeout(250)

  // Gets the background color of the selected option
  const selectedButtonBackground = await page.locator('button:disabled').first().evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue('background-color')
  })

  if (quizNum < limit) {
    // Check that the button is enabled
    const isEnabled = await nextBtn.isEnabled()
    expect(isEnabled).toBe(true)
    await nextBtn.click()
  }

  // Returns the corresponding score
  if (selectedButtonBackground === 'rgb(248, 114, 114)') return score
  return score + 1
}
