import { User } from "./User/entity/User.entity.js";
import { checkRegisterInputs } from "./User/useCases/checkUserRegisterInputs.js";
import { redirectUserToPage } from "./User/useCases/redirectUserToPage.js";
import { createUserInDB } from "../scripts/User/useCases/createUserInDB.js";
import { verifyIfUserAreLoggedIn } from "./User/useCases/verifyIfUserAreLoggedIn.js";
import { logoutUser } from "./User/useCases/logout.js";

const form = document.getElementById("form-login");
const name = document.getElementById("form-name");
const username = document.getElementById("form-username");
const email = document.getElementById("form-email");
const password = document.getElementById("form-password");
const registerResult = document.getElementById("registerResult");
const resetForm = document.getElementById("resetForm");
const loginButton = document.getElementById("loginButton");

verifyIfUserAreLoggedIn(loginButton, localStorage.auth);
loginButton.addEventListener("click", (e) => {
  if (e.target.innerText === "Logout") {
    logoutUser();
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  registerUser();
});

resetForm.addEventListener("click", () => {
  name.value = "";
  username.value = "";
  email.value = "";
  password.value = "";
});

async function registerUser() {
  try {
    if (localStorage.auth) {
      throw new Error("Ops, parece que voce já está logado");
    }
    const user = new User(
      name.value,
      username.value,
      email.value,
      password.value
    );
    if (!checkRegisterInputs(user)) {
      return;
    }
    const userCreated = await createUserInDB(user);
    localStorage.setItem("userName", userCreated.data.name);
    redirectUserToPage("/front-end/src/pages/register-success.html");
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
