import { Router } from "express";
import { ensureAuthenticate } from "../Modules/infra/middlewares/ensureAuthenticate.middleware";
import { TasksRepositoryMemory } from "../Modules/Tasks/repositories/implementations/tasksRepository.memory";
import { createTaskController } from "../Modules/Tasks/useCases/create-task/index";

const taskRoutes = Router();

const taskRepository = TasksRepositoryMemory.getInstance();

taskRoutes.get("/tasks/:username", (req, res) => {});
taskRoutes.post("/addtask/:username", ensureAuthenticate, (req, res) => {
  createTaskController.handle(req, res);
});

taskRoutes.get("/tasks", (req, res) => {
  res.send(taskRepository);
});

export { taskRoutes };
