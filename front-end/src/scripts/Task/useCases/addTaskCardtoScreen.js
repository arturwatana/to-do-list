export function addTaskCardtoScreen(task, taskListOutput) {
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
  taskUrgency.innerText = task.urgency;
  taskDate.innerText = task.created_At;
  taskEndDate.innerText = task.end_At;

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

  card.appendChild(taskName);
  card.appendChild(taskUrgency);
  card.appendChild(taskDate);
  card.appendChild(taskEndDate);
  taskListOutput.appendChild(card);
}
