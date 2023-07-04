let t = "";
let range = 6;
let count = 0;

export async function refreshLinksToPage(_direction) {
  const data = await fetch("./public/assets/links.json");
  const projectsArray = await data.json();

  //Se vacía el contenedor y este acumulador: "t"
  document.querySelector(".projects__article").innerHTML = "";
  t = "";
  //Calculo para mover las paginas
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
      <img class="projects__img" src="${pro.src}" alt="${pro.alt}" />
      <p class="projects__p">${pro.detalle}</p>
    </a>
  </nav>`
      : "";
  }
  document.querySelector(".projects__article").innerHTML = t;
}
