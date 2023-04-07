import { Request, Response } from "express";
import { ITasksRepository } from "../../repositories/ITaskRepository.interface";
import { DeleteTaskUseCase } from "./deleteTask.usecase";

export class DeleteTaskController {
  constructor(private taskRepository: ITasksRepository) {}
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleteTaskUseCase = new DeleteTaskUseCase(this.taskRepository);
      const deletedTask = await deleteTaskUseCase.execute(id);
      res.status(200).json(deletedTask);
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  }
}
