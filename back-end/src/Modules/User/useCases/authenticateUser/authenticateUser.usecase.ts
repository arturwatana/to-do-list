import { IUserRepository } from "../../repositories/IUserRepository.memory";
import { IUserPasswordHash } from "../../../infra/userPasswordHash/userPasswordHash.interface";
export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private passwordHash: IUserPasswordHash
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
    return `Logado com sucesso ${user.username}`;
  }
}
