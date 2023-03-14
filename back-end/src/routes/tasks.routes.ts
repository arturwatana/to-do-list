import { Router } from "express";
import { MongoDB } from "../Modules/infra/database/connect";
import { ensureAuthenticate } from "../Modules/infra/middlewares/ensureAuthenticate.middleware";
import { TaskMongoRepository } from "../Modules/Tasks/repositories/implementations/taskRepository.mongodb";
import { TasksRepositoryMemory } from "../Modules/Tasks/repositories/implementations/tasksRepository.memory";
import { createTaskController } from "../Modules/Tasks/useCases/create-task/index";
import { showUserTasksController } from "../Modules/Tasks/useCases/show-user-tasks/index";

const taskRoutes = Router();

const taskRepository = new TaskMongoRepository();

taskRoutes.get("/tasks/:username", ensureAuthenticate, (req, res) => {
  showUserTasksController.handle(req, res);
});
taskRoutes.post("/addtask/:username", ensureAuthenticate, (req, res) => {
  createTaskController.handle(req, res);
});

taskRoutes.get("/tasks", async (req, res) => {
  res.send(await taskRepository.showAllTasks());
});

export { taskRoutes };
