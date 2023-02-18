import { IUserPasswordHash } from "../../infra/userPasswordHash/userPasswordHash.interface";
import { User } from "../entity/user.entity";
import { IUserRepository } from "../repositories/IUserRepository.memory";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordHash: IUserPasswordHash
  ) {}

  async execute(data: User) {
    const user = User.create(data);
    const userAlreadyExists = await this.userRepository.findUserByEmail(
      user.email
    );
    if (userAlreadyExists) {
      throw new Error(`User ${user.email} already exists`);
    }
    const passwordHash = await this.passwordHash.hash(user.password);
    user.password = passwordHash;
    const userSavedOnDB = await this.userRepository.save(user);
    return userSavedOnDB;
  }
}
