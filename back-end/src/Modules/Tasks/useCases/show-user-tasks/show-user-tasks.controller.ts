import { Request, Response } from "express";
import { IUserRepository } from "../../../User/repositories/IUserRepository.memory";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";
import { ShowUserTasksUseCase } from "./show-user-tasks.usecase";

export class ShowUserTasksController {
  constructor(
    private userRepository: IUserRepository,
    private tasksRepository: ITasksRepository
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const showUserTasksUseCase = new ShowUserTasksUseCase(
        this.userRepository,
        this.tasksRepository
      );
      const userTasks = await showUserTasksUseCase.execute(username);
      res.status(200).json({ userTasks });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
