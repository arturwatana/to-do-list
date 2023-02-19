import { connectToDBError } from "./errors/connectToDB.error.js";
import { getUserInDB } from "./User/useCases/getUserInDB.js";

const username = document.getElementById("form-username");
const password = document.getElementById("form-password");
const loginButton = document.getElementById("loginRequest");
const registerResult = document.getElementById("registerResult");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  userLogin();
});

async function userLogin() {
  if (!username.value || !password.value) {
    throw new Error("Por favor, digite os campos!");
  }
  try {
    const userRequest = {
      username,
      password,
    };
    const user = await axios
      .post("http://localhost:8080/login", userRequest)
      .catch((err) => {
        connectToDBError(err);
        throw new Error(err.response.data.message);
      });
    console.log(user);

    // Continuar login request
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
