import { UserRepositoryMemory } from "../../../User/repositories/implementations/userRepository.memory";
import { TasksRepositoryMemory } from "../../repositories/implementations/tasksRepository.memory";
import { CreateTaskController } from "./create-task.controller";

const tasksRepository = TasksRepositoryMemory.getInstance();
const usersRepository = UserRepositoryMemory.getInstance();
const createTaskController = new CreateTaskController(
  usersRepository,
  tasksRepository
);

export { createTaskController };
