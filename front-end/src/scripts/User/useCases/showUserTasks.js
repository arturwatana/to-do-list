import { addTaskCardtoScreen } from "../../Task/useCases/addTaskCardtoScreen.js";
import { getUserInDB } from "./getUserInDB.js";

const username = localStorage.getItem("userName");
const error = document.querySelector("#error");
const taskList = document.querySelector("#tasks");

export async function showUserTasks() {
  try {
    if (!username) {
      throw new Error("Ops, parece que voce ainda nao está logado.");
    }
    const user = await getUserInDB(username);

    for (let i = 0; i <= user.tasks.length; i++) {
      addTaskCardtoScreen(user.tasks[i], taskList);
    }
  } catch (err) {
    error.innerText = err.message;
    return;
  }
}
showUserTasks();
