const outPutRegisterMessage = document.querySelector(".success-message");
const userName = localStorage.getItem("userName");

outPutRegisterMessage.innerText = `Olá ${userName},
Obrigado por utilizar nosso software.
Bora organizar as tasks?`;
