import sprite from "../../assets/sprite.svg";
import { mostPopularTools, newcomerTools } from "./toolsData";

const carouselTools_1 = document.getElementById('slider1');
const carouselTools_1__list = carouselTools_1.querySelector('.splide__list');

mostPopularTools.forEach(tool => {
    carouselTools_1__list.insertAdjacentHTML('beforeend', `
    <li class="splide__slide">
        <div class="card">
            <div class="card__wrapper">
                <div class="card__header">
                    <h3>
                        <img class="card__logo" src="${tool.logo}" width="60px" height="60px" alt="${tool.title}">
                        ${tool.title}
                    </h3>
                    <p>${tool.price}</p>
                </div>
                <div class="card__content">
                    ${tool.description}
                </div>
                <div class="card__footer">
                    <div class="card__icons">
                        <div class="card__icon">
                            <svg width="28" height="28">
                                <use xlink:href="${sprite}#icon-heart" />
                            </svg>
                        </div>
                        <div class="card__icon">
                            <svg width="30" height="30">
                                <use xlink:href="${sprite}#icon-folder" />
                            </svg>
                        </div>
                    </div>
                    <button class="card__button button">Visit</button>
                </div>
            </div>
        </div>
    </li>`);
});

const carouselTools_2 = document.getElementById('slider2');
const carouselTools_2__list = carouselTools_2.querySelector('.splide__list');

newcomerTools.forEach(tool => {
    carouselTools_2__list.insertAdjacentHTML('beforeend', `
        <li class="splide__slide">
            <div class="newcomer-tools__card card">
                <div class="card__wrapper">
                    <div class="card__header">
                        <h3>
                            <img class="card__logo" src=${tool.logo} width="60px"
                                height="60px" alt=${tool.title}>
                            Zeplin
                        </h3>
                        <p>${tool.price}</p>
                    </div>
                    <div class="card__content">
                       ${tool.description}
                    </div>
                    <div class="card__footer">
                        <div class="card__icons">
                            <div class="card__icon">
                                <svg width="28" height="28">
                                    <use xlink:href="${sprite}#icon-heart" />
                                </svg>
                            </div>
                            <div class="card__icon">
                                <svg width="30" height="30">
                                    <use xlink:href="${sprite}#icon-folder" />
                                </svg>
                            </div>
                        </div>
                        <a class="card__button" href="#">Visit</a>
                    </div>
                </div>
            </div>
        </li>
    `);
});