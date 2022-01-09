import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '973f836f86ee5af25313d0a8c5bc0a33',
  language: 'en',
  region: 'US'
}

export const queryRequest = (query) => {
  return axios.get(`/search/movie?query=${query}&page=1`);
};

export const popularRequest = () => {
  return axios.get(`/movie/top_rated`);
};

export const pageRequest = (id) => {
  return axios.get(`/movie/${id}`);
}
export const reviewsRequest = (id) => {
  return axios.get(`/movie/${id}/reviews`);

};
export const castRequest = (id) => {
  return axios.get(`/movie/${id}/credits`);

};