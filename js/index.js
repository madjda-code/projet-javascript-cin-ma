import "./theme.js";
import { TOP_TITLES, TREND_KEYWORDS, TREND_YEAR } from "./config.js";
import { getMovieByTitle, searchMovies } from "./api.js";
import { createCard, addSummary } from "./card.js";

async function loadMovies() {
    const topDiv = document.getElementById("top");
    for (const title of TOP_TITLES) {
        const res = await getMovieByTitle(title, TREND_YEAR);
        if (res.ok) {
            const card = createCard(res.movie);
            addSummary(card, res.movie.Plot);
            topDiv.appendChild(card);
        }
    }
    const moviesDiv = document.getElementById("movies");
    const resTrends = await searchMovies(TREND_KEYWORDS[0], 1, TREND_YEAR);
    if (resTrends.ok) resTrends.movies.forEach(m => moviesDiv.appendChild(createCard(m)));
}
loadMovies();