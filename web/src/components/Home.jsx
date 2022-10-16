import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'

export default function Home() {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('html')
  const [limit, setLimit] = useState(10)
  const [level, setLevel] = useState('aleatorio')
  const [totalLevelQuestions, setTotalLevelQuestions] = useState(0)
  const [randomQuiz, setRandomQuiz] = useState(true)
  const [flagLevelsQuiz, setFlagLevelsQuiz] = useState(false)

  const [totalCategories, setTotalCategories] = useState()
  const [totalQuizzes, setTotalQuizzes] = useState()

  const link = `/startQuiz?category=${category}&level=${level}&limit=${limit}`

  useEffect(() => {
    fetch('/api/v1/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories)
        setTotalCategories(data.categories.length)
      })
      .catch((err) => console.log(err.message))
  }, [])

  useEffect(() => {
    fetch('/api/v1/quizzes?category=all')
      .then((res) => res.json())
      .then((data) => setTotalQuizzes(Object.values(data).flat().length))
      .catch((err) => console.log(err.message))
  }, [])

  useEffect(() => {
    fetch(`/api/v1/quizzes?category=${category}&level=${level}`)
      .then((res) => res.json())
      .then((data) => {
        setFlagLevelsQuiz(data.filter((quiz) => quiz?.level).length === data.length)
        setTotalLevelQuestions(data.length)

        if (level !== 'aleatorio' && data.length < 10) {
          setLimit(data.length)
        }
      })
  }, [category, level])

  const handleLevel = (e) => {
    setLevel(e.target.value)
    setRandomQuiz(e.target.value === 'aleatorio')
  }

  const handleSelectCategory = (e) => {
    const categorySelected = e.target.getAttribute('data-category')
    setCategory(categorySelected)

    setLevel('aleatorio')
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
    <div className='hero min-h-[calc(100vh-121px)] container mx-auto justify-start'>
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
              Preguntas de programación!
            </h1>
            <p className='py-6'>
              Integra nuestra API en tus proyectos o pon a prueba tus conocimientos.
              <br />
              Actualmente <b>{totalQuizzes}</b> preguntas sobre <b>{totalCategories}</b> lenguajes de programación.
            </p>
            <div className='flex gap-2 mb-3 flex-wrap'>
              {categories.map((c) => (
                <button
                  key={c.name}
                  data-category={c.name}
                  className={`btn bg-sky-900 gap-2 border-none btn-category ${category === c.name ? 'bg-sky-600' : ''}`}
                  onClick={handleSelectCategory}
                >
                  {c.name.toUpperCase()}
                  <div className='badge bg-white text-black hidden'>+99</div>
                </button>
              ))}
            </div>
            <div className='flex gap-2 mb-3 flex-wrap'>
              {flagLevelsQuiz && (
                <div className='btn bg-white border-2 border-sky-900 gap-2 cursor-default text-black hover:bg-transparent'>
                  <p>Dificultad:</p>
                  <select
                    className='bg-gray-200 p-1 px-2 rounded'
                    onChange={handleLevel}
                    value={level}
                  >
                    <option value='aleatorio'>ALEATORIO</option>
                    <option value='facil'>FÁCIL</option>
                    <option value='normal'>NORMAL</option>
                    <option value='dificil'>DIFÍCIL</option>
                  </select>
                </div>
              )}
              <div className='btn bg-white border-2 border-sky-900 gap-2 cursor-default text-black hover:bg-transparent'>
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
            <div className='flex gap-2 mb-3'>
              <Link to={link} className='btn bg-green-600 border-none'>
                Iniciar Quiz!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
