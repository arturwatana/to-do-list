import { Task } from "vitest";
import { IUserRepository } from "../../../User/repositories/IUserRepository.memory";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";
import { CustomError } from "../../../errors/customError.error";

type TaskNameRequest = {
  id: string;
  name: string;
};

export class ChangeTaskNameUseCase {
  constructor(private taskRepository: ITasksRepository) {}
  async execute(data: TaskNameRequest) {
    const task = await this.taskRepository.findById(data.id);
    if (!task) {
      throw new CustomError("Task not found", 400);
    }
    const taskWithNewName = await this.taskRepository.changeTaskName(
      data.name,
      data.id
    );
    return taskWithNewName;
  }
}
