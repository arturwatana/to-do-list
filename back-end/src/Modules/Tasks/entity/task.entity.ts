import { randomUUID } from "crypto";
import { CustomError } from "../../errors/customError.error";

export class Task {
  id?: string;
  name: string;
  urgency: string;
  id_user?: string;
  created_At: Date;
  end_At: string;

  private constructor({ name, urgency, id_user, created_At, end_At }: Task) {
    if (!name) {
      throw new CustomError("Name must be provided");
    }
    if (!created_At || !end_At) {
      throw new CustomError("end_At must be provided");
    }
    this.id = randomUUID();
    this.name = name;
    this.urgency = urgency;
    this.id_user = id_user;
    this.created_At = created_At;
    this.end_At = end_At;
  }

  static create(data: Task) {
    const task = new Task(data);
    return task;
  }
}
