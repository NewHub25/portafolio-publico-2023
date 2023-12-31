import { loadCanvasFluid } from "./canvas_image_fluid.js";
import { toggleClassParentAndMe } from "./headerBar.js";
import { refreshLinksToPage } from "./projects.js";
import { target3d } from "./about-me.js";
import { sendEmail } from "./contact.js";
import { putEffectTitle } from "./title-effect.js";

window.addEventListener("load", () => {
  sendEmail();
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
  refreshLinksToPage(0);
  document.body.firstElementChild.style.display = "none"; //Desaparece la carga
  document.querySelector(".cube").addEventListener("click", target3d);
// Efecto en el titulo de inicio:
putEffectTitle(document.querySelector('.home-draw__span'))
});
