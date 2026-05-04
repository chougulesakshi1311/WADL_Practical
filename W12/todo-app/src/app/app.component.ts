import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string = '';
  tasks: string[] = [];
  editTaskIndex : number | null = null;

  saveTask() {
    if(this.newTask.trim()) {
      if(this.editTaskIndex !== null) {
        this.tasks[this.editTaskIndex] = this.newTask.trim();
        this.editTaskIndex = null;
      } else {
        this.tasks.push(this.newTask.trim());
      }
    }
    this.newTask = '';
  }

  editTask(index: number) {
    this.newTask = this.tasks[index];
    this.editTaskIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
