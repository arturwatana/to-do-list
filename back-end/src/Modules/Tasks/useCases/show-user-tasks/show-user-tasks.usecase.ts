import { CustomError } from "../../../errors/customError.error";
import { IUserRepository } from "../../../User/repositories/IUserRepository.memory";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";

export class ShowUserTasksUseCase {
  constructor(
    private userRepository: IUserRepository,
    private tasksRepository: ITasksRepository
  ) {}
  async execute(email: string) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new CustomError("User not found");
    }
    const userTasks = await this.tasksRepository.getTasksByUserID(user.id);

    return userTasks;
  }
}
