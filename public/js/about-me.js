export function target3d(event) {
  const cube = event.currentTarget;
  let targetToSide = event.target;
  if (targetToSide === cube) return;
  if (!targetToSide.classList.contains("side")) {
    targetToSide = targetToSide.closest(".side");
  }
  cube.classList.add("cube_stop");
  targetToSide.classList.add("target_cube_stop");
  setTimeout(() => {
    cube.classList.remove("cube_stop");
    targetToSide.classList.remove("target_cube_stop");
  }, 10_000);
}
