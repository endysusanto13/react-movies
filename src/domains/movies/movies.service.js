import { fetchJson } from "lib/fetch-json";
import { BASE_URL } from "const";

const movieLimit = 16

export const createComment = ({ rating, movieId, content, accessToken }) =>
  fetchJson(`${BASE_URL}/movie/comment`, {
    method: "POST",
    body: {
      rating,
      movieId,
      content
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getComments = (movieId, signal) =>
  fetchJson(`${BASE_URL}/movie/movie/${movieId}/comment`, { signal });

export const deleteComments = ({ commentId, accessToken }) =>
  fetchJson(`${BASE_URL}/movie/comment/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getMovieListings = (page, signal) =>
  fetchJson(`${BASE_URL}/movie?page=${page}&limit=${movieLimit}`, {
    signal,
  });

export const getMovieDetails = (listingId, signal) =>
  fetchJson(`${BASE_URL}/movie/movie/${listingId}`, {
    signal,
  });