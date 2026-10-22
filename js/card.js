export function createCard(movie) {
    const article = document.createElement("article");
    article.className = "card";

    const img = document.createElement("img");
    if (movie.Poster !== "N/A") {
        img.src = movie.Poster;
        img.alt = `Affiche de ${movie.Title}`;
    } else {
        img.className = "no-poster";
        img.alt = "Aucune affiche disponible";
    }
    article.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = movie.Title;
    article.appendChild(h3);

    const pYear = document.createElement("p");
    pYear.className = "year";
    pYear.textContent = movie.Year;
    article.appendChild(pYear);

    const btn = document.createElement("a");
    btn.className = "button";
    btn.href = "movie.html";
    btn.textContent = "En savoir plus";
    btn.addEventListener("click", () => {
        localStorage.setItem("movieId", movie.imdbID);
    });
    article.appendChild(btn);

    return article;
}

export function addSummary(card, plot) {
    if (plot && plot !== "N/A") {
        const p = document.createElement("p");
        p.className = "summary";
        p.textContent = plot;
        card.insertBefore(p, card.lastElementChild);
    }
}