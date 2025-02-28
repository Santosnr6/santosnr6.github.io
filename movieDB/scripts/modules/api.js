import oData from '../data/data.js';

export async function fetchTopMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    oData.topMovieList = movies;
}

export async function fetchMovieDetails(imdbid) {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbid}&plot=full&apikey=1a195302`);
    return await response.json();
}

export function fetchSearchResults(searchTerm) {
    return fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=1a195302`)
        .then(response => response.json())
        .then(data => data.Search)
        .catch(error => console.error(error));
}