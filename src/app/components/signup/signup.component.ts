import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle signup logic here (e.g., call a registration service)
      console.log('Creating account for:', this.name, this.email, this.password);

      // Navigate to the login page upon successful signup
      this.router.navigate(['/login']); // Redirect to login after signup
    }
  }
}
