import { taskModel } from "../../../infra/database/models/task.model";
import { Task } from "../../entity/task.entity";
import { ITasksRepository } from "../ITaskRepository.interface";

export class TaskMongoRepository implements ITasksRepository {
  async save(data: Task): Promise<Task> {
    const task = await taskModel.create(data);
    return task;
  }
  async findById(id: string): Promise<Task | null> {
    const task = await taskModel.findOne({
      id,
    });
    return task || null;
  }
  async deleteById(id: string): Promise<void> {
    await taskModel.deleteOne({
      id,
    });
  }
  async getTasksByUserID(userID: string): Promise<Task[]> {
    const userTasks = await taskModel.find({ id_user: userID });
    return userTasks;
  }
  async showAllTasks(): Promise<Task[]> {
    const tasks = await taskModel.find();
    return tasks;
  }
  async changeTaskName(newName: string, id: string): Promise<Task | null> {
    await taskModel.findOneAndUpdate(
      {
        id,
      },
      {
        name: newName,
      }
    );
    const taskWithNewName = await taskModel.find({
      id,
    });
    return taskWithNewName[0];
  }
}
