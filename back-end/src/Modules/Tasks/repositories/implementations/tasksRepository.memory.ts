import { Task } from "../../entity/task.entity";
import { ITask } from "../../entity/task.interface";
import { ITasksRepository } from "../ITaskRepository.interface";

export class TasksRepositoryMemory implements ITasksRepository {
  tasks: ITask[] = [];

  private static instance: TasksRepositoryMemory;

  static getInstance() {
    if (!TasksRepositoryMemory.instance) {
      TasksRepositoryMemory.instance = new TasksRepositoryMemory();
    }
    return TasksRepositoryMemory.instance;
  }
  async save(data: ITask): Promise<Task> {
    this.tasks.push(data);
    return data;
  }
  async getTasksByUserID(userID: string): Promise<Task[]> {
    const userTasks = this.tasks.filter((task) => task.id_user === userID);
    return userTasks;
  }
  async showAllTasks(): Promise<Task[]> {
    return this.tasks;
  }
}
