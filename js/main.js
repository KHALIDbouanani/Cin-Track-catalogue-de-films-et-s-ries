import {chargeDonnees} from './api.js';
import { initRendering, handleFilter } from './filtrage.js'; 
import { renderSidebarFavorites } from './favorites.js';

const movies = await chargeDonnees("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")
// console.log(movies);

initRendering(movies);

renderSidebarFavorites();

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", handleFilter);

const categoryButtons = document.querySelectorAll('#choix li');
categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        categoryButtons.forEach(btn => {
            btn.classList.remove('bg-red-600', 'active-filter');
            btn.classList.add('bg-gray-500');
        });

        e.target.classList.remove('bg-gray-500');
        e.target.classList.add('bg-red-600', 'active-filter');

        handleFilter();
    });
});