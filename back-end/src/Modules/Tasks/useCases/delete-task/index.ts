import { TaskMongoRepository } from "../../repositories/implementations/taskRepository.mongodb";
import { DeleteTaskController } from "./deleteTask.controller";

const taskRepository = new TaskMongoRepository();
const deleteTaskController = new DeleteTaskController(taskRepository);

export { deleteTaskController };
