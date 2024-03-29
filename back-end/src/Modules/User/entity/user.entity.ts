import { randomUUID } from "crypto";
import { CustomError } from "../../errors/customError.error";
import { ITask } from "../../Tasks/entity/task.interface";
import { IUser } from "./user.interface";

export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  is_Admin: boolean;
  tasks?: ITask[];
  created_at: Date;

  private constructor({ name, email, username, password }: IUser) {
    if (!name || !email || !username || !password) {
      throw new CustomError("Required fields are missing!");
    }
    this.id = randomUUID();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.is_Admin = false;
    this.created_at = new Date();
    this.tasks = [];
  }

  static create(props: IUser) {
    const user = new User(props);
    return user;
  }
}
