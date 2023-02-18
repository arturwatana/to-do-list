import { Task } from "./Task/entity/Task.entity.js";

const taskName = document.querySelector("#new-task");
const urgency = document.querySelectorAll(".urgency-tasks");
const btn = document.querySelector("#submit-task");
const tasks = [];
const tasksPanel = document.querySelector("#tasks");
const btn_task = document.querySelector("#filter-task");
const filterTask = document.querySelector("#filter-text");
const endTaskDate = document.querySelector("#endTaskDate");

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
      verifyIfTaskExists(newTask);
    } catch (err) {
      showErrorMessage(err);
      return;
    }
    tasks.push(newTask);
    addTaskCard(newTask);
  });
}

function findTask(task) {
  let taskAlreadyExist = tasks.find((t) => t.name === task.name);

  return taskAlreadyExist;
}

function showErrorMessage(err) {
  alert(err);
}

function verifyIfTaskExists(task) {
  let taskAlreadyExist = findTask(task);
  if (taskAlreadyExist) {
    throw new Error("Ops, voce já tem essa task");
  }
}

function addTaskCard(task) {
  if (!task) {
    return;
  }

  let card = document.createElement("li");
  let checked = document.createElement("input");
  let taskName = document.createElement("h1");
  let taskUrgency = document.createElement("h2");
  let taskDate = document.createElement("h3");
  let taskEndDate = document.createElement("h3");

  taskName.innerText = task.name;
  taskUrgency.innerText = task.urgency_task;
  taskDate.innerText = task.todayDate;
  taskEndDate.innerText = task.endDate;

  card.classList.add("taskCard");
  checked.setAttribute("type", "radio");
  taskName.classList.add("taskText");
  taskUrgency.classList.add("taskUrgency");
  taskDate.classList.add("taskDate");
  taskEndDate.classList.add("taskDate");

  if (taskUrgency.innerText == "Muito urgente") {
    taskUrgency.classList.add("urgency");
  } else if (taskUrgency.innerText == "Não urgente") {
    taskUrgency.classList.add("not-urgency");
  }

  card.appendChild(checked);
  card.appendChild(taskName);
  card.appendChild(taskUrgency);
  card.appendChild(taskDate);
  card.appendChild(taskEndDate);
  tasksPanel.appendChild(card);
}

addTask();
