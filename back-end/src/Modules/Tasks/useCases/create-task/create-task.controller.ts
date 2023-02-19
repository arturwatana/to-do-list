import { Request, Response } from "express";
import { IUserRepository } from "../../../User/repositories/IUserRepository.memory";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";
import { CreateTaskUseCase } from "./create-task.usecase";

export class CreateTaskController {
  constructor(
    private usersRepository: IUserRepository,
    private tasksRepository: ITasksRepository
  ) {}
  async handle(req: Request, res: Response) {
    try {
      const { email } = req.params;
      const { name, urgency, created_At, end_At } = req.body;

      const createTaskUseCase = new CreateTaskUseCase(
        this.tasksRepository,
        this.usersRepository
      );

      createTaskUseCase.execute({ name, urgency, created_At, end_At }, email);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
