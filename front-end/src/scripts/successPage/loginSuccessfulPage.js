import { verifyIfUserAreLoggedIn } from "../User/useCases/verifyIfUserAreLoggedIn.js";

const successMessageInput = document.querySelector(".success-message");
const loginButton = document.getElementById("loginButton");
const homeInput = document.getElementById("homeInput");
const userName = localStorage.getItem("userName");
const auth = localStorage.getItem("auth");

verifyIfUserAreLoggedIn(loginButton, auth);
successMessageInput.innerText = `Logado com sucesso, seja bem vindo ${userName}!`;
