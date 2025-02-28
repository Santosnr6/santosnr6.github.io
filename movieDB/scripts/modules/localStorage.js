import { fetchMovieDetails } from "./api.js";

export function setCurrentMovie(imdbid) {
    localStorage.setItem('currentMovie', imdbid);
}

export function getCurrentMovie() {
    return localStorage.getItem('currentMovie') || '';
}

export async function addFavoriteMovie(imdbid) {
    const favoriteMovies = getFavoriteMovies();
    const movie = await fetchMovieDetails(imdbid);
    console.log(movie);
    favoriteMovies.push(movie);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
}

export function removeFavoriteMovie(imdbid) {
    const favoriteMovies = getFavoriteMovies();
    const updatedFavorites = favoriteMovies.filter(movie => movie.imdbID !== imdbid);
    console.log(updatedFavorites);
    
    localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
}

export function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem('favoriteMovies')) || [];
}

export function isFavorite(imdbid) {
    console.log(imdbid);
    const favoriteMovies = getFavoriteMovies();
    return favoriteMovies.some(movie => movie.imdbID === imdbid);
}