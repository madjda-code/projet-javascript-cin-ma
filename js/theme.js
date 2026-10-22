const btn = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-theme");
if (btn) btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});