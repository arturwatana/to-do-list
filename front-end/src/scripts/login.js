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
  try {
    if (!username.value || !password.value) {
      throw new Error("Por favor, digite os campos!");
    }
    const userRequest = {
      username: username.value,
      password: password.value,
    };
    const user = await axios
      .post("http://localhost:8080/login", userRequest)
      .catch((err) => {
        connectToDBError(err);
        throw new Error(err.response.data.message);
      });
    const token = user.data.message;
    localStorage.setItem("auth", token);
    localStorage.setItem("userName", username.value);
    registerResult.innerText = `Logado com sucesso ${username.value}`;
  } catch (err) {
    registerResult.innerText = err.message;
  }
}
