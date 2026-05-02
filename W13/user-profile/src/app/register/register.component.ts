import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  name = "";
  email = "";
  password = "";

  constructor(private router: Router) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful");

    this.router.navigate(['/login']);
  }
}