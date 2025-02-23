import "../../index.html";
import  "../css/styles.css";
import initAnimation from "./scripts/animation.js";
import { initBurgerMenu } from "./scripts/burgerMenu.js";
import { initDropList } from "./scripts/dropList.js";
import { initSplide } from "./scripts/splide.js";

document.addEventListener('DOMContentLoaded', function() {
  initAnimation();
  initBurgerMenu();
  initDropList();
  initSplide;
});
