import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmitForm(loginForm: NgForm) {
    console.log('Email : ', loginForm.value.email);
    console.log('Password : ', loginForm.value.password);
    this.authService
      .onUserLogin(loginForm.value.email, loginForm.value.password)
      .subscribe({
        next: (data) => {
          this.errorMessage = '';
        },
        error: (err) => {
          this.errorMessage = err.errorMessage;
        },
        complete: () => (this.errorMessage = ''),
      });
  }
}
