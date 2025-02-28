import { isFavorite } from "../modules/localStorage.js";

export default function getMovieDetailsCard(movie) {
    const movieCard = document.createElement(`article`);
    movieCard.classList.add(`movie-information__card`);
    movieCard.innerHTML = `
        <section class="movie-information__title-container">
            <h2 class="movie-information__movie-title">${movie.Title}</h2>
            <i
            class="${isFavorite(movie.imdbID) ? 'fa-solid' : 'fa-regular'} fa-star movie-information__favorite-star"
            data-favorit="${isFavorite(movie.imdbID)}"
            data-id="${movie.imdbID}"
            ></i>
        </section>
        <section class="movie-information__information-container">
            <figure class="movie-information__image-container">
            <img
                src="${movie.Poster}"
                alt="${movie.Title} poster"
            />
            </figure>
            <section class="movie-information__text-container">
            <div class="movie-information__top-section">
                <p class="movie-information__movie-tags">Rated: ${movie.Rated}</p>
                <p class="movie-information__movie-tags">Genre: ${movie.Genre}</p>
                <p class="movie-information__movie-tags">Runtime: ${movie.Runtime}</p>
                <p class="movie-information__movie-tags">Released: ${movie.Released}</p>
                <p class="movie-information__movie-tags">Ratings: ${movie.imdbRating}/10</p>
            </div>
            <div class="movie-information__middle-section">
                <h3 class="movie-informtain__sub-title">Plot</h3>
                <p class="movie-informtain__description">${movie.Plot}</p>
            </div>
            <div class="movie-informtain__bottom-section">
                <div>
                <h3 class="movie-informtain__sub-title">Director:</h3>
                <p class="movie-informtain__description">${movie.Director}</p>
                </div>
                <div>
                <h3 class="movie-informtain__sub-title">Writer:</h3>
                <p class="movie-informtain__description">${movie.Writer}</p>
                </div>
                <div>
                <h3 class="movie-informtain__sub-title">Actors:</h3>
                <p class="movie-informtain__description">${movie.Actors}</p>
                </div>
            </div>
            </section>
        </section>
    `;
    return movieCard;
}

