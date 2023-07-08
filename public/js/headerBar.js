// node parentElement to move with animate.css
export function toggleClassParentAndMe(event) {
  if (
    event.target.dataset.icon ||
    event.target.tagName === "A" ||
    event.target.matches(".header-top__li a img")
  ) {
    event.currentTarget.classList.toggle("left_scene");
  }
}
