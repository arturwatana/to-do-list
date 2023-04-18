import { connectToDBError } from "./errors/connectToDB.error.js";
import { verifyIfUserAreLoggedIn } from "./User/useCases/verifyIfUserAreLoggedIn.js";
import { redirectUserToPage } from "./User/useCases/redirectUserToPage.js";
import { logoutUser } from "./User/useCases/logout.js";

const email = document.getElementById("form-email");
const password = document.getElementById("form-password");
const loginButtonRequest = document.getElementById("loginRequest");
const registerResult = document.getElementById("registerResult");
const loginButton = document.getElementById("loginButton");

loginButtonRequest.addEventListener("click", (e) => {
  e.preventDefault();
  userLogin();
});
verifyIfUserAreLoggedIn(loginButton, localStorage.auth);
loginButton.addEventListener("click", (e) => {
  if (e.target.innerText === "Logout") {
    logoutUser();
  }
});

async function userLogin() {
  try {
    if (!email.value || !password.value) {
      throw new Error("Por favor, digite os campos!");
    }
    if (loginButton.innerHTML === "Logout") {
      throw new Error("Ops, voce já está logado!");
    }
    const userRequest = {
      email: email.value,
      password: password.value,
    };
    const user = await axios
      .post("http://localhost:8080/login", userRequest)
      .catch((err) => {
        connectToDBError(err);
        throw new Error(err.response.data.message);
      });
    const token = user.data.message.token;
    localStorage.setItem("auth", token);
    localStorage.setItem("email", user.data.message._doc.email);
    redirectUserToPage("../pages/login-success.html");
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
