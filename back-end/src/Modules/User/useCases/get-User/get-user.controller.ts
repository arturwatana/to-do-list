import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/IUserRepository.memory";
import { GetUserInDBUseCase } from "./get-user.usecase";

export class GetUserInDBController {
  constructor(private usersRepository: IUserRepository) {}
  async handle(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const getUserInDB = new GetUserInDBUseCase(this.usersRepository);
      const user = await getUserInDB.execute(username);
      res.status(200).send(user);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
