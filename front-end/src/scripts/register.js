import { User } from "./User/entity/User.entity.js";
import { checkRegisterInputs } from "./User/useCases/checkUserRegisterInputs.js";
import { returnUserCreateMessage } from "./User/useCases/returnUserCreateMessage.js";

const form = document.getElementById("form-login");
const name = document.getElementById("form-name");
const username = document.getElementById("form-username");
const email = document.getElementById("form-email");
const password = document.getElementById("form-password");
const registerResult = document.getElementById("registerResult");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  registerUser();
  console.log(await getUsersInDB());
});

async function registerUser() {
  try {
    const user = new User(
      name.value,
      username.value,
      email.value,
      password.value
    );
    const validateUserInputs = checkRegisterInputs(user);
    if (!validateUserInputs) {
      return;
    }
    const userCreated = await createUserInDB(user);
    returnUserCreateMessage(userCreated.data);
    return userCreated;
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
