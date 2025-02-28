import getMovieCard from '../components/movieCard.js';
import getMovieDetailsCard from '../components/movieDetailsCard.js';
import oData from '../data/data.js';
import { fetchMovieDetails, fetchSearchResults } from './api.js';
import { addFavoriteListeners, setupSearch } from './eventHandlers.js';
import { getFavoriteMovies } from './localStorage.js';

export async function updateStartPageCards() {
    const containerRef = document.querySelector(`#cardContainer`);
    containerRef.innerHTML = ``;
    const topMovies = oData.topMovieList;
    for(let movie of topMovies) {
        containerRef.appendChild(await getMovieCard(movie));
    }
}

export async function updateFavoritePageCards() {
    const containerRef = document.querySelector(`#cardContainer`);
    containerRef.innerHTML = ``;
    const favoriteMovies = await getFavoriteMovies();
    for(let movie of favoriteMovies) {
        containerRef.appendChild(await getMovieCard(movie));
    }
    addFavoriteListeners();
}

export async function setupActiveMoviePage() {
    const params = new URLSearchParams(window.location.search);
    const imdbid = params.get('imdbid');
    const activeMovie = await fetchMovieDetails(imdbid);
    const sectionRef = document.querySelector(`#movieInformation`);
    sectionRef.appendChild(getMovieDetailsCard(activeMovie));   
}

export async function setupSearchResultsPage() {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');
    const searchResults = await fetchSearchResults(searchTerm);
    console.log(searchResults);
    await setupSearchResults(searchResults);
    

}

async function setupSearchResults(searchResults) {
    const containerRef = document.querySelector(`#cardContainer`);
    containerRef.innerHTML = ``;
    for(let movie of searchResults) {
        containerRef.appendChild(await getMovieCard(movie));
    }
}