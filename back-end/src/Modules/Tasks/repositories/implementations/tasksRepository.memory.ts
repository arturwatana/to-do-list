import { CustomError } from "../../../errors/customError.error";
import { Task } from "../../entity/task.entity";
import { ITask } from "../../entity/task.interface";
import { ITasksRepository } from "../ITaskRepository.interface";

export class TasksRepositoryMemory implements ITasksRepository {
  tasks: Task[] = [];

  private static instance: TasksRepositoryMemory;

  static getInstance() {
    if (!TasksRepositoryMemory.instance) {
      TasksRepositoryMemory.instance = new TasksRepositoryMemory();
    }
    return TasksRepositoryMemory.instance;
  }
  async save(data: Task): Promise<Task> {
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
  async findById(id: string): Promise<Task | null> {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      return task;
    }
    return null;
  }
  async deleteById(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
  }
  async changeTaskName(newName: string, id: string): Promise<Task | null> {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new CustomError("Task not found", 400);
    }
    task.name = newName;
    return task;
  }
}
