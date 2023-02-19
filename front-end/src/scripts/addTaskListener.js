import { Task } from "./Task/entity/Task.entity.js";
import { addTaskCardtoScreen } from "./Task/useCases/addTaskCardtoScreen.js";
import { verifyIfTaskExists } from "./Task/useCases/verifyIfTasksExists.js";

const taskName = document.querySelector("#new-task");
const urgency = document.querySelectorAll(".urgency-tasks");
const btn = document.querySelector("#submit-task");
const endTaskDate = document.querySelector("#endTaskDate");
const taskList = document.querySelector("#tasks");

function addTask() {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let urgency_task;

    urgency.forEach((task) => {
      if (task.checked == true) {
        urgency_task = task;
      }
    });
    let newTask = new Task(
      taskName.value,
      urgency_task.value,
      endTaskDate.value
    );
    try {
      console.log(newTask);
      verifyIfTaskExists(newTask);
      addTaskCardtoScreen(newTask, taskList);
    } catch (err) {
      alert(err);
      return;
    }
  });
}

addTask();
