import projectsArray from "../assets/links.json";
let t = "";
let range = 6;
let count = 0;
const imgHelp = "./../assets/vite.svg";

export function refreshLinksToPage(_direction) {
  //Se vacía el contenedor y este acumulador: "t"
  document.querySelector(".projects__article").innerHTML = "";
  t = "";

  count = count + _direction;
  if (Math.ceil(projectsArray.length / range) - 1 < count) {
    count--;
  }
  if (count < 0) {
    count++;
  }
  for (let i = count * range; i < range + count * range; i++) {
    const pro = projectsArray[i];
    t += pro
      ? `
  <nav class="projects__nav">
    <a class="projects__a" href="${pro.url}" title)="${pro.title}">
      <img class="projects__img" src="${pro.src || imgHelp}" alt="${pro.alt}" />
      <p class="projects__p">${pro.detalle}</p>
    </a>
  </nav>`
      : "";
  }
  document.querySelector(".projects__article").innerHTML = t;
}
