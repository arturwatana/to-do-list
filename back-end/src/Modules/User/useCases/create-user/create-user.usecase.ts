import { CustomError } from "../../../errors/customError.error";
import { IUserPasswordHash } from "../../../infra/userPasswordHash/userPasswordHash.interface";
import { User } from "../../entity/user.entity";
import { IUserRepository } from "../../repositories/IUserRepository.memory";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordHash: IUserPasswordHash
  ) {}

  async execute({ name, email, username, password }: User) {
    const user = User.create({ name, email, username, password });
    const emailAlreadyExists = await this.userRepository.findUserByEmail(
      user.email
    );
    if (emailAlreadyExists) {
      throw new CustomError(`Email ${user.email} já cadastrado`, 400);
    }
    const userNameAlreadyExists = await this.userRepository.findUserByUsername(
      username
    );
    if (userNameAlreadyExists) {
      throw new CustomError(`Usuario ${user.username} já cadastrado`, 400);
    }
    const passwordHash = await this.passwordHash.hash(user.password);
    user.password = passwordHash;
    const userSavedOnDB = await this.userRepository.save(user);
    return userSavedOnDB;
  }
}
