import { TaskStatus } from '../task.entity';

export class CreateTaskDTO {
  title: string;
  description: string;
}

export class UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
