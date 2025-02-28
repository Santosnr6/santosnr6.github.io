import { addFavoriteMovie, removeFavoriteMovie } from "./localStorage.js";
import { updateFavoritePageCards } from "./gui.js";

export function addFavoriteListeners(selector) {
    const favBtnRefs = document.querySelectorAll(selector);
    for(let btn of favBtnRefs) {
        console.log('knapp');
        
        btn.removeEventListener(`click`, () => {});
        btn.addEventListener(`click`, (event) => {            
            if(event.target.dataset.favorite === 'true') {
                console.log('removing favorite');
                removeFavoriteMovie(event.target.dataset.id);
                event.target.dataset.favorite = false;
            } else {
                console.log('adding favorite');
                addFavoriteMovie(event.target.dataset.id);
                event.target.dataset.favorite = true;
            }
            event.target.classList.toggle('fa-solid');
            event.target.classList.toggle('fa-regular');
            if(window.location.pathname === '/favorites.html') {
                updateFavoritePageCards();
            }
        });
    }
}

export function setupSearch() {
    const searchForm = document.querySelector(`#searchForm`);
    searchForm.addEventListener(`submit`, (event) => {
        event.preventDefault();
        const searchInput = document.querySelector(`#searchInput`).value;
        window.location.href = `/search.html?search=${searchInput}`;
    });
}