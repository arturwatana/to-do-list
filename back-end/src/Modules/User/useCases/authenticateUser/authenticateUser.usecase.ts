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
    const comparePasswordEquals = this.passwordHash.compare(
      password,
      user.password
    );
    if (!comparePasswordEquals) {
      throw new Error(`Usuario ou senha incorretos`);
    }
    console.log(passwordIsEqual);
    return;
  }
}
