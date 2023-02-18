export function checkRegisterInputs({ name, username, email, password }) {
  if (!name || !username || !email || !password) {
    registerResult.innerText = "Por favor, preencha todos os campos";
    return false;
  } else {
    return true;
  }
}
