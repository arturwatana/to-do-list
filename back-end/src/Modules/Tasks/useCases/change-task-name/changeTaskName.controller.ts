import { Request, Response } from "express";
import { ChangeTaskNameUseCase } from "./changeTaskName.usecase";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";

export class ChangeTaskNameController {
  constructor(private taskRepository: ITasksRepository) {}
  async handle(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const { id } = req.params;

      const changeTasknameUseCase = new ChangeTaskNameUseCase(
        this.taskRepository
      );
      const taskWithNewName = await changeTasknameUseCase.execute({ name, id });
      res.status(200).json({
        taskWithNewName,
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
