export const LEVEL = {
  RANDOM: 'aleatorio',
  EASY: 'facil',
  NORMAL: 'normal',
  HARD: 'dificil'
}

export function getAllCategories () {
  return fetch('/api/categories')
    .then((res) => res.json())
}

export function getCategory ({ category, level = LEVEL.RANDOM }) {
  if (!category) {
    throw new Error('Missing category param')
  }
  return fetch(`/api/categories/${category}?level=${level}`)
    .then((res) => res.json())
}
