import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() task: any;
  @Output() close = new EventEmitter<void>();

  saveTask() {
    console.log('Task saved:', this.task);
    // Logic for saving the task can be added here.
    this.close.emit(); // Close the form after saving
  }

  cancel() {
    this.close.emit(); // Close the form
  }
}
