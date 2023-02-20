import { Task } from "./Task/entity/Task.entity.js";
import { addTaskCardtoScreen } from "./Task/useCases/addTaskCardtoScreen.js";
import { saveTaskOnDB } from "./Task/useCases/saveTaskOnDB.js";
import { validateTaskInputs } from "./Task/useCases/validateTaskInputs.js";
import { showUserTasks } from "./User/useCases/showUserTasks.js";

const taskName = document.querySelector("#new-task");
const urgency = document.querySelectorAll(".urgency-tasks");
const btn = document.querySelector("#submit-task");
const endTaskDate = document.querySelector("#endTaskDate");
const taskList = document.querySelector("#tasks");
const error = document.querySelector("#error");

function addTask() {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("auth");
      const username = localStorage.getItem("userName");
      let urgency_task;

      urgency.forEach((task) => {
        if (task.checked == true) {
          urgency_task = task;
        }
      });
      validateTaskInputs(taskName.value, urgency_task, endTaskDate.value);
      error.innerText = "";
      let newTask = new Task(
        taskName.value,
        urgency_task.value,
        endTaskDate.value
      );

      // verifyIfTaskExists(newTask);
      const savedTaskOnDB = await saveTaskOnDB(newTask, token, username);
      addTaskCardtoScreen(savedTaskOnDB, taskList);
    } catch (err) {
      error.innerText = err.message;
      return;
    }
  });
}

addTask();
