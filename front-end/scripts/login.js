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
    alert("Please enter full fields");
    return;
  }
}

async function createUserInDB() {
  try {
    const user = {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value,
    };
    // checkRegisterInputs(user);
    const userCreated = await axios
      .post("http://localhost:8080/register", user)
      .catch((err) => {
        if (!err.response) {
          throw new Error("Cannot reach the server. Please try again later");
        }

        throw new Error(err.response.data.message);
      });
    await returnUserCreateMessage(userCreated);
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
  console.log(await userCreated);
  if (!(await userCreated)) {
    registerResult.innerText = `Não foi possivel cadastrar seu usuario`;
  }
  registerResult.innerText = `User register with success!
                   Thanks for using this software`;
}
