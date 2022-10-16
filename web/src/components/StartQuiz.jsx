import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function StartQuiz() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const level = searchParams.get('level')
  const limit = searchParams.get('limit')

  const [quizzes, setQuizzes] = useState([])
  const [actualQuizIndex, setActualQuestionIndex] = useState(0)
  const [actualQuestion, setActualQuestion] = useState(null)
  const [quizScore, setQuizScore] = useState(0)
  const [quizEnd, setQuizEnd] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState()
  const [btnNextDisabled, setBtnNextDisabled] = useState(true)

  useEffect(() => {
    fetch(`/api/v1/quizzes?category=${category}&level=${level}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data)
        setActualQuestion(data[0])
      })
      .catch((err) => console.log(err.message))
  }, [])

  const clearState = () => {
    setActualQuestionIndex(0)
    setActualQuestion(quizzes[0])
    setQuizEnd(false)
    setQuizScore(0)
    setBtnDisabled(false)
  }

  const handlerSelectQuestion = (e) => {
    let classBtn = 'btn-error'

    if (e.target.id === actualQuestion.correct_answer) {
      classBtn = 'btn-success'
      setQuizScore(quizScore + 1)
    } else {
      document
        .getElementById(actualQuestion.correct_answer)
        .classList.replace(
          'btn-warning',
          'btn-success'
        )
    }

    e.target.classList.replace('btn-warning', classBtn)
    setBtnDisabled(true)
    setBtnNextDisabled(false)

    if (actualQuizIndex === quizzes.length - 1) {
      setBtnNextDisabled(true)

      const idTimeout = setTimeout(() => {
        setQuizEnd(true)
        clearTimeout(idTimeout)
      }, 2000)
    }
  }

  return (
    <div className='container m-auto text-center w-8/12'>
      <div>
        <h2 className='mt-4 mb-4 text-3xl'>{category.toUpperCase()}</h2>
        <p className='mb-4 text-2xl'>Puntuación: {quizScore} de {quizzes.length}</p>

        {!quizEnd && (
          <>
            <p className='text-2xl'>Pregunta {actualQuizIndex + 1} de {quizzes.length}</p>

            {actualQuestion &&
              <div>
                <p className='mb-4 text-2xl'>{actualQuestion.question}</p>
                <div className='d-grid mb-2'>
                  {Object.keys(actualQuestion.answers).map((key) => (
                    <button
                      key={key + actualQuizIndex}
                      id={key}
                      className='mt-2 btn btn-block btn-warning normal-case !text-black text-xl border-0 h-max disabled:btn-active'
                      disabled={btnDisabled}
                      onClick={handlerSelectQuestion}
                    >
                      {actualQuestion.answers[key]}
                    </button>
                  ))}
                </div>
              </div>}
          </>
        )}
      </div>

      <div className='d-grid'>
        {quizEnd
          ? (
            <>
              <button
                className='mt-2 btn btn-block btn-primary text-xl text-white'
                onClick={clearState}
              >
                REPETIR QUIZ
              </button>
              <Link to='/quiz' className='mt-2 btn btn-block btn-primary text-xl text-white'>
                SALIR
              </Link>
            </>
          )
          : (
            <button
              className='btn btn-block btn-primary text-xl text-white disabled:btn-active disabled:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={btnNextDisabled}
              onClick={() => {
                setActualQuestion(quizzes[actualQuizIndex + 1])
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
