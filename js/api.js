import { API_KEY, BASE_URL } from "./config.js";

export async function getMovieByTitle(title, year = "") {
    const url = `${BASE_URL}?t=${encodeURIComponent(title)}&y=${year}&plot=short&apikey=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.Response === "True") return { ok: true, movie: data };
        return { ok: false, error: data.Error };
    } catch (err) {
        return { ok: false, error: err.message };
    }
}

export async function searchMovies(query, page = 1, year = "") {
    const url = `${BASE_URL}?s=${encodeURIComponent(query)}&y=${year}&page=${page}&apikey=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.Response === "True") return { ok: true, movies: data.Search, total: data.totalResults };
        return { ok: false, error: data.Error };
    } catch (err) {
        return { ok: false, error: err.message };
    }
}

export async function getMovie(id, plot = "full") {
    const url = `${BASE_URL}?i=${id}&plot=${plot}&apikey=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.Response === "True") return { ok: true, movie: data };
        return { ok: false, error: data.Error };
    } catch (err) {
        return { ok: false, error: err.message };
    }
}