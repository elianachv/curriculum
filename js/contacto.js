const $form = document.querySelector("#form");
const $enviarEmail = document.querySelector("#sendEmail");

$form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;
  let asunto = `${nombre} - ${correo}`;
  let saludo = `Hola Eliana te quiero contactar porque ... ${mensaje}`
  $enviarEmail.setAttribute('href',`mailto:elianachavezv@outlook.com?subject=${asunto}&body=${saludo}`);
  $enviarEmail.click();

}
