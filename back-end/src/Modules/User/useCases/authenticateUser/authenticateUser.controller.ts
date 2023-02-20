import { Request, Response } from "express";
import { IToken } from "../../../infra/token/IToken.interface";
import { IUserPasswordHash } from "../../../infra/userPasswordHash/userPasswordHash.interface";
import { IUserRepository } from "../../repositories/IUserRepository.memory";
import { AuthenticateUserUseCase } from "./authenticateUser.usecase";

export class AuthenticateUserController {
  constructor(
    private usersRepository: IUserRepository,
    private passwordHash: IUserPasswordHash,
    private token: IToken
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const authenticateUserUseCase = new AuthenticateUserUseCase(
        this.usersRepository,
        this.passwordHash,
        this.token
      );
      const authenticatedUser = await authenticateUserUseCase.execute(
        username,
        password
      );
      res.status(200).send({ message: authenticatedUser });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
