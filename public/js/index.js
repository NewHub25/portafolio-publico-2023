import { loadCanvasFluid } from "./canvas_image_fluid.js";
import { toggleClassParentAndMe } from "./headerBar.js";
import { refreshLinksToPage } from "./projects.js";

window.addEventListener("load", () => {
  loadCanvasFluid();
  document
    .querySelector(".header-top")
    .addEventListener("click", toggleClassParentAndMe);
  document
    .querySelector(".projects__button_preview")
    .addEventListener("click", () => refreshLinksToPage(-1));
  document
    .querySelector(".projects__button_next")
    .addEventListener("click", () => refreshLinksToPage(+1));
    document.body.firstElementChild.style.display = "none"; //Desaparece la carga
  refreshLinksToPage(0);
});