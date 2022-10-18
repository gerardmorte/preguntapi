// @ts-check
import { test, expect } from '@playwright/test'
import { categories } from './utils/constants.js'

test.describe('Quiz flow', async () => {
  test('displayed categories should be the same as those obtained from the API', async ({ page }) => {
    // Goes to the home page and waits for the item that takes the longest to load
    await page.goto('/')
    await page.waitForSelector('.lf-player-container svg')

    // Gets the list of categories and checks that it exists
    const categoryUl = page.locator('ul').nth(2)
    expect(categoryUl).toBeTruthy()

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
    const CATEGORY = 'javascript'
    const LEVEL = 'normal'
    const LIMIT = 11

    // Goes to the home page and waits for the item that takes the longest to load
    await page.goto('/')
    await page.waitForSelector('.lf-player-container svg')

    // Click on the selected category button
    const categoryBtn = page.getByRole('button', { name: CATEGORY.toUpperCase() })
    await categoryBtn.click()

    // Select the level and number of questions configured
    await page.locator('select').first().selectOption({ label: LEVEL.toUpperCase() })
    await page.locator('select').nth(1).selectOption({ label: LIMIT.toString() })

    // Check that the link generated to start the quiz is correct
    const startQuizBtn = page.getByRole('link', { name: 'Iniciar Quiz!' })
    const startQuizPath = await startQuizBtn.getAttribute('href')
    expect(startQuizPath).toBeTruthy()
    expect(startQuizPath).toEqual(`/startQuiz?category=${CATEGORY}&level=${LEVEL}&limit=${LIMIT}`)
  })

  categories.forEach(async (category) => {
    test(`should redirect to the correct quiz for ${category} category`, async ({ page }) => {
      // Goes to the home page and waits for the item that takes the longest to load
      await page.goto('/')
      await page.waitForSelector('.lf-player-container svg')

      // Click on the selected category button
      const categoryBtn = page.getByRole('button', { name: category.toUpperCase() })
      await categoryBtn.click()

      // Select the random level
      await page.locator('select').first().selectOption({ label: 'ALEATORIO' })

      // Click and wait for redirection
      const startQuizBtn = page.getByRole('link', { name: 'Iniciar Quiz!' })
      await startQuizBtn.click()

      // Check that it has been redirected to the correct path
      const { pathname, search } = new globalThis.URL(page.url())
      expect(pathname + search).toEqual(`/startQuiz?category=${category}&level=aleatorio&limit=10`)

      // Check that the title is correct
      const titleElement = page.getByRole('heading', { name: category.toUpperCase() })
      const titleText = await titleElement.textContent()
      expect(titleElement).toBeTruthy()
      expect(titleText).toEqual(category.toUpperCase())
    })
  })

  test('should be correct the items in the quiz page', async ({ page }) => {
    const CATEGORY = 'javascript'

    // Goes to the quiz page and waits for the item that takes the longest to load
    await page.goto(`/startQuiz?category=${CATEGORY}&level=aleatorio&limit=10`)
    await page.waitForSelector('button')

    // Check that the question number is correct
    const questionCountText = await page.getByRole('heading').nth(1).textContent()
    expect(questionCountText?.trim()).toEqual('Pregunta 1 de 10')

    // Check that the score is correct
    const scoreText = await page.getByRole('heading').nth(2).textContent()
    expect(scoreText?.trim()).toEqual('Puntuación: 0 de 10')

    // Check that the question is present on the page
    const question = await page.getByRole('heading').nth(3).textContent()
    expect(question).toBeTruthy()

    // Check that there are at least 2 options to choose from
    const questionsBtn = page.locator('button:not(:disabled)')
    const thereAreOptions = await questionsBtn.count() >= 2
    expect(thereAreOptions).toBe(true)

    const nextBtn = page.locator('button').last()
    const isDisabled = await nextBtn.isDisabled()
    expect(isDisabled).toBe(true)
  })
})
