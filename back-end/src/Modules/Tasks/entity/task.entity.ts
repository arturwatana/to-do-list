import { randomUUID } from "crypto";
import { CustomError } from "../../errors/customError.error";
import dayjs from "dayjs";

export class Task {
  id?: string;
  name: string;
  urgency: string;
  id_user?: string;
  created_At: string;
  end_At: string;

  private constructor({ name, urgency, id_user, end_At }: Task) {
    if (!name) {
      throw new CustomError("Name must be provided");
    }
    if (!end_At) {
      throw new CustomError("end_At must be provided");
    }

    const today = dayjs(new Date());
    const end = dayjs(end_At);
    if (end.isBefore(today)) {
      throw new CustomError(
        "Ops, ainda não é possivel criar uma task retroativa"
      );
    }
    this.id = randomUUID();
    this.name = name;
    this.urgency = urgency;
    this.id_user = id_user;
    this.created_At = today.format("DD/MM/YYYY");
    this.end_At = end.format("DD/MM/YYYY");
  }

  static create(data: Task) {
    const task = new Task(data);
    return task;
  }
}
