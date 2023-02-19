import { IUserRepository } from "../../../User/repositories/IUserRepository.memory";
import { Task } from "../../entity/task.entity";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITasksRepository,
    private usersRepository: IUserRepository
  ) {}

  async execute({ name, urgency, created_At, end_At }: Task, email: string) {
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) {
      throw new Error(`User ${email} not found`);
    }
    const task = Task.create({
      name,
      urgency,
      id_user: user.id,
      created_At,
      end_At,
    });

    const savedTask = await this.taskRepository.save(task);

    return savedTask;
  }
}
