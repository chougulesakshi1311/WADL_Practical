import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user: any = {};

  constructor() {
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }
}