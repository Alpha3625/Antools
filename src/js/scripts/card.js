import sprite from "../../assets/sprite.svg";

export default function createCard(tool) {
    const card = `
        <li class="splide__slide">
            <div class="card">
                <div class="card__wrapper">
                    <div class="card__header">
                        <h3>
                            <img class="card__logo" src="${tool.logo}" width="60" height="60" alt="${tool.title}">
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
        </li>
    `;

    return card;
}