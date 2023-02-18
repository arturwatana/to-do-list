import { User } from "./User/entity/User.entity.js";

const form = document.getElementById("form-login");
const name = document.getElementById("form-name");
const username = document.getElementById("form-username");
const email = document.getElementById("form-email");
const password = document.getElementById("form-password");
const registerResult = document.getElementById("registerResult");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  createUserInDB();
  console.log(await getUsersInDB());
});

function checkRegisterInputs({ name, username, email, password }) {
  if (!name || !username || !email || !password) {
    registerResult.innerText = "Por favor, preencha todos os campos";
    return false;
  } else {
    return true;
  }
}

async function createUserInDB() {
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

    const userCreated = await axios
      .post("http://localhost:8080/register", user)
      .catch((err) => {
        if (!err.response) {
          throw new Error(
            "Ops, não foi possivel te cadastrar no momento. Tente novamente mais tarde!"
          );
        }

        throw new Error(err.response.data.message);
      });
    await returnUserCreateMessage(userCreated.data);
    return userCreated;
  } catch (err) {
    registerResult.innerText = err.message;
  }
}

async function getUsersInDB() {
  const users = await axios.get("http://localhost:8080/users");
  return users.data.users;
}

async function returnUserCreateMessage(userCreated) {
  registerResult.innerText = ` Olá ${userCreated.name}!
                 Obrigado por utilizar nosso software!`;
}
