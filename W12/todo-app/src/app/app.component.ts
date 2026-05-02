import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // ✅ ADD THIS

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  // ✅ ADD HERE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task: string = "";
  date: string = "";

  taskList: { name: string; date: string }[] = [];
  editIndex: number = -1;

  addTask() {
    if (this.task.trim() === "" || this.date === "") return;

    if (this.editIndex === -1) {
      this.taskList.push({ name: this.task, date: this.date });
    } else {
      this.taskList[this.editIndex] = { name: this.task, date: this.date };
      this.editIndex = -1;
    }

    this.task = "";
    this.date = "";
  }

  editTask(index: number) {
    this.task = this.taskList[index].name;
    this.date = this.taskList[index].date;
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }
}