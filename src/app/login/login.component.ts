import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  submitted = false;

  errorMessage = '';

  constructor(
    private fb: FormBuilder,        
    private authService: AuthService, 
    private router: Router           
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  submitLoginForm() {
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }


    const { email, password } = this.loginForm.value;


    const success = this.authService.login(email, password);

    if (success) {

      alert('Login successful!');
      this.router.navigate(['/cart']); 
    } else {
      this.errorMessage = 'Email or password is incorrect.';
    }
  }
}
