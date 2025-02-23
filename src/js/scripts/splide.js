import "../../../node_modules/@splidejs/splide/dist/css/splide.min.css"
import Splide from "../../../node_modules/@splidejs/splide/dist/js/splide.min.js"

export const initSplide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 10000
}).mount();