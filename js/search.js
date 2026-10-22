import "./theme.js";
import { searchMovies } from "./api.js";
import { createCard } from "./card.js";

const input = document.getElementById("search-input");
const results = document.getElementById("results");

if (input) input.addEventListener("input", _.debounce(async (e) => {
    results.innerHTML = "";
    if (e.target.value.length >= 3) {
        const res = await searchMovies(e.target.value, 1);
        if (res.ok) res.movies.forEach(m => results.appendChild(createCard(m)));
    }
}, 500));