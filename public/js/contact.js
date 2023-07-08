emailjs.init("12ohxHgCGHSKdVDaH");
const serviceID = "default_service";
const templateID = "template_8th903l";

const btnSend = document.querySelector('[type="submit"]');

export function sendEmail() {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    btnSend.value = "Enviando...";

    const btnStyles = {
      width: "50%",
      fontSize: "1.5em",
      color: "#eee",
      fontWeight: "bold",
      borderRadius: "7px",
      border: "none",
      background: "hsl(201, 100%, 40%)",
      transition: "transform .5s",
      letterSpacing: ".2em",
    };
    for (const prop in btnStyles) {
      if (Object.hasOwnProperty.call(btnStyles, prop)) {
        btnSend.style[prop] = btnStyles[prop];
      }
    }

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btnSend.value = "Enviar";
        alert("Enviado!");
        document
          .querySelectorAll(".form_nav input")
          .forEach((l) => (l.value = ""));
        document.querySelector("textarea").textContent = "";
      },
      (err) => {
        btnSend.value = "Enviar";
        alert(JSON.stringify(err));
      }
    );
  });
}
