import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/personas';

export function fetchSpecies() {
  return axios.get(`${API_BASE_URL}/species`);
}
