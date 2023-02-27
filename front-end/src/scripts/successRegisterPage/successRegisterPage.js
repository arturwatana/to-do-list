const outPutRegisterMessage = document.querySelector(".success-message");
const user = localStorage.getItem("userName");

const message = `Olá ${user},
                Obrigado por utilizar nosso software.
                Bora organizar as tasks?`;

outPutRegisterMessage.innerText = message;
