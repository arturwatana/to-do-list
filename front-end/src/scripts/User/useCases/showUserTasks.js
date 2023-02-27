import { addTaskCardtoScreen } from "../../Task/useCases/addTaskCardtoScreen.js";
import { getTasksByUsername } from "../../Task/useCases/getTasksByUsername.js";

const username = localStorage.getItem("userName");
const token = localStorage.getItem("auth");
const error = document.querySelector("#error");
const taskList = document.querySelector("#tasks");

export async function showUserTasks() {
  try {
    if (!username) {
      throw new Error("Ops, parece que voce ainda nao está logado.");
    }
    const userTasks = await getTasksByUsername(username, token);

    for (let i = 0; i <= userTasks.length; i++) {
      addTaskCardtoScreen(userTasks[i], taskList);
    }
  } catch (err) {
    error.innerText = err.message;
    return;
  }
}
showUserTasks();
