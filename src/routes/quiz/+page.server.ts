import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load:PageServerLoad = async (params) => {
  try {
    const { url } = params
    const category = url.searchParams.get('category');
    const quantity = url.searchParams.get('limit');

    const urlApi = "http://localhost:8000/api/v1";
    const response = await fetch(`${urlApi}/quizzes?category=${category}&limit=${quantity}`);
    const questions = await response.json();

    return {
      category, quantity, questions
    };
  } catch (err) {
    throw error(404, 'Not found');
  }
}
