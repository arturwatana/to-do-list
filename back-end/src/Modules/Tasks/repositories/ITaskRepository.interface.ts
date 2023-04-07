import { Task } from "../entity/task.entity";

export interface ITasksRepository {
  save(data: Task): Promise<Task>;
  getTasksByUserID(userID: string): Promise<Task[]>;
  showAllTasks(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  deleteById(id: string): Promise<void>;
  changeTaskName(newName: string, id: string): Promise<Task | null>;
}
