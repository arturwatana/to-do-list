import { CustomError } from "../../../errors/customError.error";
import { IUserRepository } from "../../repositories/IUserRepository.memory";

export class GetUserInDBUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(username: string) {
    const user = await this.usersRepository.findUserByUsername(username);
    if (!user) {
      throw new CustomError(`User ${username} not found`, 404);
    }
    return user;
  }
}
