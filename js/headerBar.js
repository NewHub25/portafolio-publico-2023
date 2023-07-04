// node parentElement to move with animate.css
export function toggleClassParentAndMe(event) {
  if (event.target.dataset.icon || event.target.tagName === "A") {
    event.currentTarget.classList.toggle("left_scene");
    const arrowLeft = event.currentTarget.querySelector(
      '[data-icon="arrow-left"]'
    );
    arrowLeft.classList.toggle("fa-caret-left");
    arrowLeft.classList.toggle("fa-caret-right");
  }
}
