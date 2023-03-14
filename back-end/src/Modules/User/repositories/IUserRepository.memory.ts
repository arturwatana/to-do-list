import { User } from "../entity/user.entity";
import { userRequestType } from "./implementations/userRepository.mongodb";

export interface IUserRepository {
  save(data: userRequestType): Promise<User>;
  findUserByEmail(email: string): Promise<User | undefined>;
  findUserByUsername(username: string): Promise<User | undefined>;
  findAllUsers(): Promise<User[]>;
}
