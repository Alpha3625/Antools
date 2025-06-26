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
      // 767: { padding: '25%' },
      // 570: { padding: '21%' },
      // 500: { padding: '18%' },
      // 450: { padding: '14%' },
      // 400: { padding: '12%' },
      // 375: { padding: '0%' },
      390: { padding: '7%' },
      320: { padding: '0%' }
    }
  };

  const carouselBlogOptions = {...baseOptions};

  new Splide("#slider1", carouselToolsOptions).mount();
  new Splide("#slider2", carouselToolsOptions).mount();
  new Splide('#blog', carouselBlogOptions).mount();
}