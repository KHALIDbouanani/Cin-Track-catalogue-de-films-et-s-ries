export function afficher_Cardes(movie) {
    const affichage = document.getElementById("affichage")
    const article = document.createElement('article');
    article.className = 'border rounded-3xl text-center overflow-hidden';
    const img = document.createElement('img');
    img.className = 'w-full';
    img.setAttribute('src',`${movie.image}`);
    img.setAttribute('alt',`Film/Serie poster`);
    article.append(img);
    const h1 = document.createElement('h1');
    h1.className = 'text-2xl font-bold';
    h1.textContent = `${movie.title}`;
    article.append(h1);
    const span = document.createElement('span');
    span.className = 'text-gray-500';
    span.textContent = `${movie.releaseYear} · ${movie.type}`;
    article.append(span);
    affichage.append(article)
};

