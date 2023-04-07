import { CustomError } from "../../../errors/customError.error";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";

export class DeleteTaskUseCase {
  constructor(private taskRepository: ITasksRepository) {}
  async execute(id: string) {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new CustomError("Task not found");
    }
    await this.taskRepository.deleteById(id);
    return task;
  }
}
