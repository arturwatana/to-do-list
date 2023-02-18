import { randomUUID } from "crypto";
import { CustomError } from "../../errors/customError.error";

export class Task {
  id?: string;
  name: string;
  urgency: string;
  id_user: string;
  created_At?: Date;
  end_at: string;

  private constructor({ name, urgency, id_user, end_at }: Task) {
    if (!name) {
      throw new CustomError("Name must be provided");
    }
    if (!id_user) {
      throw new CustomError("A task must have an user");
    }
    this.id = randomUUID();
    this.name = name;
    this.urgency = urgency;
    this.id_user = id_user;
    this.created_At = new Date();
    this.end_at = end_at;
  }

  static create(data: Task) {
    const task = new Task(data);
    return task;
  }
}
