import { randomUUID } from "crypto";
import { CustomError } from "../../errors/customError.error";
import { ITask } from "../../Tasks/entity/task.interface";

export class User {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  is_Admin?: boolean;
  tasks?: ITask[];
  created_at: Date;

  private constructor({ name, email, username, password }: User) {
    if (!name || !email || !username || !password) {
      throw new CustomError("Required fields are missing!");
    }
    this.id = randomUUID();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.is_Admin = false;
    this.tasks = [];
    this.created_at = new Date();
  }

  static create(props: User) {
    const user = new User(props);
    return user;
  }
}
