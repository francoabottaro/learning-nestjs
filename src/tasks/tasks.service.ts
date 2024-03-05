import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './dto/task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Task',
      description: 'Some Task',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string) {
    return (this.tasks = this.tasks.filter((tasks) => tasks.id !== id));
  }
  updateTask(id: string, upedatedFields: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, upedatedFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
