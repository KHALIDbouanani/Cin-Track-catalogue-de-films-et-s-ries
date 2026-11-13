import { openModal } from './modal.js';

export function getFavorites() {
    const favs = localStorage.getItem('cinetrack_favorites');
    return favs ? JSON.parse(favs) : [];
}

export function isFavorite(id) {
    const favs = getFavorites();
    return favs.some(fav => fav.id === id);
}

export function toggleFavorite(movie) {
    let favs = getFavorites();
    const index = favs.findIndex(fav => fav.id === movie.id);

    if (index !== -1) {
        favs.splice(index, 1);
    } else {
        favs.push(movie);
    }
    
    localStorage.setItem('cinetrack_favorites', JSON.stringify(favs));
    
    updateAllCardHearts();
    renderSidebarFavorites();
    
    return index === -1;
}

export function getHeartSVG(isFilled) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${isFilled ? '#ef4444' : 'none'}" stroke="${isFilled ? '#ef4444' : 'white'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
}

export function renderSidebarFavorites() {
    const container = document.getElementById('favorites-list');
    const compteur = document.getElementById("compteur");

    const affichage_Favoris = compteur.querySelector(".all");
    affichage_Favoris.textContent = '0'
    const affichage_Films = compteur.querySelector(".films");
    affichage_Films.textContent = '0'
    const affichage_Series = compteur.querySelector(".series");
    affichage_Series.textContent = `0`;
    let favorites_num = 0 
    let f_compteur = 0;
    let s_compteur = 0;

    const favs = getFavorites();
    container.innerHTML = '';

    if (favs.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-sm text-center py-4">No favorites yet.</p>';
        return;
    }
    
    
    favs.forEach(fav => {
        favorites_num++

        if(fav.type === "movie"){
            f_compteur++
        }
        if(fav.type === "series"){
            s_compteur++
        }

        affichage_Films.textContent = `${f_compteur}`;
        affichage_Series.textContent = `${s_compteur}`;
        affichage_Favoris.textContent = `${favorites_num}`

        const article = document.createElement('article');
        article.className = 'flex justify-between items-center my-2 border border-gray-600 rounded-sm overflow-hidden bg-gray-900 cursor-pointer hover:bg-gray-700 transition-colors';

        const img = document.createElement('img');
        img.src = fav.image;
        img.alt = fav.title;
        img.className = 'w-12 h-12 object-cover';

        const divInfo = document.createElement('div');
        divInfo.className = 'flex justify-between items-center w-full px-2';
        
        const title = document.createElement('h1');
        title.className = 'font-semibold text-sm truncate max-w-[120px]';
        title.textContent = fav.title;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'text-gray-400 hover:text-red-500 font-bold cursor-pointer text-xl';
        removeBtn.innerHTML = '&times;';
        
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(fav);
        });

        divInfo.append(title, removeBtn);
        article.append(img, divInfo);

        article.addEventListener('click', () => {
            openModal(fav.id, favs);
        });

        container.appendChild(article);
    });
}

function updateAllCardHearts() {
    const heartButtons = document.querySelectorAll('.heart-btn');
    heartButtons.forEach(btn => {
        const movieId = btn.dataset.id;
        btn.innerHTML = getHeartSVG(isFavorite(movieId));
    });
}