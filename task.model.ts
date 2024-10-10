// src/app/models/task.model.ts
export interface Task {
    assignedTo: string;
    status: string;
    dueDate: Date;
    priority: string;
    comments: string;
    selected?: boolean; // Optional property for checkbox
  }
  