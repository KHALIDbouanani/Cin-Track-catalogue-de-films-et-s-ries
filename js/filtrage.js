import { afficher_Cardes } from './cardes.js';

let allMovies = [];
let currentFilteredMovies = [];
let currentPage = 1;
const itemsPerPage = 6;

export function initRendering(movies) {
    allMovies = movies;
    currentFilteredMovies = movies;
    renderShow(currentFilteredMovies, 1, itemsPerPage);
}

export function renderShow(moviesToRender, page, size) {
    const affichage = document.getElementById("affichage");
    affichage.innerHTML = ""; 
    currentPage = page;

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    const selectedMovies = moviesToRender.slice(startIndex, endIndex);

    if (selectedMovies.length === 0) {
        affichage.innerHTML = "<p class='col-span-full text-center text-lg border border-red-600 bg-red-200 font-semibold text-red-600 rounded p-4'>Aucun film ou série trouvé</p>";
        renderPagination(0, page, size);
        return;
    }

    selectedMovies.forEach((movie) => {
        afficher_Cardes(movie, allMovies);
    });

    renderPagination(moviesToRender.length, page, size);
}

export function handleFilter() {
    const searchInput = document.getElementById("search").value.toLowerCase().trim();
    const activeFilter = document.querySelector('.active-filter').dataset.type;

    currentFilteredMovies = allMovies.filter((movie) => {
        const matchSearch = movie.title.toLowerCase().includes(searchInput);

        let matchCategory = false;
        if (activeFilter === "all") {
            matchCategory = true;
        } else if (activeFilter === "movie") {
            matchCategory = movie.type === "movie";
        } else if (activeFilter === "series") {
            matchCategory = movie.type === "series";
        }

        return matchSearch && matchCategory;
    });

    renderShow(currentFilteredMovies, 1, itemsPerPage);
}

function renderPagination(totalElements, currentPage, pageSize) {
    const paginationHTML = document.getElementById("pagination");
    paginationHTML.innerHTML = "";

    let totalPages = Math.ceil(totalElements / pageSize);

    if (totalPages <= 1) return;

    const btnClass = "px-4 py-2 rounded-lg font-bold transition-colors cursor-pointer";

    if (currentPage > 1) {
        const prevBtn = document.createElement("button");
        prevBtn.innerHTML = "Previous";
        prevBtn.className = `${btnClass} bg-gray-800 text-white hover:bg-gray-700 border border-gray-600`;
        prevBtn.addEventListener("click", () => {
            renderShow(currentFilteredMovies, currentPage - 1, pageSize);
        });
        paginationHTML.appendChild(prevBtn);
    }

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;

        if (i === currentPage) {
            btn.className = `${btnClass} bg-red-600 text-white`;
        } else {
            btn.className = `${btnClass} bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600`;
        }

        btn.addEventListener("click", () => {
            renderShow(currentFilteredMovies, i, pageSize);
        });
        paginationHTML.appendChild(btn);
    }

    if (currentPage < totalPages) {
        const nextBtn = document.createElement("button");
        nextBtn.innerHTML = "Next";
        nextBtn.className = `${btnClass} bg-gray-800 text-white hover:bg-gray-700 border border-gray-600`;
        nextBtn.addEventListener("click", () => {
            renderShow(currentFilteredMovies, currentPage + 1, pageSize);
        });
        paginationHTML.appendChild(nextBtn);
    }
}