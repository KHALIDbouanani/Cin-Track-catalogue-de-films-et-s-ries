import {chargeDonnees} from './api.js';
import { afficher_Cardes } from './cardes.js';

const movies = await chargeDonnees("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")
// console.log(movies);

affichage.innerHTML = "";
movies.forEach(movie => afficher_Cardes(movie, movies));