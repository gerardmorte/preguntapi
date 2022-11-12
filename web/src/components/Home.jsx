import { useState, useEffect, useCallback } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Link from '@/components/Link'

import { getAllCategories, getCategory, LEVEL } from '../services/quizzes'

export default function Home () {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('html')
  const [limit, setLimit] = useState(10)
  const [level, setLevel] = useState(LEVEL.RANDOM)
  const [totalLevelQuestions, setTotalLevelQuestions] = useState(0)
  const [randomQuiz, setRandomQuiz] = useState(true)
  const [totalQuizzes, setTotalQuizzes] = useState(0)

  const quizURL = `/startQuiz?category=${category}&level=${level}&limit=${limit}`

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data.categories)
        setTotalQuizzes(data.totalQuestions)
      })
      .catch((err) => console.log(err.message))
  }, [])

  useEffect(() => {
    getCategory({ category, level })
      .then((data) => {
        setTotalLevelQuestions(data.length)
        if (level !== LEVEL.RANDOM && data.length < 10) {
          setLimit(data.length)
        }
      })
  }, [category, level])

  const handleLevel = (e) => {
    setLevel(e.target.value)
    setRandomQuiz(e.target.value === LEVEL.RANDOM)
  }

  const handleSelectCategory = (e) => {
    const categorySelected = e.target.getAttribute('data-category')
    setCategory(categorySelected)
    setLevel(LEVEL.RANDOM)
    setLimit(10)
  }

  /**
   * Returns an array with the range of options 10 - 20 in multiples of 5 or if totalLevelQuestions is within this range.
   */
  const getOptionsCount = useCallback(() => {
    const limit = randomQuiz || totalLevelQuestions >= 20 ? 20 : totalLevelQuestions
    const options = Array.from({ length: (limit - 6) / 5 }, (_, i) => (i + 2) * 5)
    options.push(limit)

    return options
  }, [randomQuiz, totalLevelQuestions])

  return (
    <div className='hero min-h-[calc(100vh-121px)] container mx-auto justify-start mt-2'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='w-3/6'>
          <Player
            src='https://assets7.lottiefiles.com/packages/lf20_ayopewsc.json'
            className='player w-full'
            loop
            autoplay
          />
        </div>

        <div className='w-11/12 sm:w-3/6'>
          <div className='flex flex-col'>
            <h1 className='text-4xl sm:text-5xl font-bold'>
              ¡Preguntas de programación!
            </h1>
            <p className='py-6'>
              Integra nuestra API en tus proyectos o pon a prueba tus conocimientos.
              <br />
              Dispones de un total de <b>{totalQuizzes}</b> preguntas y <b>{categories.length}</b> lenguajes de programación.
            </p>
            <div className='flex flex-row gap-4 mb-3 flex-wrap'>
              <ul className='flex flex-row gap-2 mb-3 flex-wrap'>
                {categories.map((c) => (
                  <li key={c.name}>
                    <button
                      data-category={c.name}
                      className={`btn bg-sky-900 gap-2 border-none btn-category ${category === c.name ? 'bg-sky-600' : ''}`}
                      onClick={handleSelectCategory}
                    >
                      {c.name.toUpperCase()} ({c.count_questions})
                      <div className='badge bg-white text-black hidden'>+99</div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className='flex flex-row gap-4 flex-wrap'>
                <div className='flex gap-2 mb-3 flex-wrap'>
                  <div className='btn no-animation bg-white border-2 border-sky-900 gap-2 cursor-default text-black hover:bg-transparent'>
                    <p>Dificultad:</p>
                    <select
                      className='bg-gray-200 p-1 px-2 rounded'
                      onChange={handleLevel}
                      value={level}
                    >
                      <option value={LEVEL.RANDOM}>ALEATORIO</option>
                      <option value={LEVEL.EASY}>FÁCIL</option>
                      <option value={LEVEL.NORMAL}>NORMAL</option>
                      <option value={LEVEL.HARD}>DIFÍCIL</option>
                    </select>
                  </div>
                  <div className='btn no-animation bg-white border-2 border-sky-900 gap-2 cursor-default text-black hover:bg-transparent'>
                    <p>Cantidad de preguntas:</p>
                    <select
                      className='bg-gray-200 p-1 px-2 rounded'
                      onChange={(e) => { setLimit(e.target.value) }}
                    >
                      {getOptionsCount().map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Link to={quizURL} className='btn btn-lg bg-green-600 border-none'>
                  ¡Iniciar Quiz!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
