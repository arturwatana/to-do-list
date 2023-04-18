import { addTaskCardtoScreen } from "../../Task/useCases/addTaskCardtoScreen.js";
import { getTasksByEmail } from "../../Task/useCases/getTasksByEmail.js";

const email = localStorage.getItem("email");
const token = localStorage.getItem("auth");
const error = document.querySelector("#error");
const taskList = document.querySelector("#tasks");

export async function showUserTasks() {
  try {
    if (!email || !token) {
      throw new Error("Ops, parece que voce ainda nao está logado.");
    }
    const userTasks = await getTasksByEmail(email, token);

    for (let i = 0; i <= userTasks.length; i++) {
      addTaskCardtoScreen(userTasks[i], taskList);
    }
  } catch (err) {
    error.innerText = err.message;
    return;
  }
}
showUserTasks();
