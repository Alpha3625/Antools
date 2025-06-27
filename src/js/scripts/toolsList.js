import createCard from "./card";
import { mostPopularTools, newcomerTools } from "./toolsData";

const carouselTools_1 = document.getElementById('carousel-tools-1')?.querySelector('.splide__list');
const carouselTools_2 = document.getElementById('carousel-tools-2')?.querySelector('.splide__list');

if (carouselTools_1) {
    mostPopularTools.forEach(tool => {
        carouselTools_1.insertAdjacentHTML('beforeend', createCard(tool));
    });
}

if (carouselTools_2) {
    newcomerTools.forEach(tool => {
        carouselTools_2.insertAdjacentHTML('beforeend', createCard(tool));
    });
}