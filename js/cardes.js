import { openModal } from './modal.js';

export function afficher_Cardes(movie, items) {
    const affichage = document.getElementById("affichage");
    const article = document.createElement('article');
    article.className = 'flex flex-col border border-gray-600 rounded-3xl overflow-hidden hover:scale-99 bg-gray-900';
    
    const img = document.createElement('img');
    img.className = 'w-full h-96 object-cover'; 
    img.setAttribute('src', `${movie.image}`);
    img.setAttribute('alt', `${movie.title} Poster`);
    article.append(img);

    const textContainer = document.createElement('div');
    textContainer.className = 'p-4 text-center flex-grow flex flex-col justify-center';
    
    const h1 = document.createElement('h1');
    h1.className = 'text-2xl font-bold mb-1';
    h1.textContent = `${movie.title}`;
    textContainer.append(h1);
    
    const div = document.createElement('div');
    div.className = 'w-full text-gray-400';
    div.textContent = `${movie.releaseYear} · ${movie.type}`;
    textContainer.append(div);
    article.append(textContainer);
    
    const button = document.createElement('button');
    button.className = 'w-full p-3 bg-red-500 hover:bg-red-600 transition-colors font-bold cursor-pointer';
    button.textContent = `Show details`;
    button.addEventListener('click', () => {
        openModal(movie.id, items);
    });
    article.append(button);
    affichage.append(article);
};

