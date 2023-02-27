import { UserRepositoryMemory } from "../../../User/repositories/implementations/userRepository.memory";
import { UserMongoRepository } from "../../../User/repositories/implementations/userRepository.mongodb";
import { TaskMongoRepository } from "../../repositories/implementations/taskRepository.mongodb";
import { TasksRepositoryMemory } from "../../repositories/implementations/tasksRepository.memory";
import { CreateTaskController } from "./create-task.controller";

const tasksRepository = TasksRepositoryMemory.getInstance();
const usersRepository = UserRepositoryMemory.getInstance();

const userMongoRepository = new UserMongoRepository();
const taskMongoRepository = new TaskMongoRepository();

const createTaskController = new CreateTaskController(
  userMongoRepository,
  taskMongoRepository
);

export { createTaskController };
