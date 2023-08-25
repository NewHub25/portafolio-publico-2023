const letter = Array.from({ length: 26 }, (_, i) => i + 65).map((m) =>
  String.fromCharCode(m)
);

export function putEffectTitle(targetElement) {
  setInterval(function loop() {
    let iteration = 0;
    const ID_conteo = setInterval(() => {
      targetElement.innerText = targetElement.innerText
        .split("")
        .map((m, i) =>
          i < iteration
            ? targetElement.dataset.text[i]
            : letter[Math.floor(Math.random() * 26)]
        )
        .join("");
      iteration = iteration + 1 / 3;
      if (iteration >= targetElement.innerText.length) {
        clearInterval(ID_conteo);
      }
    }, 30);
  }, 5000);
}
