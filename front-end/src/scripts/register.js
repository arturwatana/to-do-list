import { User } from "./User/entity/User.entity.js";
import { checkRegisterInputs } from "./User/useCases/checkUserRegisterInputs.js";
import { returnUserCreateMessage } from "./User/useCases/returnUserCreateMessage.js";
import { createUserInDB } from "../scripts/User/useCases/createUserInDB.js";

const form = document.getElementById("form-login");
const name = document.getElementById("form-name");
const username = document.getElementById("form-username");
const email = document.getElementById("form-email");
const password = document.getElementById("form-password");
const registerResult = document.getElementById("registerResult");
const resetForm = document.getElementById("resetForm");

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
    returnUserCreateMessage();
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
