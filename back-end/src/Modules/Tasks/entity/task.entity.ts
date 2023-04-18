import { randomUUID } from "crypto";
import { CustomError } from "../../errors/customError.error";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { ITask } from "./task.interface";
dayjs.extend(isSameOrAfter);

export class Task {
  id: string;
  name: string;
  urgency: string;
  id_user: string;
  created_At: string;
  updated_At: string;
  end_At: string;

  private constructor({ name, urgency, id_user, end_At }: ITask) {
    if (!name) {
      throw new CustomError("Name must be provided");
    }
    if (!end_At) {
      throw new CustomError("end_At must be provided");
    }
    const today = dayjs(new Date());
    const endDateFormated = end_At.split("/");
    const end = dayjs(
      `${endDateFormated[2]}, ${endDateFormated[1]}, ${endDateFormated[0]}`
    );
    const endDateIsBeforeThanToday = end.isBefore(today, "day");
    if (endDateIsBeforeThanToday) {
      throw new CustomError(
        `Ops, ainda não é possivel criar uma task retroativa!`
      );
    }
    if (!id_user) {
      throw new CustomError("Cannot find user");
    }
    this.id = randomUUID();
    this.name = name;
    this.urgency = urgency;
    this.id_user = id_user;
    this.created_At = today.format("DD/MM/YYYY");
    this.updated_At = today.format("DD/MM/YYYY hh:mm:ss");
    this.end_At = end.format("DD/MM/YYYY");
  }

  static create(data: ITask) {
    const task = new Task(data);
    return task;
  }
}
