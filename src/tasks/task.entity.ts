export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRES = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
