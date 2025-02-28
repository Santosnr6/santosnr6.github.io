import { renderTrailers } from "./modules/caroussel.js";
import oData from "./data/data.js";
import { fetchTopMovies } from "./modules/api.js";
import { updateStartPageCards, updateFavoritePageCards, setupActiveMoviePage, setupSearchResultsPage } from "./modules/gui.js";
import { shuffleArray } from "./utils/utils.js";
import { addFavoriteListeners, setupSearch } from "./modules/eventHandlers.js";

window.addEventListener('load', async () => {
    console.log('loaded');
    
    if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
        console.log('index.html');
        await fetchMovies();
        updateStartPageCards();
        addFavoriteListeners('.movies__favorite-star');
        setupSearch();
    } else if(window.location.pathname === '/favorites.html') {
        console.log('favorites.html');
        updateFavoritePageCards();
        addFavoriteListeners('.movies__favorite-star');
    } else if(window.location.pathname === '/movie.html') {
        console.log('movie.html');
        await setupActiveMoviePage();
        addFavoriteListeners('.movie-information__favorite-star');
    } else if(window.location.pathname === '/search.html') {
        console.log('search.html');
        await setupSearchResultsPage();
        addFavoriteListeners('.movies__favorite-star');
    }
});
    
async function fetchMovies() {
    await fetchTopMovies();
    console.log(oData.topMovieList);
    oData.topMovieList = shuffleArray(oData.topMovieList);
    
    for(let i = 0; i < 5; i++) {
        renderTrailers(oData.topMovieList[i], i);
    }
}