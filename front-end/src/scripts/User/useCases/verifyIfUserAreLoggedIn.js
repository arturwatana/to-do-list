export function verifyIfUserAreLoggedIn(loginButton, auth) {
  loginButton.innerText = auth ? "Logout" : "Login";
}
