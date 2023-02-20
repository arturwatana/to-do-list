import { IUserRepository } from "../../repositories/IUserRepository.memory";
import { IUserPasswordHash } from "../../../infra/userPasswordHash/userPasswordHash.interface";
import { IToken } from "../../../infra/token/IToken.interface";
export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private passwordHash: IUserPasswordHash,
    private token: IToken
  ) {}
  async execute(username: string, password: string) {
    const user = await this.usersRepository.findUserByUsername(username);
    if (!user) {
      throw new Error(`Usuario ou senha incorretos`);
    }
    const comparePasswordEquals = await this.passwordHash.compare(
      password,
      user.password
    );
    if (!comparePasswordEquals) {
      throw new Error(`Usuario ou senha incorretos`);
    }

    const tokenGenerated = this.token.create(user);
    return tokenGenerated;
  }
}
