# CinTrack — Catalogue de Films et Séries

## Description

CinTrack est une application web permettant de parcourir un catalogue de films et de séries. Le site propose une interface intuitive avec recherche, filtrage par type (films/séries), pagination, et une fonctionnalité de favoris persistants. Chaque élément dispose d'une fiche détaillée avec synopsis, réalisateurs, genres, et un lien pour visionner le contenu.

## Aperçu du projet

L'objectif de ce projet est de créer une plateforme simple et élégante pour découvrir et organiser ses films et séries préférés, avec une expérience utilisateur fluide et une mise à jour en temps réel des favoris.

## Fonctionnalités

### 1. Affichage du catalogue
- Grille responsive de cartes (films et séries)
- Image, titre, année de sortie et type pour chaque élément
- Design sombre moderne avec effets de survol

### 2. Recherche et filtrage
- Barre de recherche en temps réel par titre
- Filtres par catégorie : Tous / Films / Séries
- Pagination avec 6 éléments par page

### 3. Système de favoris
- Ajout/suppression de favoris via un bouton cœur sur chaque carte
- Sidebar dédiée affichant tous les favoris
- Compteurs automatiques : total, films et séries
- Persistance des favoris dans le localStorage

### 4. Modal de détails
- Affichage complet des informations : titre, type, année, durée/saisons
- Genres, réalisateurs, pays de production
- Description détaillée
- Lien externe pour visionner le contenu

### 5. Interface responsive
- Header fixe avec logo et recherche
- Sidebar des favoris adaptative (fixe sur desktop, coulissante sur mobile)
- Menu mobile avec animation de transition

### 6. Persistance des données
- Sauvegarde automatique des favoris dans le localStorage
- Restauration des favoris au rechargement de la page

## Technologies Utilisées

- **HTML5** — Structure sémantique du site
- **CSS3 / Tailwind CSS v4** — Mise en page, styles et responsive design
- **JavaScript (ES6 Modules)** — Logique applicative, gestion du DOM, appels API
- **localStorage** — Sauvegarde côté client des favoris
- **Fetch API** — Récupération des données depuis une API externe

## Structure du Projet
```
CinTrack/
├── index.html # Page principale
├── js/
│ ├── main.js # Point d'entrée, initialisation
│ ├── api.js # Chargement des données depuis l'API
│ ├── cardes.js # Génération des cartes de films/séries
│ ├── favorites.js # Gestion des favoris (localStorage)
│ ├── filtrage.js # Recherche, filtrage et pagination
│ └── modal.js # Modal de détails
├── src/
│ └── output.css # CSS compilé (Tailwind)
├── img/
│ ├── logo.png
│ ├── open_menu.png
│ └── arrow.png
├── package.json
├── package-lock.json
└── README.md
```
Liens

Jira : https://bouananikhalid83.atlassian.net/

Vercel : https://cintrack-red.vercel.app/
