import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();

  title = '';
  description = '';
  category = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.title.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        category: this.category,
        isComplete: false,
      };
      this.taskService.addTask(newTask);
      this.taskAdded.emit();
      this.title = '';
      this.description = '';
      this.category = '';
    }
  }
}
