import {chargeDonnees} from './api.js';
const movies = await chargeDonnees("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")
console.log(movies);