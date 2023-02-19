import { Request, Response } from "express";
import { IUserPasswordHash } from "../../../infra/userPasswordHash/userPasswordHash.interface";
import { ITasksRepository } from "../../../Tasks/repositories/ITaskRepository.interface";
import { IUserRepository } from "../../repositories/IUserRepository.memory";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController {
  constructor(
    private userReposititory: IUserRepository,
    private passwordHash: IUserPasswordHash
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const data = req.body;
      const createUserUseCase = new CreateUserUseCase(
        this.userReposititory,
        this.passwordHash
      );
      const createdUser = await createUserUseCase.execute(data);
      res.status(201).send(createdUser);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
