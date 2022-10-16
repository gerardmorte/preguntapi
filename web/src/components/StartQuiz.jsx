import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function StartQuiz () {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const level = searchParams.get('level')
  const limit = searchParams.get('limit')

  const [quizzes, setQuizzes] = useState([])
  const [actualQuizIndex, setActualQuestionIndex] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizEnd, setQuizEnd] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState()
  const [btnNextDisabled, setBtnNextDisabled] = useState(true)

  useEffect(() => {
    fetch(`/api/v1/quizzes?category=${category}&level=${level}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div className='container m-auto text-center w-8/12'>
      <div>
        {quizEnd
          ? (
            <>
              <h1 className='mt-4 mb-4 text-3xl'>{category.toUpperCase()}</h1>
              <h1 className='mb-4 text-2xl'>
                Puntuación: {quizScore} de {quizzes.length}{' '}
              </h1>
            </>
            )
          : (
            <>
              <h1 className='mt-4 mb-4 text-3xl'>{category.toUpperCase()}</h1>
              <h2 className='text-2xl'>
                Pregunta {actualQuizIndex + 1} de {quizzes.length}{' '}
              </h2>
              <h2 className='mb-4 text-2xl'>
                {' '}
                Puntuación: {quizScore} de {quizzes.length}
              </h2>
              {
                quizzes.map((quiz, index) => {
                  if (index === actualQuizIndex) {
                    return <h2 key='index' className='mb-4 text-2xl'>{quiz.question}</h2>
                  }
                })
              }
              <div>
                {quizzes.map((quiz, index) => {
                  if (index === actualQuizIndex) {
                    return (
                      <div className='d-grid mb-2'>
                        {Object.keys(quiz.answers).map((key) => {
                          const value = quiz.answers[key]
                          return (
                            <button
                              id={key}
                              className='mt-2 btn btn-block btn-warning normal-case text-black text-xl border-0 h-max disabled:btn-active disabled:text-black'
                              disabled={btnDisabled}
                              onClick={(e) => {
                                if (key === quiz.correct_answer) {
                                  e.target.classList.replace(
                                    'btn-warning',
                                    'btn-success'
                                  )
                                  setBtnDisabled(true)
                                  setQuizScore(quizScore + 1)
                                } else {
                                  e.target.classList.replace(
                                    'btn-warning',
                                    'btn-error'
                                  )
                                  document
                                    .getElementById(quiz.correct_answer)
                                    .classList.replace(
                                      'btn-warning',
                                      'btn-success'
                                    )
                                  setBtnDisabled(true)
                                }
                                setBtnNextDisabled(false)
                                if (actualQuizIndex === quizzes.length - 1) {
                                  setBtnNextDisabled(true)
                                  setTimeout(() => {
                                    setQuizEnd(true)
                                  }, 2000)
                                }
                              }}
                            >
                              {value}
                            </button>
                          )
                        })}
                      </div>
                    )
                  }
                })}
              </div>
            </>
            )}
      </div>
      <div className='d-grid'>
        {quizEnd
          ? (
            <>
              <Link
                to={
                level
                  ? `/startQuiz?category=${category}&level=${level}`
                  : `/startQuiz?category=${category}&limit=${limit}`
              }
              >
                <button
                  className='mt-2 btn btn-block btn-primary text-xl text-white'
                  onClick={() => {
                    setActualQuestionIndex(0)
                    setQuizEnd(false)
                    setQuizScore(0)
                    setBtnDisabled(false)
                  }}
                >
                  REPETIR QUIZ
                </button>
              </Link>
              <Link to='/quiz'>
                <button className='mt-2 btn btn-block btn-primary text-xl text-white'>
                  SALIR
                </button>
              </Link>
            </>
            )
          : (
            <button
              className='btn btn-block btn-primary text-xl text-white disabled:btn-active disabled:text-white'
              disabled={btnNextDisabled}
              onClick={() => {
                setActualQuestionIndex(actualQuizIndex + 1)
                setBtnDisabled(false)
                setBtnNextDisabled(true)
              }}
            >
              SIGUIENTE
            </button>
            )}
      </div>
    </div>
  )
}
