import { IUserRepository } from "../../repositories/IUserRepository.memory";

export class GetUserInDBUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(username: string) {
    const user = await this.usersRepository.findUserByUsername(username);
    if (!user) {
      throw new Error(`User ${username} not found`);
    }
    return user;
  }
}
