import { User } from "../entity/user.entity";

export interface IUserRepository {
  save(data: User): Promise<User>;
  findUserByEmail(email: string): Promise<User | undefined>;
}
