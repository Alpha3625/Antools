import "../../index.html";
import  "../css/styles.css";
import { initHeader } from "./scripts/header.js";
import { initBurgerMenu } from "./scripts/burgerMenu.js";
import { initDropList } from "./scripts/dropList.js";
import "./scripts/links.js";
import initMobileSlider from "./scripts/splide.js";
import "./scripts/toolsList.js";

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initBurgerMenu();
  initDropList();
  initMobileSlider();
});
