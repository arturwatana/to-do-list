import { connectToDBError } from "./errors/connectToDB.error.js";
import { verifyIfUserAreLoggedIn } from "./User/useCases/verifyIfUserAreLoggedIn.js";
import { redirectUserToPage } from "./User/useCases/redirectUserToPage.js";
import { logoutUser } from "./User/useCases/logout.js";

const username = document.getElementById("form-username");
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
    if (!username.value || !password.value) {
      throw new Error("Por favor, digite os campos!");
    }
    if (loginButton.innerHTML === "Logout") {
      throw new Error("Ops, voce já está logado!");
    }
    const userRequest = {
      username: username.value,
      password: password.value,
    };
    const user = await axios
      .post(
        "https://to-do-list-server-o3q8oo2u9-arturwatana.vercel.app/login",
        userRequest
      )
      .catch((err) => {
        connectToDBError(err);
        throw new Error(err.response.data.message);
      });
    const token = user.data.message;
    localStorage.setItem("auth", token);
    localStorage.setItem("userName", username.value);
    redirectUserToPage("/front-end/src/pages/login-success.html");
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
