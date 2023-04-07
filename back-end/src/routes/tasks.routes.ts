import { Router } from "express";
import { ensureAuthenticate } from "../Modules/infra/middlewares/ensureAuthenticate.middleware";
import { TaskMongoRepository } from "../Modules/Tasks/repositories/implementations/taskRepository.mongodb";
import { createTaskController } from "../Modules/Tasks/useCases/create-task/index";
import { showUserTasksController } from "../Modules/Tasks/useCases/show-user-tasks/index";
import { changeTaskNameController } from "../Modules/Tasks/useCases/change-task-name/index";

const taskRoutes = Router();

const taskRepository = new TaskMongoRepository();

taskRoutes.get("/tasks/:email", ensureAuthenticate, (req, res) => {
  showUserTasksController.handle(req, res);
});
taskRoutes.post("/addtask/:email", ensureAuthenticate, (req, res) => {
  createTaskController.handle(req, res);
});

taskRoutes.put("/tasks/:id", ensureAuthenticate, (req, res) => {
  changeTaskNameController.handle(req, res);
});

taskRoutes.get("/tasks", async (req, res) => {
  res.send(await taskRepository.showAllTasks());
});

export { taskRoutes };
