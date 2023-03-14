import { User } from "../../entity/user.entity";
import { IUserRepository } from "../IUserRepository.memory";
import { UserModel } from "../../../infra/database/models/user.model";

export type userRequestType = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  is_Admin: boolean;
  created_at: Date;
};

export class UserMongoRepository implements IUserRepository {
  async save(data: userRequestType): Promise<User> {
    const user = await UserModel.create(data);
    return user;
  }
  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await UserModel.find({ email }).exec();
    return user[0];
  }
  async findUserByUsername(username: string): Promise<User | undefined> {
    const user = await UserModel.find({ username }).exec();
    return user[0];
  }
  async findAllUsers(): Promise<User[]> {
    const users = await UserModel.find().exec();
    return users;
  }
}
