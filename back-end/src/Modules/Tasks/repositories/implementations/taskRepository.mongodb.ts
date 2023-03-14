import { taskModel } from "../../../infra/database/models/task.model";
import { Task } from "../../entity/task.entity";
import { ITasksRepository } from "../ITaskRepository.interface";

export class TaskMongoRepository implements ITasksRepository {
  async save(data: Task): Promise<Task> {
    const task = await taskModel.create(data);
    return task;
  }
  async getTasksByUserID(userID: string): Promise<Task[]> {
    const userTasks = await taskModel.find({ id_user: userID });
    return userTasks;
  }
  async showAllTasks(): Promise<Task[]> {
    const tasks = await taskModel.find();
    return tasks;
  }
}
