import { User } from "../../entity/user.entity";
import { IUserRepository } from "../IUserRepository.memory";

export class UserRepositoryMemory implements IUserRepository {
  users: User[] = [];

  private static instance: UserRepositoryMemory;

  static getInstance() {
    if (!UserRepositoryMemory.instance) {
      UserRepositoryMemory.instance = new UserRepositoryMemory();
    }
    return UserRepositoryMemory.instance;
  }

  async save(data: User): Promise<User> {
    this.users.push(data);
    return data;
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const findedUser = this.users.find((user) => user.email === email);
    return findedUser;
  }
  async findUserByUsername(username: string): Promise<User | undefined> {
    const findedUser = this.users.find((user) => user.username === username);
    return findedUser;
  }
}
