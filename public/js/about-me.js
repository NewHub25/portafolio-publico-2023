export function target3d(event) {
  const cube = event.currentTarget;
  cube.classList.add("cube_stop");
  let side = event.target;
  if (side.classList.contains("side")) {
    side.classList.add("target_cube_stop");
  }
  setTimeout(() => {
    cube.classList.remove("cube_stop");
    side.classList.remove("target_cube_stop");
  }, 5000);
}
