import "./theme.js";
import { getMovie } from "./api.js";

async function loadMovie() {
    const id = localStorage.getItem("movieId");
    if (!id) return;
    const res = await getMovie(id, "full");
    if (res.ok) {
        document.getElementById("movie").classList.remove("hidden");
        document.getElementById("title").textContent = res.movie.Title;
        document.getElementById("poster").src = res.movie.Poster;
        document.getElementById("poster").classList.remove("hidden");
        document.getElementById("plot").textContent = res.movie.Plot;
        document.getElementById("genre").textContent = res.movie.Genre;
        document.getElementById("actors").textContent = res.movie.Actors;
    }
}
loadMovie();