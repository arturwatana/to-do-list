import { TaskMongoRepository } from "../../repositories/implementations/taskRepository.mongodb";
import { ChangeTaskNameController } from "./changeTaskName.controller";

const taskRepository = new TaskMongoRepository();
const changeTaskNameController = new ChangeTaskNameController(taskRepository);

export { changeTaskNameController };
