import { IUserRepository } from "../../repositories/IUserRepository.memory";
import { IUserPasswordHash } from "../../../infra/userPasswordHash/userPasswordHash.interface";
import { IToken } from "../../../infra/token/IToken.interface";
import { CustomError } from "../../../errors/customError.error";
export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private passwordHash: IUserPasswordHash,
    private token: IToken
  ) {}
  async execute(username: string, password: string) {
    const user = await this.usersRepository.findUserByUsername(username);
    if (!user) {
      throw new CustomError(`Usuario ou senha incorretos`, 400);
    }
    const comparePasswordEquals = await this.passwordHash.compare(
      password,
      user.password
    );
    if (!comparePasswordEquals) {
      throw new CustomError(`Usuario ou senha incorretos`, 400);
    }

    const tokenGenerated = this.token.create(user);
    return tokenGenerated;
  }
}
