import { Task } from "../entity/task.entity";

export interface ITasksRepository {
  save(data: Task): Promise<Task>;
}
