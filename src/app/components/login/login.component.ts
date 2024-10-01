import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle login logic here (e.g., call an authentication service)
      console.log('Logging in with:', this.email, this.password);

      // Navigate to the dashboard upon successful login
      this.router.navigate(['/']); // Redirect to the dashboard
    }
  }
}
