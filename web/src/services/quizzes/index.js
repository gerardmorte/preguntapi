export const LEVEL = {
  RANDOM: 'aleatorio',
  EASY: 'facil',
  NORMAL: 'normal',
  HARD: 'dificil'
}

export const API_VERSION = 2
export const BASE_URL_API = `/api/v${API_VERSION}`

export function getAllCategories () {
  return fetch(`${BASE_URL_API}/categories`)
    .then((res) => res.json())
}

export function getCategory ({ category, level = LEVEL.RANDOM }) {
  if (!category) {
    throw new Error('Missing category param')
  }
  return fetch(`${BASE_URL_API}/categories/${category}?level=${level}`)
    .then((res) => res.json())
}
