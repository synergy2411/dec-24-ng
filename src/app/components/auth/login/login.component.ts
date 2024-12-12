import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitForm(loginForm: NgForm) {
    console.log('Email : ', loginForm.value.email);
    console.log('Password : ', loginForm.value.password);
    this.authService
      .onUserLogin(loginForm.value.email, loginForm.value.password)
      .subscribe({
        next: (data) => {
          this.errorMessage = '';
          this.router.navigateByUrl('/users');
        },
        error: (err) => {
          this.errorMessage = err.errorMessage;
        },
        complete: () => (this.errorMessage = ''),
      });
  }
}
