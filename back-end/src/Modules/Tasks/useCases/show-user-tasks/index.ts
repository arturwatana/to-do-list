import { UserMongoRepository } from "../../../User/repositories/implementations/userRepository.mongodb";
import { TaskMongoRepository } from "../../repositories/implementations/taskRepository.mongodb";
import { ShowUserTasksController } from "./show-user-tasks.controller";

const userMongoRepository = new UserMongoRepository();
const taskMongoRepository = new TaskMongoRepository();

const showUserTasksController = new ShowUserTasksController(
  userMongoRepository,
  taskMongoRepository
);

export { showUserTasksController };
