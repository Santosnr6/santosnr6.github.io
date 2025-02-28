import { isFavorite } from "../modules/localStorage.js";

export default async function getMovieCard(movie) {
    const movieCard = document.createElement(`div`);
    movieCard.classList.add(`movie-card`);
    movieCard.innerHTML = `
        <article class="movies__card" data-id="${movie.imdbID}">
            <img
                src="${await checkImageExists(movie) ? movie.Poster : `./icons/missing-poster.svg`}"
                alt="${movie.Title} poster"
                class="movies__card-poster"
            /><i
                data-id="${movie.imdbID}"
                data-favorite="${isFavorite(movie.imdbID)}"
                class="${isFavorite(movie.imdbID) ? 'fa-solid' : 'fa-regular'} fa-star movies__favorite-star"
            ></i>
            <a href="/movie.html?imdbid=${movie.imdbID}">
                <h3 class="movies__card-title">
                    ${movie.Title}
                </h3>
            </a>
        </article>
    `;
    return movieCard;
}

async function checkImageExists(movie) {
    try {
        const response = await fetch(movie.Poster, { method: "HEAD" });
        if(!response.ok) {
            throw new Error('Image does not exist on ' + movie.Title);
        }
        return response.ok;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}