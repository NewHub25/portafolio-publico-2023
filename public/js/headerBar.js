// node parentElement to move with animate.css
export function toggleClassParentAndMe(event) {
  if (event.target.dataset.icon || event.target.tagName === "A") {
    event.currentTarget.classList.toggle("left_scene");
  }
}
