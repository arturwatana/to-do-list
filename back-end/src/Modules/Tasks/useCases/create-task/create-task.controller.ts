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
      const data = req.body;

      const createTaskUseCase = new CreateTaskUseCase(
        this.tasksRepository,
        this.usersRepository
      );

      const taskCreated = await createTaskUseCase.execute(data, email);

      res.status(200).json(taskCreated);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
