import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component'; // Ensure this is correct
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent,FormsModule], // Include TaskFormComponent here
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  showTaskForm = false;
  selectedTask: Task | null = null;
  searchTerm: string = '';

  constructor() {
    this.loadTasks(); // Load tasks when component initializes
  }

  loadTasks() {
    this.tasks = [
      { assignedTo: 'User 1', status: 'In Progress', dueDate: new Date('2024-10-12'), priority: 'High', comments: 'Initial discussion', selected: false },
      { assignedTo: 'User 2', status: 'Completed', dueDate: new Date('2024-10-10'), priority: 'Medium', comments: 'Follow-up required', selected: false },
      { assignedTo: 'User 3', status: 'Pending', dueDate: new Date('2024-10-15'), priority: 'Low', comments: 'Needs review', selected: false },
      { assignedTo: 'User 4', status: 'In Progress', dueDate: new Date('2024-10-18'), priority: 'High', comments: 'Work in progress', selected: false }
      // Add more tasks as needed
    ];
  }

  filteredTasks() {
    if (!this.searchTerm) {
      return this.tasks; // Return all tasks if no search term is provided
    }
    return this.tasks.filter(task =>
      task.assignedTo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openNewTaskForm() {
    this.selectedTask = null; // Reset selected task for a new task
    this.showTaskForm = true; // Show the task form
  }

  refreshTasks() {
    this.loadTasks(); // Reload tasks (if you have a service, call it here)
    this.searchTerm = ''; // Clear the search term
  }

  editTask(task: Task) {
    this.selectedTask = task; // Set the selected task for editing
    this.showTaskForm = true; // Show the task form
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task); // Implement deletion logic here
  }
}
