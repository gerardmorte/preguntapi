// export const prerender = true;

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad = async ({ params }) => {
  try {
    const urlApi = "http://localhost:8000/api/v1";
    const data = await fetch(urlApi);
    const response = await data.json();
    return response.categories;
  } catch (err) {
    throw error(404, 'Not found');
  }
}

