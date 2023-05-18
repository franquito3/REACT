import { fetchSpecies } from '../adapters/services/api';

export function getSpeciesList() {
  return fetchSpecies()
    .then(response => response.data)
    .catch(error => {
      throw new Error('Failed to fetch species list');
    });
}
