import "../../../node_modules/@splidejs/splide/dist/css/splide.min.css"
import Splide from "../../../node_modules/@splidejs/splide/dist/js/splide.min.js"

export default function initMobileSlider () {
  const baseOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 10000,
    drag: false,
  }

  const carouselToolsOptions = {
    ...baseOptions,
    gap: '20px',
    mediaQuery: 'min',
    breakpoints: {
      1025: { destroy: true },
    }
  };

  const carouselBlogOptions = {...baseOptions};

  new Splide("#carousel-tools-1", carouselToolsOptions).mount();
  new Splide("#carousel-tools-2", carouselToolsOptions).mount();
  new Splide('#blog', carouselBlogOptions).mount();
}