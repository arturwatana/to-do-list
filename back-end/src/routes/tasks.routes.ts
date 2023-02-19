import { Router } from "express";
import { TasksRepositoryMemory } from "../Modules/Tasks/repositories/implementations/tasksRepository.memory";
import { createTaskController } from "../Modules/Tasks/useCases/create-task/index";

const taskRoutes = Router();

const taskRepository = TasksRepositoryMemory.getInstance();

taskRoutes.get("/:email/tasks", (req, res) => {});
taskRoutes.post("/:email/newTask", (req, res) => {
  createTaskController.handle(req, res);
  console.log(taskRepository);
});

taskRoutes.get("tasks", (req, res) => {
  res.send(taskRepository);
});
